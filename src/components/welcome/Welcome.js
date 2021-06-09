import React from 'react';
import '../welcome/Welcome.css';
import Himg from '../../assests/group.jpg';
const Welcome = () => {
    return (
        <div style={{ background: ` white url(${Himg}) no-repeat  `,height:"100vh",width:"100%", backgroundAttachment: "scroll", backgroundPosition: "center", }} >
            <div className="welcome-div"  >
                <h1>Welcome to <span>Xpertiks Technologies</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor asperiores animi pariatur mollitia, modi accusantium consequatur quod aliquid, consectetur adipisicing elit. Dolor asperiores animi pariatur mollitia, modi accusantium consequatur quod aliquid, officiis esse quam. Aliquam voluptates officiis esse quam. Aliquam voluptates dolorem dicta iste dolores ipsam sequi delectus?</p>
                 <button>Learn More</button>         
            </div>
        </div>
    )
};
export default Welcome;