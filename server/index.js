// Importing express framework, body-parser for post requests
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3030;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../public')));
// app.use('/songs/:id', express.static(__dirname, '../public'));

// app.get('/songs', (req, res) => {
//   var sql = 'CREATE DATABASE songs';
//   db.query(sql, (err, data) => {
//     if (err) {
//       console.log('ERROR: Unable to create database!')
//     }
//     res.send('Database successfully created!');
//   })
// })

// app.get('/api/songs', (req, res, next) => {
//   //res.params.id
// })

// app.get('/api/songs/:id', (req, res, next) => {
//   // get one song from MySQL db 
// })

app.listen(PORT, console.log('Listening on port', PORT));


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
