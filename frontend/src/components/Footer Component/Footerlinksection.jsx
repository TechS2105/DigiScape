import React from 'react';
import { NavLink } from 'react-router-dom';

function Footerlinksection({FooterStyle}) {
    
    return (

        <>
        
            {/** Link Section */}
            <div className={FooterStyle.footerLinks}>
            
                {/** Color Overlay */}
                <div className={FooterStyle.footerColorOverlay}>


                </div>
            
            </div>
            
        </>

    );

}

export default Footerlinksection;

