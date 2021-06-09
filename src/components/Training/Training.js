import React from 'react';
import '../Training/Training.css';
import Angular from '../../assests/angular.jpg';
import Spring from '../../assests/spring.jpg';
import Java from '../../assests/java.jpg';
const Training = () => {
    return (
        <div>
            <div className='training-head'>
                <h1>We Provide Best Training for UI Technologies<br/> and MERN Stack </h1>
                
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure? </p>
            </div>
            <div className='training-middle-div'>
                <h3>Please Find The Courses We Offers As Below</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iure?</p>
                <div className='courses'>
                    <div className='java-pro'>
                        <img src={Java}/>
                    </div>
                    <div className='java-pro'>
                        <img src={Spring}/>
                    </div>  <div className='java-pro'>
                        <img src={Angular}/>
                    </div>
                </div>
                
            </div>
            <div className='learn-about-one'>
                <div >
                    <p id='para-one'>
                        Learn More About India's No. 1 Institute
                    </p>
                    <p >this is what you can learn from this institute</p>
                </div>
                <div >
                    <button className='btn'>Learn More</button>
                </div>
            </div>
        </div>
    )
};

export default Training;