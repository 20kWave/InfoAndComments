const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const db = require('../db/Cassandra/index.js');
const PORT = 3030;
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
// app.use('/songs/:id', express.static(__dirname, '../public'));

app.get('/songs/:id', (req, res) => {
  db.getSongById(req.params.id)
    .then((data) => {
      res.json(data);
    })
})

app.get('/api/comments/:song_id', (req, res) => {
  db.getCommentsBySongId(req.params.song_id)
    .then((data) => {
      res.json(data);
    })
})

app.get('/api/songs/:genre', (req, res) => {
  var genre;
  if (req.params.genre === 'hiphop') {
    genre = 'Hip Hop'
  } else if (req.params.genre === 'rock') {
    genre = 'Rock';
  } else if (req.params.genre === 'house') {
    genre = 'House';
  } else if (req.params.genre === 'pop') {
    genre = 'Pop';
  } else if (req.params.genre === 'electronica') {
    genre = 'Electronica';
  } else if (req.params.genre === 'country') {
    genre = 'Country';
  }

  db.getSongsByGenre(genre)
    .then((data) => {
      res.json(data);
    })
})

//------------------------------------------------------------------------//
const TimeUuid = require('cassandra-driver').types.TimeUuid;
const dateGenerator = require('random-date-generator');
const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 1
  },
  wordsPerSentence: {
    max: 5,
    min: 1
  }
});
const getRandomDate = () => {
  var startDate = new Date(2015, 1, 1);;
  var endDate = new Date();
  var randomDate = dateGenerator.getRandomDateInRange(startDate, endDate);
  return randomDate.toString();
}

app.post('/api/post/comments/:song_id', (req, res) => {
  var song_id = req.params.song_id;
  var id = TimeUuid.now();
  var content = lorem.generateSentences(Math.floor(Math.random() * 3) + 1);
  var commented_at = getRandomDate();
  db.postComment(song_id, id, content, commented_at)
    .then(() => {
      var newComment = {
        song_id,
        id,
        content,
        commented_at
      }
      res.send(newComment);
    })
})
//------------------------------------------------------------------------//

app.listen(PORT, console.log('Listening on port', PORT));