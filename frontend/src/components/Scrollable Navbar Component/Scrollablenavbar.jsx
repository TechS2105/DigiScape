import React, {useEffect, useState} from 'react';
import ScrollableNavbarStyle from '../../../public/styles/scrollable navbar files/Scrollablenavbar.module.css';
import ScrollableNavbarMenus from '../Scrollable Navbar Component/Scrollablenavbarmenus';

function Scrollablenavbar() {

    const [scrollableNavbar, setScrollableNavbar] = useState({

        transform: "translateY(500px)",
        filter: "blur(50px)",

    });

    const [scrollableNavbarStyle, setScrollableNavbarStyle] = useState({

        transform: "scale(0)",

    });

    function handleScrollNavbar() {
        
        {/** For Desktop Mode  */}
        if (window.innerWidth > 1080 ) {
            
            if (window.scrollY > 700) {
                
                setScrollableNavbar({

                    transform: "translateY(0px)",
                    transition: "all 1s ease",
                    filter: "blur(0px)"

                });

                setScrollableNavbarStyle({

                    transform: "scale(1)",
                    transition: "all 1s ease"

                })

            } else {
                
                setScrollableNavbar({

                    transform: "translateY(500px)",
                    transition: "all 1s ease",
                    filter: "blur(50px)"

                });

                setScrollableNavbarStyle({

                    transform: "scale(0)",
                    transition: "all 1s ease"

                });

            }

        }

        {/** For Tablet Mode */}
        if (window.innerWidth > 700) {
            
            if (window.scrollY > 700) {
                
                setScrollableNavbar({

                    transform: "translateY(0px)",
                    transition: "all 1s ease",
                    filter: "blur(0px)"

                });

                setScrollableNavbarStyle({

                    transform: "scale(1)",
                    transition: "all 1s ease"

                })

            } else {
                
                setScrollableNavbar({

                    transform: "translateY(500px)",
                    transition: "all 1s ease",
                    filter: "blur(50px)"

                });

                setScrollableNavbarStyle({

                    transform: "scale(0)",
                    transition: "all 1s ease"

                });

            }

        }

    }

    useEffect(() => {

        window.addEventListener('scroll', handleScrollNavbar);

    }, []);
    
    return (

        <>
        
            {/** Scrollable Navbar Div */}
            <div className={ScrollableNavbarStyle.scrollableNavDiv} onScroll={handleScrollNavbar} style={scrollableNavbarStyle}>
            
                {/** Scrollable Navbar Inner Menu */}
                <div className={ScrollableNavbarStyle.innerNavDiv} style={scrollableNavbar}>

                    <ScrollableNavbarMenus />

                </div>
                
            </div> 
            
        </>

    );

}

export default Scrollablenavbar