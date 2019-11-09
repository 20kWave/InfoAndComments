USE 20kWave;

LOAD DATA LOCAL INFILE "/Users/marcusdlp/hackreactor/SDC/dump/comments.csv" INTO TABLE Comments
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id,content,member_id,song_id,commented_at)