import React from 'react';
import ScrollableNavbarStyle from '../../../public/styles/scrollable navbar files/Scrollablenavbar.module.css';
import ScrollableNavbarMenus from '../Scrollable Navbar Component/Scrollablenavbarmenus';

function Scrollablenavbar() {
    
    return (

        <>
        
            {/** Scrollable Navbar Div */}
            <div className={ScrollableNavbarStyle.scrollableNavDiv}>
            
                {/** Scrollable Navbar Inner Menu */}
                <div className={ScrollableNavbarStyle.innerNavDiv}>

                    <ScrollableNavbarMenus />

                </div>
                
            </div> 
            
        </>

    );

}

export default Scrollablenavbar