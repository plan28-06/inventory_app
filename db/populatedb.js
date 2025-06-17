const { Client } = require("pg");

const SQL = `create table if not exists mangas(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    img text,
    title text,
    author text
);`;

const SQL1 = `insert into mangas(img,title,author) values ('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSvAzMxVb7pQUlHGjtC8do83vd-UClldQQivBaI3Dq1ny95Ewf4','Attack On Titan','Hajime Isayama');`;

const SQL2 = `insert into mangas(img,title,author) values ('https://meo.comick.pictures/0GRgd-m.jpg','Solo Leveling','Chu Gong');`;

const SQL3 = `insert into mangas(img,title,author) values ('https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/09/FdfvBeZVIAAraf_.jpg','Jujutsu Kaisen','Gege Akutami');`;

const SQL4 = `insert into mangas(img,title,author) values ('https://preview.redd.it/chainsaw-man-season-2-and-csm-the-reze-arc-are-the-gta-6-of-v0-1cmz17u96t5e1.jpeg?width=1080&crop=smart&auto=webp&s=6953732b964891b0e502be8ca2f15e5df916a11f','Chainsaw Man','Tatsuki Fujimoto');`;

const SQL5 = `insert into mangas(img,title,author) values ('https://preview.redd.it/new-key-visual-for-the-egghead-island-arc-v0-n41qfpk7ad8e1.jpeg?auto=webp&s=148b57ff08992a76653433bf524589ff0fe543a6','One Piece','Eiichiro Oda');`;

const SQL6 = `insert into mangas(img,title,author) values ('https://preview.redd.it/monsters-by-eiichiro-oda-anime-adaptation-key-visual-v0-2iqfperp0e6c1.png?width=1080&crop=smart&auto=webp&s=7dee8cffe144f35d45f44da612cd529e429458ce','Monsters','Eiichiro Oda');`;

async function main() {
    console.log("Seeding");
    const client = new Client({
        connectionString: process.env.connectionString,
        ssl: {
            rejectUnauthorized: false,
        },
    });
    await client.connect();
    await client.query(SQL);
    await client.query(SQL1);
    await client.query(SQL2);
    await client.query(SQL3);
    await client.query(SQL4);
    await client.query(SQL5);
    await client.query(SQL6);
    await client.end();
    console.log("Done");
}

main();
