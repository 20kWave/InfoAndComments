# 20kWave Info and Commments module

***Artist/Track Information and Comments for the 20kWave application***

This module includes information on the song being viewed and displays comments posted by users. Users may also post comments to a song using the comments section of a songs landing page.


## API requests


### GET
`/api/songs/:song_id`<br/>
request to website's API for a song by its unique ID

| :song_id | number |
| -------- | ------ |


### POST
`/api/songs/:song_id/`<br/> 
request to website's API to add a new comment

| :song_id | number |
| -------- | ------ |


***POST requests require author, content, and song_id:***
```sh
  var date = Date();

  var comment = {
    author: <string>,
    content: <text>,
    song_id: <number>,
    commented_at: Date(),
    time_ago: moment([date]).fromNow();
  }
```


### PATCH
`/api/songs/:song_id/:comment_id`<br/> 
request to website's API to update a comment by its unique ID

| :song_id | number |
| -------- | ------ |

| :comment_id | number |
| ---------- | ------ |

***Specify content text to update:***
```sh
  {
    content: <text>
  }
```


### DELETE
`/api/songs/:song_id/:comment_id`<br/>
request to website's API to delete a comment by its unique ID

| :song_id | number |
| -------- | ------ |

| :comment_id | number |
| ---------- | ------ |

<br/>
<br/>

***Please install dependencies with `npm install` in project directory***


