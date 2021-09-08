import React from "react";
import '../navbar/navbar.scss'
import Logo from '../../img/logo.png'

function Navbar ()  {
    return (
        
        <div className="menu">
                <img  src={Logo} alt="" />
            <ul>
                <li>Trang Chủ</li>
                <li>Liên Hệ</li>
                <li>Giới Thiệu</li>
                <li>Phản Hồi</li>

            </ul>
             
        </div>
        
        
    );

}



export default Navbar;