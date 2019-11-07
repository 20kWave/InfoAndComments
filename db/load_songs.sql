USE 20kWave;

LOAD DATA LOCAL INFILE "/Users/marcusdlp/hackreactor/SDC/dump/songs.csv" INTO TABLE Songs
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id,title,member_id,num_plays,num_likes,num_reposts,release_date,p_line,c_line)