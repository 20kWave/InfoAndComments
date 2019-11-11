# 20kWave Info and Commments module

***Artist/Track Information and Comments for the 20kWave application***

This module includes information on the song being viewed and displays comments posted by users. Users may also post comments to a song using the comments section of a songs landing page.


## API requests


### GET
`/api/songs/:song_id`<br/>
request to website's API for all song by its unique ID

| :song_id | number |
| -------- | ------ |

<br/>

`/api/songs/:genre`<br/>
request to website's API for all songs by genre

| :genre | string |
| ------ | ------ |
|        | 'hiphop' |
|        | 'rock' |
|        | 'house' |
|        | 'pop' |
|        | 'electronica' |
|        | 'country' |

<br/>

`/api/comments/:song_id`<br/>
request to website's API for all comments by a song's ID

| :song_id | number |
| -------- | ------ |

<br/>

### POST
`/api/post/comments/:song_id`<br/> 
request to website's API to add a new comment

| :song_id | number |
| -------- | ------ |

<br/>

***POST requests require song_id, id, content, and commented_at:***
```sh
  var newComment = {
    song_id: <song id>,
    id: <uuid>,
    content: <text>,
    commented_at: Date(),
  }
```


<br/>
<br/>

***Please install dependencies with `npm install` in project directory***


