const pool = require("./pool");

async function getallmangas() {
    const { rows } = await pool.query("select * from mangas;");
    return rows;
}

async function getmangasbyauthor(author) {
    const { rows } = await pool.query(
        "select * from mangas where author = $1;",
        [author]
    );
    return rows;
}

async function createnewmanga(manga) {
    await pool.query(
        "INSERT INTO mangas (img,title,author) VALUES ($1,$2,$3);",
        [manga.img, manga.title, manga.author]
    );
}

async function deletemanga(id) {
    await pool.query("delete from mangas where id = $1;", [id]);
}

module.exports = {
    getallmangas,
    getmangasbyauthor,
    createnewmanga,
    deletemanga,
};
