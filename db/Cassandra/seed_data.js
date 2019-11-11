const fs = require('fs');

const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const faker = require('faker');
const dateGenerator = require('random-date-generator');
const TimeUuid = require('cassandra-driver').types.TimeUuid;

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

// const writeSongsById = fs.createWriteStream('songs_by_id.csv');
// const writeSongDataById = (writer, encoding, callback) => {
//   var genres = ['Hip Hop', 'Rock', 'House', 'Pop', 'Electronic', 'Country'];
//   var i = 10000000;
//   var id = 0;
//   write = () => {
//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     var ok = true;
//     do {
//       if (i % 1000000 === 0) {
//         console.log(`${i} records remaining... ${((id / 10000000) * 100).toFixed(2)}%\n${time}\n`)
//       } else if (id === 10000000) {
//         console.log(`0 records remaining... 100%\n${time}\n`)
//       }
//       i--;
//       id++;
//       var title = lorem.generateWords(Math.floor(Math.random() * 4) + 1);
//       var genre = genres[Math.floor(Math.random() * 5)];
//       var artist_name = faker.name.findName();
//       var num_comments = Math.floor(Math.random() * 1000);
//       var num_plays = Math.floor(Math.random() * 500000);
//       var num_likes = Math.floor(Math.random() * 10000);
//       var num_reposts = Math.floor(Math.random() * 500);
//       var release_date = getRandomDate();
//       var p_line = lorem.generateWords(Math.floor(Math.random() * 6) + 5);
//       var c_line = lorem.generateWords(Math.floor(Math.random() * 6) + 5);
//       var data = `${id},${title},${genre},${artist_name},${num_comments},${num_plays},${num_likes},${num_reposts},${release_date},${p_line},${c_line}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//       if (i > 0) {
//         writer.once('drain', write);
//       }
//     }
//   write();
// }

// const writeSongsByGenre = fs.createWriteStream('songs_by_genre.csv');
// const writeSongDataByGenre = (writer, encoding, callback) => {
//   var genres = ['Hip Hop', 'Rock', 'House', 'Pop', 'Electronic', 'Country'];
//   var i = 10000000;
//   var id = 0;
//   write = () => {
//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     var ok = true;
//     do {
//       if (i % 1000000 === 0) {
//         console.log(`${i} records remaining... ${((id / 10000000) * 100).toFixed(2)}%\n${time}\n`)
//       } else if (id === 10000000) {
//         console.log(`0 records remaining... 100%\n${time}\n`)
//       }
//       i--;
//       id++;
//       var title = lorem.generateWords(Math.floor(Math.random() * 4) + 1);
//       var genre = genres[Math.floor(Math.random() * 5)];
//       var artist_name = faker.name.findName();
//       var num_comments = Math.floor(Math.random() * 1000);
//       var num_plays = Math.floor(Math.random() * 500000);
//       var num_likes = Math.floor(Math.random() * 10000);
//       var num_reposts = Math.floor(Math.random() * 500);
//       var release_date = getRandomDate();
//       var p_line = lorem.generateWords(Math.floor(Math.random() * 6) + 5);
//       var c_line = lorem.generateWords(Math.floor(Math.random() * 6) + 5);
//       var data = `${genre},${id},${title},${artist_name},${num_comments},${num_plays},${num_likes},${num_reposts},${release_date},${p_line},${c_line}\n`;
//       if (i === 0) {
//         writer.write(data, encoding, callback);
//       } else {
//         ok = writer.write(data, encoding);
//       }
//     } while (i > 0 && ok);
//       if (i > 0) {
//         writer.once('drain', write);
//       }
//     }
//   write();
// }

const writeComments = fs.createWriteStream('comments.csv');
const writeCommentsData = (writer, encoding, callback) => {
  var i = 100000000;
  write = () => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var ok = true;
    do {
      if (i % 1000000 === 0) {
        console.log(`${i} records remaining...\n${time}\n`)
      } else if (i === 0) {
        console.log(`0 records remaining... 100%\n${time}\n`)
      }
      i--;
      var id = TimeUuid.now();
      var song_id = Math.floor(Math.random() * 10000000) + 1;
      var content = lorem.generateSentences(Math.floor(Math.random() * 3) + 1); 
      var commented_at = getRandomDate();
      var data = `${song_id},${id},${content},${commented_at}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
      if (i > 0) {
        writer.once('drain', write);
      }
    }
  write();
}

// writeSongsById.write('id,title,genre,artist_name,num_comments,num_plays,num_likes,num_reposts,release_date,p_line,c_line\n', 'utf-8');
// writeSongDataById(writeSongsById, 'utf-8', () => {
//   writeSongsById.end();
// });

// writeSongsByGenre.write('genre,id,title,artist_name,num_comments,num_plays,num_likes,num_reposts,release_date,p_line,c_line\n', 'utf-8');
// writeSongDataByGenre(writeSongsByGenre, 'utf-8', () => {
//   writeSongsByGenre.end();
// });

writeComments.write('song_id,id,content,commented_at\n', 'utf-8');
writeCommentsData(writeComments, 'utf-8', () => {
  writeComments.end();
});