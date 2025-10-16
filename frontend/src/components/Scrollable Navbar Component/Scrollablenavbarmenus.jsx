import React from 'react';
import { TbSmartHome } from "react-icons/tb";
import { NavLink } from 'react-router-dom';

function ScrollableNavbarMenus() {
    
    return (

        <>
        
            <nav>

                <ul>

                    <li><NavLink to="/"><TbSmartHome /></NavLink></li>
                    <li><NavLink to="/about">ABOUT</NavLink></li>
                    <li><NavLink to="/services">SERVICES</NavLink></li>
                    <li><NavLink to="/portfolio">PORTFOLIO</NavLink></li>
                    <li><NavLink to="/blog">BLOG</NavLink></li>
                    <li><NavLink to="/contact">CONTACT</NavLink></li>

                </ul>

            </nav>
            
        </>

    );

}

export default ScrollableNavbarMenus;