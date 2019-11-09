USE 20kWave;

LOAD DATA LOCAL INFILE "/Users/marcusdlp/hackreactor/SDC/dump/members.csv" INTO TABLE Members
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 LINES
(id,member_name,num_followers,num_songs)