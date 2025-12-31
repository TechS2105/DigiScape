import React from 'react';
import { TbSmartHome } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

function ScrollableNavbarMenus() {

    const navigate = useNavigate();
    
    return (

        <>
        
            <nav>

                <ul>

                    <li onClick={() => (navigate('/'))}><TbSmartHome /></li>
                    <li onClick={() => (navigate('/about'))}>ABOUT</li>
                    <li onClick={() => (navigate('/services'))}>SERVICES</li>
                    <li onClick={() => (navigate('/portfolio'))}>PORTFOLIO</li>
                    <li onClick={() => (navigate('/blog'))}>BLOG</li>
                    <li onClick={() => (navigate('/contact'))}>CONTACT</li>

                </ul>

            </nav>
            
        </>

    );

}

export default ScrollableNavbarMenus;