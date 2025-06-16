const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const mangas = [
    {
        id: 1,
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvAzMxVb7pQUlHGjtC8do83vd-UClldQQivBaI3Dq1ny95Ewf4",
        title: "Attack On Titan",
        author: "Hajime Isayama",
    },
    {
        id: 2,
        img: "	https://meo.comick.pictures/0GRgd-m.jpg",
        title: "Solo Leveling",
        author: "Chu Gong",
    },
];

app.get("/", (req, res, next) => {
    res.render("home", { mangas: mangas });
});

app.listen(process.env.PORT, () => {
    console.log(`Listening to PORT ${process.env.PORT}`);
});
