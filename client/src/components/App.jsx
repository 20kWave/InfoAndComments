import React from 'react';
import Axios from 'axios';
import Commentbar from './Commentbar.jsx';
import ArtistInfo from './ArtistInfo.jsx';
import TrackInfo from './TrackInfo.jsx';
import Comments from './Comments';
import './styles.css';
const data = require('./dummyData.js');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      trackInfo: {},
      recentlyPostedComment: {}
    }
    this.getSongById = this.getSongById.bind(this);
    this.getSongsByGenre = this.getSongsByGenre.bind(this);
    this.getCommentsBySongId = this.getCommentsBySongId.bind(this);
  };

  getSongById() {
    var id = window.location.pathname.split('/')[1];
    Axios.get(`/songs/${id}`).then((res) => {
      res.status(200);
    })
  }

  getSongsByGenre() {
    var genre = window.location.pathname.split('/')[2];
    Axios.get(`/api/songs/${genre}`).then((res) => {
      res.status(200);
    })
  }

  getCommentsBySongId() {
    var song_id = window.location.pathname.split('/')[2];
    Axios.get(`/api/comments/${song_id}`).then((res) => {
      res.status(200);
    })
  }

  componentDidMount() {
    this.setState({
      comments: data
    })
  }

  render() {
    return(
      <div className='comments-component'>
        <Commentbar/>
        <div className='flex-lower'>
          <ArtistInfo/>
          <div className='flex-lower-right'>
            <TrackInfo/>
            <Comments comments={this.state.comments}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;