import React from 'react';
import { Link } from 'react-router-dom';
import "../Footer/Footer.css";
const Footer =() =>{
    return(
        <div className='footer'>
      <p id='p-p-one'>Copyright <i class="fa fa-copyright" aria-hidden="true"></i> 2021, Xpertiks.com</p>
      <p id='p-p-two' >All Rights Rserved</p>
      <p  >Developed & Maintained by<Link id='p-p-three' ><i class="fa fa-users" aria-hidden="true"></i>Xpertiks Technologies</Link></p>
        </div>
    )
};
export default Footer;