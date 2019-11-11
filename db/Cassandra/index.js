const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'datacenter1',
  keyspace: 'wave_keyspace'
});

client.connect(function (err) {
  if (err) {
    console.log('Error:', err);
  } else {
    console.log('Successful connection to database!');
  }
});

const getSongById = (id) => {
  var query = `SELECT * FROM wave_keyspace.songs_by_id WHERE id=${id};`;
  return client.execute(query);
}

const getSongsByGenre = (genre) => {
  var query = `SELECT * FROM wave_keyspace.songs_by_genre WHERE genre='${genre}';`;
  return client.execute(query);
}

const getCommentsBySongId = (songId) => {
  var query = `SELECT * FROM wave_keyspace.comments_by_song_id WHERE song_id=${songId};`;
  return client.execute(query);
}

const postComment = (song_id, id, content, commented_at) => {
  var query = `INSERT INTO wave_keyspace.comments_by_song_id (song_id, id, content, commented_at) VALUES (${song_id}, ${id}, '${content}', '${commented_at}')`;
  return client.execute(query)
}

module.exports.getSongById = getSongById;
module.exports.getSongsByGenre = getSongsByGenre;
module.exports.getCommentsBySongId = getCommentsBySongId;
module.exports.postComment = postComment;