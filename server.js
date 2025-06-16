const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
    res.render("home");
});

app.listen(process.env.PORT, () => {
    console.log(`Listening to PORT ${process.env.PORT}`);
});
