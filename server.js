const express = require("express");
const path = require("path");
const app = express();
const { body, validationResult } = require("express-validator");
const db = require("./db/queries");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// const mangas = [
//     {
//         id: 1,
//         img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvAzMxVb7pQUlHGjtC8do83vd-UClldQQivBaI3Dq1ny95Ewf4",
//         title: "Attack On Titan",
//         author: "Hajime Isayama",
//     },
//     {
//         id: 2,
//         img: "https://meo.comick.pictures/0GRgd-m.jpg",
//         title: "Solo Leveling",
//         author: "Chu Gong",
//     },
//     {
//         id: 3,
//         img: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/09/FdfvBeZVIAAraf_.jpg",
//         title: "Jujutsu Kaisen",
//         author: "Gege Akutami",
//     },
// ];

app.get("/", async (req, res, next) => {
    const mangas = await db.getallmangas();
    res.render("home", { mangas: mangas });
});

app.get("/authors", async (req, res, next) => {
    const mangasduplicate = await db.getallmangas();
    const mangas = Array.from(
        new Map(mangasduplicate.map((item) => [item.author, item])).values()
    );
    res.render("authors", { mangas: mangas });
});

app.get("/authors/:author", async (req, res, next) => {
    const mangas = await db.getmangasbyauthor(req.params.author);
    res.render("mangasbyauthor", { mangas: mangas });
});

app.get("/manga/create", (req, res, next) => {
    res.render("form");
});

app.post(
    "/manga/create",
    body("img").isURL().withMessage("Image must be a valid URL"),
    async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.render("invalidurl.ejs").status(500);
        }
        await db.createnewmanga(req.body);
        res.redirect("/");
    }
);

app.post("/delete/:id", async (req, res, next) => {
    await db.deletemanga(req.params.id);
    res.redirect("/");
});

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening to PORT ${process.env.PORT}`);
});
