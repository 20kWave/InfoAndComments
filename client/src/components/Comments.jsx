import React from 'react';
import './styles.css';
import Comment from './Comment.jsx';
const path = require('path');
const data = require('./dummyData.js');



function Comments (props){

        return (
            <div className='comments-component'>
                <div className='flex-row'>
                    <div>
                        <svg width="21" height="21" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><title>stats_comment</title><path d="M5 3c-1.105 0-2 .887-2 2.006v2.988C3 9.102 3.887 10 5 10h6c1.105 0 2-.887 2-2.006V5.006A1.998 1.998 0 0 0 11 3H5zm0 7v3l3-3H5z" fill="#999" fillRule="evenodd"/></svg>
                    </div>
                    <div className='comments-stats'>
                        {props.comments.length} comments
                    </div>
                </div>
                <div className='flex-comment-container-body'>
                    <div >
                        {props.comments.map((comment) => {
                            return (
                                <Comment comment={comment} key={comment.id}/>
                            )
                        })}
                    </div>
                </div>  
            </div>
        )
}

export default Comments;