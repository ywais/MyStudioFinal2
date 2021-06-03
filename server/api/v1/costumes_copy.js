require('dotenv').config();
const { Router } = require('express');
const mysql = require('mysql2/promise');
const router = Router();

async function main() {
  let mysqlCon;
  try {
      mysqlCon = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || null,
      database: process.env.DB_NAME || 'database',
      multipleStatements: true
    });
  } catch (error) {
    console.error('SQL connection failed');
    console.error(error);
  }

  // mysqlCon.connect(error => {
  //   if(error) console.error(error);
  //   else console.log('Costumes connected!');
  // });

  const getCostumesNames = async (prevArray) => {
    const [rows, fields] = await mysqlCon.execute(`SELECT cos_name FROM sql_derech_haketzev.costumes;`);
    console.log(13, rows);
    return prevArray = [...rows];

    // mysqlCon.execute(`SELECT cos_name FROM sql_derech_haketzev.costumes;`, (error, results, fields) => {
    //   if(error){
    //     console.error(error);
    //     return prevArray = [{ message: 'Cannot process request' }];
    //   }
    //   return prevArray = [...results];
    // });
  };

  const getCostumesPreview = async () => {
    let costumesPrivews = [];
    await getCostumesNames(costumesPrivews);
    // if (costumesPrivews.length > 0) {
    //   console.log(9, costumesPrivews);
    // }
    return costumesPrivews;
  };

  console.log(11, getCostumesPreview());
  // router.get
}
main();

module.exports = router;
