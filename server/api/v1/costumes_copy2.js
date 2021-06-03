require('dotenv').config();
const { Router } = require('express');
const router = Router();

/*
async function main() {
  // get the client
  const mysql = require('mysql2/promise');
  // create the connection
  const connection = await mysql.createConnection({host:'localhost', user: 'root', database: 'test'});
  // query database
  const [rows, fields] = await connection.execute('SELECT * FROM `table` WHERE `name` = ? AND `age` > ?', ['Morty', 14]);
}
*/

const mysql = require('mysql2/promise');
/*
mysqlCon = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'database',
  multipleStatements: true
});

async function test() {
  mysqlCon.query(`SELECT cos_name FROM sql_derech_haketzev.costumes;`)
  .then(([rows, fields]) => {
    rows.forEach((costume, index) => {
      // get costume colors
      mysqlCon.query(`SELECT cit_colors FROM sql_derech_haketzev.costume_items
      LEFT JOIN sql_derech_haketzev.costumes ON cit_costume_id = cos_id
      WHERE cos_name='${costume.cos_name}' GROUP BY cit_colors;`, (error, results, fields) => {
        if(error) throw error;
        // costumesPrivews[index] = results.join(', ');
        // console.log(7, costumesPrivews);
        console.log(7, results);
        console.log(results.join(', '));
      });
    });
  });
}
*/
let x = [];
async function test(next) {
  const conn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_NAME || 'database',
    multipleStatements: true
  });
  const [rows, fields] = await conn.query(`SELECT cos_name FROM sql_derech_haketzev.costumes;`);
  x = [...rows];
  console.log(1, rows);
  x.forEach(async (costume, index) => {
    // get costume colors
    const [colorsRows, colorsFields] = await conn.query(`SELECT cit_colors FROM sql_derech_haketzev.costume_items
    LEFT JOIN sql_derech_haketzev.costumes ON cit_costume_id = cos_id
    WHERE cos_name='${costume.cos_name}' GROUP BY cit_colors;`);
    costume.cos_colors = [];
    colorsRows.forEach(color => {
      costume.cos_colors.push(color.cit_colors);
      // console.log(3, color);
      // console.log(4, costume);
    });
  });
  await conn.end();
  next();
}
test(() => (console.log(2, x)));
module.exports = router;
