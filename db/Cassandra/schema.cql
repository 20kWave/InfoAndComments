CREATE KEYSPACE 20kWave;

CREATE TABLE songs_by_id (
   id int PRIMARY KEY,  
   title text,
   genre text,
   artist_name text,  
   num_comments int,
   num_plays int,
   num_likes int,
   num_reposts int,
   release_date text,
   p_line text,
   c_line text
);

CREATE TABLE songs_by_genre (
   genre text,
   id int,
   title text,
   artist_name text,  
   num_comments int,
   num_plays int,
   num_likes int,
   num_reposts int,
   release_date text,
   p_line text,
   c_line text,
   PRIMARY KEY (genre, id)
);

CREATE TABLE comments_by_song_id (
   song_id int,
   id int,
   content text,
   commented_at text,
   PRIMARY KEY (song_id, id)
);

-- COPY songs_by_id (id, title, genre, artist_name, num_comments, num_plays, num_likes, num_reposts, release_date, p_line, c_line) FROM '/Users/marcusdlp/hackreactor/SDC/dump_cassandra/songs_by_id.csv' WITH DELIMITER=',' AND HEADER=TRUE;
-- COPY songs_by_genre (genre, id, title, artist_name, num_comments, num_plays, num_likes, num_reposts, release_date, p_line, c_line) FROM '/Users/marcusdlp/hackreactor/SDC/dump_cassandra/songs_by_genre.csv' WITH DELIMITER=',' AND HEADER=TRUE;
-- COPY comments_by_song_id (song_id, id, content, commented_at) FROM '/Users/marcusdlp/hackreactor/SDC/dump_cassandra/comments.csv' WITH DELIMITER=',' AND HEADER=TRUE;