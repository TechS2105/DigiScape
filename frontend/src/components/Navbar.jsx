import React, {useState} from 'react';
import NavbarStyle from '../../public/styles/navbar files/Navbar.module.css';

function Navbar() {

    const [isActiveMenuIcon, setIsActiveMenuIcon] = useState(null);
    const [isActiveSubMenuBox, setIsActiveSubMenuBox] = useState(null);

    function handleNavMenuIcon() {
        
        setIsActiveMenuIcon(prev => !prev);
        setIsActiveSubMenuBox(prev => !prev);

    }

    // Nav menu icons
    const firstMenuIcon = isActiveMenuIcon ? {

        transform: "rotate(50deg)",
        transition: "all 0.8s ease"


    } : {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    }

    const secondMenuIcon = isActiveMenuIcon ? {

        transform: "scale(0)",
        opacity: "0",
        transition: "all 0.8s ease"

    } : {

        transform: "scale(1)",
        opacity: "1",
        transition: "all 0.8s ease"

    }

    const thirdMenuIcon = isActiveMenuIcon ? {

        transform: "rotate(-50deg) translate(12px, -10px)",
        transition: "all 0.8s ease",
        width: "50%"

    } : {

        transition: "all 0.8s ease"

    }

    // Nav submenu 
    const subMenuStyle = isActiveSubMenuBox ? {

        transform: "translateY(0px)",
        filter: "blur(0px)",
        transition: "all 0.8s ease"

    } : {

        transform: "translateY(-1000px)",
        filter: "blur(20px)",
        transition: "all 0.8s ease"

    }
    
    return (

        <header>

            {/** Logo Div */}
            <div className={NavbarStyle.logoDiv}>

                <h1> DigiScape </h1>

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
            <div className={NavbarStyle.submenuDiv} style={subMenuStyle}>

                <div className={NavbarStyle.innerSubMenuDiv}>

                    <nav>

                        <ul>

                            <li><a href="#">HOME</a></li>
                            <li><a href="#">ABOUT</a></li>
                            <li><a href="#">SERVICES</a></li>
                            <li><a href="#">PORTFOLIO</a></li>
                            <li><a href="#">BLOG</a></li>
                            <li><a href="#">CONTACT</a></li>

                        </ul>

                    </nav>

                    {/** Submenu contact details section */}

                    <div className={NavbarStyle.contactSection}>

                        <div className={NavbarStyle.contact}>

                            <span> +91 88342 84323 </span> <br />
                            <span> digiscape2025@gmail.com </span>

                        </div>

                        <div className={NavbarStyle.socialIcon}>

                            <ul>

                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><a href="#">LinkedIn</a></li>
                                <li><a href="#">Twitter</a></li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Navbar;