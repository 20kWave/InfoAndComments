// Importing express framework, body-parser for post requests
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
var commentsRouter = require('./routers/comments.js');
var cors = require('cors');


// Set PORT# to listen on
const PORT = 3030;

// Create server
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

// listen on port
app.listen(PORT, console.log('Listening on port', PORT));

//================================================================================================================================================================//

/*

const express = require('express');
const mysql = require('mysql')
const PORT = 4001;
const bodyParser = require('body-parser');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'rootpassword',
});

db.connect((err) => {
  if (err) {
    console.log('ERROR: Unable to connect to database!')
  }
  console.log('Successfully connected to database!')
})

const app = express();

app.get('/songs', (req, res) => {
  var sql = 'CREATE DATABASE songs';
  db.query(sql, (err, data) => {
    if (err) {
      console.log('ERROR: Unable to create database!')
    }
    res.send('Database successfully created!');
  })
})



// manage CORS policy, may need this fo CORS (mdlp)
const cors = require('cors');
app.use(cors());



app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.json());

app.use('/songs/:id', express.static(__dirname, '../public'));

// get all songs from MySQL db 
app.get('/api/songs', (req, res, next) => {
  //res.params.id
})

app.get('/api/songs/:id', (req, res, next) => {
  // get one song from MySQL db 
})

app.listen(PORT, () => {console.log('Listening on port', PORT)});

*/