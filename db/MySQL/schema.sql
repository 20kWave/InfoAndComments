DROP DATABASE IF EXISTS 20kWave;
CREATE DATABASE 20kWave;
USE 20kWave;

CREATE TABLE Members (
  id INT NOT NULL AUTO_INCREMENT,
  member_name VARCHAR(255) NOT NULL,
  num_followers INT NOT NULL,
  num_songs INT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Songs (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  member_id INT NOT NULL,
  num_plays INT NOT NULL,
  num_likes INT NOT NULL,
  num_reposts INT NOT NULL,
  release_date VARCHAR(255) NOT NULL,
  p_line VARCHAR(255) NOT NULL,
  c_line VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (member_id) REFERENCES Members (id)
);

CREATE TABLE Comments (
  id INT NOT NULL AUTO_INCREMENT,
  content TEXT(300) NOT NULL,
  member_id INT NOT NULL,
  song_id INT NOT NULL,
  commented_at VARCHAR(255) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (member_id) REFERENCES Members (id),
  FOREIGN KEY (song_id) REFERENCES Songs (id) 
);