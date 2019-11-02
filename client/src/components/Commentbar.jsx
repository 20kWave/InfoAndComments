import React from 'react';
import './styles.css';
const path = require('path');

class Commentbar extends React.Component{

    render() {
        return (
        <div className='flex-container-commentbar-interaction'>
            <div className="flex-container-commentbar">
              <div><img className='headshot' src='http://localhost:3030/headshot.jpg'></img></div>
                <div>
                    <form>
                        <input className="form" type="text" name="inputBox" placeholder="Write a comment" size='60'/>
                    </form>
                </div>
            </div>
           
           <div className='flex-container-interaction-bar'>
            <div className='flex-container-interaction'>
                <button className='likes'></button>
                <button className='reposts'></button>
                <button className='share'></button>
                <button className='next'></button>
                <button className='more'></button>
            </div>

            <div className='flex-container-stats'>
                    <div className='interaction-tiny-flex'>
                        <div className='plays-icon'></div>
                        <div className='plays'>267k</div>
                    </div>
                    <div className='likes-icon'></div>
                    <div className='likes-stats'>7,355</div>
                    <div className='reposts-icon'></div>
                    <div className='reposts-stats'>507</div>
            </div>
           </div>

        </div>
        )
    }
}

export default Commentbar;