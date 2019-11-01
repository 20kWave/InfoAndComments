# 20kWave Info and Commments module

***Artist/Track Information and Comments for the 20kWave application***

This module includes information on the song being viewed and displays comments posted by users. Users may also post comments to a song using the comments settion of a songs landing page.


## API requests

### When adding data:

***Existing data and data added data should be in .json format***
```sh


```

### GET
`/api/songs/:id`
request to website's API for a song by its unique ID


### POST
`/api/comments/add/:id`
request to website's API to add a new comment


### PUT
`/api/comments/update/:id`
request to website's API to update a comment by its unique ID


### DELETE
`/api/comments/delete/:id`
request to website's API to delete a comment by its unique ID



***Please install dependencies with `npm install` in project directory***


