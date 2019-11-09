const fs = require('fs');

const LoremIpsum = require('lorem-ipsum').LoremIpsum;
const faker = require('faker');
const dateGenerator = require('random-date-generator');

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

const writeSongs = fs.createWriteStream('songs.csv');
const writeSongData = (writer, encoding, callback) => {
  var i = 10000000;
  var id = 0;
  write = () => {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var ok = true;
    do {
      if (i % 1000000 === 0) {
        console.log(`${i} records remaining... ${((id / 10000000) * 100).toFixed(2)}%\n${time}\n`)
      } else if (id === 10000000) {
        console.log(`0 records remaining... 100%\n${time}\n`)
      }
      // var randomYear1 = 1970 + Math.floor(Math.random() * 50);
      // var randomYear2 = 2000 + Math.floor(Math.random() * 20);
      // var companyName1 = faker.company.companyName();
      // var companyName2 = faker.company.companyName();
      // var companyName3 = faker.company.companyName();
      i--;
      id++;
      var title = lorem.generateWords(Math.floor(Math.random() * 4) + 1);
      var member_id = Math.floor(Math.random() * 14000000) + 1;
      var num_plays = Math.floor(Math.random() * 500000);
      var num_likes = Math.floor(Math.random() * 10000);
      var num_reposts = Math.floor(Math.random() * 500);
      var release_date = getRandomDate();
      // var p_line = `℗${randomYear1} ${companyName1}, LLC, distributed by ${companyName2} a division of ${companyName3}, Inc., ${randomYear2} ${faker.address.city}, ${faker.address.state} ${faker.address.zipCode}`
      var p_line = lorem.generateWords(Math.floor(Math.random() * 6) + 5);
      // var c_line = `©${randomYear1} ${companyName1}, LLC, distributed by ${companyName2} a division of ${companyName3}, Inc.`
      var c_line = lorem.generateWords(Math.floor(Math.random() * 6) + 5);
      var data = `${id},${title},${member_id},${num_plays},${num_likes},${num_reposts},${release_date},${p_line},${c_line}\n`;
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

// const writeMembers = fs.createWriteStream('members.csv');
// const writeMemberData = (writer, encoding, callback) => {
//   var i = 14000000;
//   var id = 0;
//   // var totalSongs = 10000000;
//   write = () => {
//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     var ok = true;
//     do {
//       if (i % 1000000 === 0) {
//         console.log(`${i} records remaining... ${((id / 14000000) * 100).toFixed(2)}%\n${time}\n`)
//       } else if (id === 14000000) {
//         console.log(`0 records remaining... 100%\n${time}\n`)
//       }
//       i--;
//       id++;
//       var member_name = faker.name.findName();
//       var num_followers = Math.floor(Math.random() * 1000000) + 1;

//       var num_songs = Math.floor(Math.random() * 200) + 1;

//       // if (totalSongs < 0) {
//       //   var num_songs = 0;
//       // } else {
//       //   var songsAdded = Math.floor(Math.random() * 200) + 1;
//       //   var num_songs = songsAdded;
//       //   totalSongs -= songsAdded;
//       // }

//       var data = `${id},${member_name},${num_followers},${num_songs}\n`;
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

// const writeComments = fs.createWriteStream('comments.csv');
// const writeCommentsData = (writer, encoding, callback) => {
//   var i = 100000000;
//   var id = 0;
//   write = () => {
//     var today = new Date();
//     var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//     var ok = true;
//     do {
//       if (i % 1000000 === 0) {
//         console.log(`${i} records remaining... ${((id / 100000000) * 100).toFixed(2)}%\n${time}\n`)
//       } else if (i === 0) {
//         console.log(`0 records remaining... 100%\n${time}\n`)
//       }
//       i--;
//       id++;
//       var content = lorem.generateSentences(Math.floor(Math.random() * 3) + 1); 
//       var member_id = Math.floor(Math.random() * 14000000) + 1;
//       var song_id = Math.floor(Math.random() * 1000000) + 1;
//       var commented_at = getRandomDate();
//       var data = `${id},${content},${member_id},${song_id},${commented_at}\n`;
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

writeSongs.write('id,title,member_id,num_plays,num_likes,num_reposts,release_date,p_line,c_line\n', 'utf-8');
writeSongData(writeSongs, 'utf-8', () => {
  writeSongs.end();
});

// writeMembers.write('id,member_name,num_followers,num_songs\n', 'utf-8');
// writeMemberData(writeMembers, 'utf-8', () => {
//   writeMembers.end();
// });

// writeComments.write('id,content,member_id,song_id,commented_at\n', 'utf-8');
// writeCommentsData(writeComments, 'utf-8', () => {
//   writeComments.end();
// });