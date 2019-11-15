import React from 'react';

const Comment = (props) => {
  return (
    <div>
      <div className='comment-container-asi'>
      <div>
        <img className='comment-pic' src='http://localhost:6020/headshot.jpg'></img>
      </div>
      <div className='flex-comment-container-top-bar-name'>
        {props.comment.author}
      </div>

      <div className='at'>
        at
      </div>
      
      <div className='flex-comment-container-top-bar-time'>
        {props.comment.commented_at}
      </div>

      <div className='flex-comment-container-top-bar-posted'>
        {props.comment.time_ago}
      </div>
    </div>

      <div className='comment-text-asi'>
        {props.comment.content}
      </div>
    </div>
  )
}

export default Comment;