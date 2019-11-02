const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
  database: '20kWave'
});

db.connect((err) => {
  if (err) {
    console.log('ERROR: Unable to connect to database!')
  }
  console.log('Successfully connected to database!')
})

module.exports = db;