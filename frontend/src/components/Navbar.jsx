import React, {useState, useRef} from 'react';
import NavbarStyle from '../../public/styles/navbar files/Navbar.module.css';
import { NavLink } from 'react-router-dom';

function Navbar() {

    const [isActiveMenuIcon, setIsActiveMenuIcon] = useState(null);
    const [isActiveSubMenuBox, setIsActiveSubMenuBox] = useState(null);
    const [isActiveInnerSubmenuBox, setIsInnerSubMenuBox] = useState(null);
    const [isActiveInnerSubMenuText, setIsInnerActiveInnerSubMenuText] = useState(null);
    const [isActiveSpanText, setIsActiveSpanText] = useState(null);
    const [isActiveSocialIcon, setIsActiveSocialIcon] = useState(null);

    function handleNavMenuIcon() {
        
        setIsActiveMenuIcon(prev => !prev);
        setIsActiveSubMenuBox(prev => !prev);
        setIsInnerSubMenuBox(prev => !prev);
        setIsInnerActiveInnerSubMenuText(prev => !prev);
        setIsActiveSpanText(prev => !prev);
        setIsActiveSocialIcon(prev => !prev);

    }

    // Nav menu icons
    const firstMenuIcon = isActiveMenuIcon ? {

        transform: "rotate(50deg)",
        transition: "all 0.8s ease 0.5s"


    } : {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease 1s"

    }

    const secondMenuIcon = isActiveMenuIcon ? {

        transform: "scale(0)",
        opacity: "0",
        transition: "all 0.8s ease 0.5s"

    } : {

        transform: "scale(1)",
        opacity: "1",
        transition: "all 0.8s ease 1s"

    }

    const thirdMenuIcon = isActiveMenuIcon ? {

        transform: "rotate(-50deg) translate(12px, -10px)",
        transition: "all 0.8s ease 0.5s",
        width: "50%"

    } : {

        transition: "all 0.8s ease 1s"

    }

    // Nav submenu 
    const subMenuStyle = isActiveSubMenuBox ? {

        transform: "translateY(0px)",
        filter: "blur(0px)",
        transition: "all 0.8s ease"

    } : {

        transform: "translateY(-1000px)",
        filter: "blur(20px)",
        transition: "all 0.8s ease 1.5s"

    }

    // Inner nav menu section
    const innerSubMenuStyle = isActiveInnerSubmenuBox ? {

        transform: "translateX(0px)",
        filter: "blur(0px)",
        transition: "all 0.8s ease 0.5s"

    } : {

        transform: "translateX(1000px)",
        filter: "blur(20px)",
        transition: "all 0.8s ease 1s"

    }

    // Inner first sub menu
    const m1 = isActiveInnerSubMenuText ? {

        transform: "translateX(0px)",
        transition: "all 0.8s ease 0.6s"

    } : {

        transform: "translateX(-1000px)",
        transition: "all 0.8s ease 0.9s"

    }
    
    // Inner second sub menu
    const m2 = isActiveInnerSubMenuText ? {

        transform: "translateX(0px)",
        transition: "all 0.8s ease 0.7s"

    } : {

        transform: "translateX(-1000px)",
        transition: "all 0.8s ease 0.8s"

    }

    // Inner third sub menu
    const m3 = isActiveInnerSubMenuText ? {

        transform: "translateX(0px)",
        transition: "all 0.8s ease 0.8s"

    } : {

        transform: "translateX(-1000px)",
        transition: "all 0.8s ease 0.7s"

    }

    // Inner fourth sub menu
    const m4 = isActiveInnerSubMenuText ? {
        
        transform: "translateX(0px)",
        transition: "all 0.8s ease 0.9s"

    } : {

        transform: "translateX(-1000px)",
        transition: "all 0.8s ease 0.6s"

    }

    // Inner fifth sub menu
    const m5 = isActiveInnerSubMenuText ? {

        transform: "translateX(0px)",
        transition: "all 0.8s ease 1s"

    } : {

        transform: "translateX(-1000px)",
        transition: "all 0.8s ease 0.5s"

    }

    // Inner sixth sub menu
    const m6 = isActiveInnerSubMenuText ? {

        transform: "translateX(0px)",
        transition: "all 0.8s ease 1.1s"

    } : {

        transform: "translateX(-1000px)",
        transition: "all 0.8s ease 0.4s"

    }

    // Inner sub menu contact 
    const mobileNo = isActiveSpanText ? {

        opacity: "1",
        filter: "blur(0px)",
        transform: "translateX(0px)",
        transition: "all 0.8s ease 1.2s"

    } : {

        opacity: "0",
        filter: "blur(20px)",
        transform: "translateX(1000px)",
        transition: "all 0.8s ease 0.3s"

    }

    // Inner sub menu email
    const emailStyle = isActiveSpanText ? {

        opacity: "1",
        filter: "blur(0px)",
        transform: "translateX(0px)",
        transition: "all 0.8s ease 1.3s"

    } : {

        opacity: "0",
        filter: "blur(20px)",
        transform: "translateX(1000px)",
        transition: "all 0.8s ease 0.2s"

    }

    const slideInnerSubMenu = useRef(null);
    const slideMainMenu = useRef(null);

    // Handle inner menu slide
    const handleClick = (ref) => {

        setIsActiveMenuIcon(prev => !prev);
        setIsActiveSubMenuBox(prev => !prev);
        setIsInnerSubMenuBox(prev => !prev);
        setIsInnerActiveInnerSubMenuText(prev => !prev);
        setIsActiveSpanText(prev => !prev);
        setIsActiveSocialIcon(prev => !prev);

        if (ref.current) {
            
            ref.current.style.transform = "translateX(1000px)"

        }

    }

    // Handle main menu slide
    const handleMainMenuClick = (ref) => {

        if (ref.current) {
            
            ref.current.style.transform = "translateY(-1000px)"

        }

    }

    // Inner submenu box social icons style
    const fb = isActiveSocialIcon ? {

        transform: "scale(1)",
        transition: "transform 0.8s ease 1.4s"

    } : {

        transform: "scale(0)",
        transition: "transform 0.8s ease 0.19s"

    }

    const insta = isActiveSocialIcon ? {

        transform: "scale(1)",
        transition: "transform 0.8s ease 1.5s"

    } : {

        transform: "scale(0)",
        transition: "transform 0.8s ease 0.18s"

    }

    const linkedin = isActiveSocialIcon ? {

        transform: "scale(1)",
        transition: "transform 0.8s ease 1.6s"

    } : {

        transform: 'scale(0)',
        transition: "transform 0.8s ease 0.17s"

    }

    const tweet = isActiveSocialIcon ? {

        transform: "scale(1)",
        transition: "transform 0.8s ease 1.7s"

    } : {

        transform: "scale(0)",
        transition: "transform 0.8s ease 0.16s"

    }

    return (

        <header>

            {/** Logo Div */}
            <div className={NavbarStyle.logoDiv}>

                <h1> Digi<span style={{color: "royalblue"}}>S</span>cape </h1>

            </div>

            {/** Menu Div */}
            <div className={NavbarStyle.menuIcon}>

                <div className={NavbarStyle.icon} onClick={handleNavMenuIcon}>

                    <span style={firstMenuIcon}></span>
                    <span style={secondMenuIcon}></span>
                    <span style={thirdMenuIcon}></span>

                </div>

            </div>

            {/** Submenu Div  */}
            <div className={NavbarStyle.submenuDiv} style={subMenuStyle} ref={slideMainMenu}>

                <div className={NavbarStyle.innerSubMenuDiv} style={innerSubMenuStyle} ref={slideInnerSubMenu}>

                    <nav>

                        <ul>

                            <li style={m1} onClick={() => handleMainMenuClick(slideMainMenu)}><NavLink to="/" onClick={() => handleClick(slideInnerSubMenu)}>HOME</NavLink></li>
                            <li style={m2} onClick={() => handleMainMenuClick(slideMainMenu)}><NavLink to="/about" onClick={() => handleClick(slideInnerSubMenu)}>ABOUT</NavLink></li>
                            <li style={m3} onClick={() => handleMainMenuClick(slideMainMenu)}><NavLink to="/services" onClick={() => handleClick(slideInnerSubMenu)}>SERVICES</NavLink></li>
                            <li style={m4} onClick={() => handleMainMenuClick(slideMainMenu)}><NavLink to="/portfolio" onClick={() => handleClick(slideInnerSubMenu)}>PORTFOLIO</NavLink></li>
                            <li style={m5} onClick={() => handleMainMenuClick(slideMainMenu)}><NavLink to="/blog" onClick={() => handleClick(slideInnerSubMenu)}>BLOG</NavLink></li>
                            <li style={m6} onClick={() => handleMainMenuClick(slideMainMenu)}><NavLink to="/contact" onClick={() => handleClick(slideInnerSubMenu)}>CONTACT</NavLink></li>

                        </ul>

                    </nav>

                    {/** Submenu contact details section */}

                    <div className={NavbarStyle.contactSection}>

                        <div className={NavbarStyle.contact}>

                            <span style={mobileNo}> +91 88342 84323 </span> <br />
                            <span style={emailStyle}> digiscape2025@gmail.com </span>

                        </div>

                        <div className={NavbarStyle.socialIcon}>

                            <ul>

                                <li><a href="#" style={fb}> Facebook </a></li>
                                <li><a href="#" style={insta}> Instagram</a></li>
                                <li><a href="#" style={linkedin}> LinkedIn</a></li>
                                <li><a href="#" style={tweet}> Twitter</a></li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Navbar;