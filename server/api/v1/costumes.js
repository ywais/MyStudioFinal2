require('dotenv').config();
const { Router } = require('express');
const mysql = require('mysql');
const router = Router();

let mysqlCon;
try {
    mysqlCon = mysql.createConnection({
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

mysqlCon.connect(error => {
  if(error) console.error(error);
  else console.log('Costumes connected!');
});
///////////////////////////not working
const getCostumesNames = async () => {
  let costumesNames = [3];
  await mysqlCon.query(`SELECT cos_name FROM sql_derech_haketzev.costumes;`, (error, results, fields) => {
    if(error){
      console.error(error);
      return costumesNames = [{ message: 'Cannot process request' }];
    }
    costumesNames = [...results];
  });
  await setTimeout(() => {
    let x = 1;
  }, 1000);
  console.log(1, costumesNames);
  return costumesNames;
};

router.get('/', (req, res) => {
  getCostumesNames().then(result => {
    console.log(3, getCostumesNames());
    res.send(result);
  }).catch(error => {
    console.error(error);
    return res.status(400).json({ message: 'Cannot process request' });
  })
});

router.get('/names', (req, res) => {
  try {
    mysqlCon.query(`SELECT cos_name FROM sql_derech_haketzev.costumes;`, (error, results, fields) => {
      if(error) throw error;
      res.send(results);
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Cannot process request' });
  }
});

router.get('/preview', (req, res) => {
  try {
    let costumesPrivews = [];
    // get costumes names
    mysqlCon.query(`SELECT cos_name FROM sql_derech_haketzev.costumes;`, (error, results, fields) => {
      if(error) throw error;
      costumesPrivews = [...results];
      //get costumes details
      results.forEach((costume, index) => {
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
      console.log(5, costumesPrivews);
      res.send(costumesPrivews);
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Cannot process request' });
  }
});

module.exports = router;
