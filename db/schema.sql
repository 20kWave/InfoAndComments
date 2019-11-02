DROP DATABASE IF EXISTS 20kWave;
CREATE DATABASE 20kWave;
USE 20kWave;

CREATE TABLE Songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR (255),
  artist_id INT NOT NULL,
  num_plays INT NOT NULL,
  num_likes INT NOT NULL,
  num_reposts INT NOT NULL,
  release_date DATE NOT NULL,
  p_line  VARCHAR(255),
  c_line VARCHAR(255),
  PRIMARY KEY (id),
  FOREIGN KEY (artist_id) REFERENCES Artists (id),
)

CREATE TABLE Artists (
  id INT NOT NULL AUTO_INCREMENT,
  artist_name VARCHAR(255)
  num_followers INT NOT NULL,
  num_songs INT NOT NULL,
  PRIMARY KEY (id)
)

CREATE TABLE Comments (
  id INT NOT NULL AUTO_INCREMENT
  author VARCHAR(255),
  content TEXT(300),
  author_id INT NOT NULL,
  song_id INT NOT NULL,
  commented_at TIME NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (song_id) REFERENCES Songs (id) 
)


















































