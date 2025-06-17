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

module.exports = { getallmangas, getmangasbyauthor };
