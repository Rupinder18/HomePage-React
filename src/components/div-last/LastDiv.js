import React from 'react';
import '../div-last/LastDiv.css';
import Angular from '../../assests/angular.jpg';
import Bootstrap from '../../assests/bootstrap.jpg';
import Java from '../../assests/java.jpg';
const LastDiv = () =>{
    return(
        <div className='later-div'>
          <div className='later-division'>
          <div className='hder'>
                <h1>The Complete Java Course</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id quisquam aspernatur, saepe nemo esse dolores dolorem enim totam atque, modi labore officiis commodi sint repellat consequuntur accusamus quaerat. Tempora ad hic perferendis, quis doloribus animi non, soluta sint odit corporis facilis est unde atque aperiam, necessitatibus sequi tempore et!</p>
            </div>
            <div className='last-img'>
                <img src={Java}/>
            </div>
          </div>
          <div className='later-division two'>
         
            <div className='last-img'>
                <img src={Angular}/>
            </div>
            <div className='hder'>
                <h1>The Angular Course</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id quisquam aspernatur, saepe nemo esse dolores dolorem enim totam atque, modi labore officiis commodi sint repellat consequuntur accusamus quaerat. Tempora ad hic perferendis, quis doloribus animi non, soluta sint odit corporis facilis est unde atque aperiam, necessitatibus sequi tempore et!</p>
            </div>
          </div>
          <div className='later-division'>
          <div className='hder'>
                <h1>The Complete Java Course</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed id quisquam aspernatur, saepe nemo esse dolores dolorem enim totam atque, modi labore officiis commodi sint repellat consequuntur accusamus quaerat. Tempora ad hic perferendis, quis doloribus animi non, soluta sint odit corporis facilis est unde atque aperiam, necessitatibus sequi tempore et!</p>
            </div>
            <div className='last-img'>
                <img src={Bootstrap}/>
            </div>

        </div>
        </div>
    )
};
export default LastDiv;