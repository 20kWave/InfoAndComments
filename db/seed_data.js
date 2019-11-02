const fs = require('fs');


const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const faker = require('faker');
const dateGenerator = require('random-date-generator');

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 3
  }
});

const getRandomDate = () => {
  var startDate = new Date(2015, 1, 1);;
  var endDate = new Date();
  var randomDate = dateGenerator.getRandomDateInRange(startDate, endDate);
  return randomDate;
}


const writeSongs = fs.createWriteStream('songs.csv');
writeSongs.write('id,title,artist_id,num_plays,num_likes,num_reposts,release_date,p_line,c_line\n', 'utf-8');
const writeSongData = (writer, encoding, callback) => {
  var i = 10000000;
  var id = 0;

  write = () => {
    var ok = true;
    do {
      i--;
      id++;
      var title = lorem.generateWords(Math.floor(Math.random() * 4) + 1);
      var artist_id = Math.floor(Math.random() * 14000000) + 1;
      var num_plays = Math.floor(Math.random() * 1000000);
      var num_likes = Math.floor(Math.random() * 10000);
      var num_reposts = Math.floor(Math.random() * 500);
      var release_date = getRandomDate();
      var p_line = lorem.generateWords(Math.floor(Math.random() * 21) + 5);
      var c_line = lorem.generateWords(Math.floor(Math.random() * 21) + 5);
      var data = `${id},${title},${artist_id},${num_plays},${num_likes},${num_reposts},${release_date},${p_line},${c_line}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok) {
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write();
  }
}

const writeArtists = fs.createWriteStream('artists.csv');
writeArtists.write('id,artist_name,num_followers,num_songs\n', 'utf-8');
const writeArtistData = (writer, encoding, callback) => {
  var i = 14000000;
  var id = 0;
  var totalSongs = 10000000;

  write = () => {
    var ok = true;
    do {
      
      i--;
      id++;
      var artist_name = lorem.generateWords(Math.floor(Math.random() * 4) + 1);
      var num_followers = lorem.generateWords(Math.floor(Math.random() * 1000000) + 1);

      if (totalSongs < 0) {
        var num_songs = 0;
      } else {
        var songsAdded = Math.floor(Math.random() * 200) + 1;
        var num_songs = songsAdded;
        totalSongs -= songsAdded;
      }

      var data = `${id},${artist_name},${num_followers},${num_songs}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok) {
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write();
  }
}

const writeComments = fs.createWriteStream('comments.csv');
writeComments.write('id,author,content,author_id,song_id,commented_at\n', 'utf-8');
const writeCommentsData = (writer, encoding, callback) => {
  var i = 300000000;
  var id = 0;

  write = () => {
    var ok = true;
    do {
      i--;
      id++;
      var author = lorem.generateWords(Math.floor(Math.random() * 4) + 1);
      var content = lorem.generateSentences(Math.floor(Math.random() * 8) + 1); 
      var author_id = Math.floor(Math.random() * 14000000) + 1;
      var song_id = Math.floor(Math.random() * 1000000) + 1;
      var commented_at = getRandomDate();
      var data = `${id},${author},${content},${author_id},${song_id},${commented_at}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok) {
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write();
  }
}

writeSongData(writeSongs, 'utf-8', () => {
  writeSongs.end();
});

writeArtistData(writeSongs, 'utf-8', () => {
  writeArtists.end();
});

writeCommentsData(writeComments, 'utf-8', () => {
  writeComments.end();
});