import React from 'react';
import '../Navbar/Navbar.css';
import {NavLink,Link} from 'react-router-dom';
import Logo from '../../assests/a.ico';
const Navbar =()=>{
    return(
        <div className='navbar-main-div'>
            <div className='navbar-logo-div'>
                <img src={Logo}/>
                <h1>Xpertiks</h1>
            </div>
            <div className='navbar-link-div'>
                <NavLink className='nav-link' activeStyle={{background:"grey",opacity:"1",padding:"10px",color:"white"}} to='/'><i class="fa fa-home" aria-hidden="true"></i>Home</NavLink>
                <NavLink className='nav-link' to='/'><i class="fa fa-address-book" aria-hidden="true"></i>About Us</NavLink>
                <NavLink className='nav-link' to='/'><i class="fa fa-book" aria-hidden="true"></i>Courses</NavLink>
                <NavLink className='nav-link' to='/'><i class="fa fa-envelope" aria-hidden="true"></i>Contact Us</NavLink>



            </div>


        </div>
    )
};

export default Navbar;