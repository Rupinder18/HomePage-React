import React from 'react';
import '../best/Best.css';


const Best = () => {
    return (
        <div className='best-div'>
            <div className='best-faculty one'>
                <i id='icon' class="fa fa-users" aria-hidden="true"></i>
                <h2>Best Faculty Members</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur magni dolorem quisquam quo molestias rem voluptates provident perspiciatis quas?</p>
            </div>
            <div className='best-faculty one'>
                <i id='icon' class="fa fa-code" aria-hidden="true"></i>
                <h2>Best Coding Skills</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur magni dolorem quisquam quo molestias rem voluptates provident perspiciatis quas?</p>
            </div>
            <div  className='best-faculty one'>
            <i id='icon' class="fa fa-address-book" aria-hidden="true"></i>
                <h2>Best Course Material</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur magni dolorem quisquam quo molestias rem voluptates provident perspiciatis quas?</p>
            </div>
        </div>
    )
};
export default Best;