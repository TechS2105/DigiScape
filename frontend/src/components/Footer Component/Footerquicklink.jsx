import React from 'react';
import { NavLink } from 'react-router-dom';

function Footerquicklink({FooterStyle, quickLinkTitle, linkName1, linkName2, linkName3, linkName4}) {
    
    return (

        <>
        
           {/** Footer Quick Link */} 
            <div className={FooterStyle.footerQuickLink}>

                {/** Quick Link Title */}                
                <div className={FooterStyle.footerQuickLinkTitle}>

                    <h4> {quickLinkTitle} </h4>

                </div>

                {/** Quick Link Div */}
                <div className={FooterStyle.quickLinks}>

                    <ul>

                        <li><NavLink to="/">{linkName1}</NavLink></li>
                        <li><NavLink to="/about">{linkName2}</NavLink></li>
                        <li><NavLink to="/blog">{linkName3}</NavLink></li>
                        <li><NavLink to="/contact">{linkName4}</NavLink></li>

                    </ul>

                </div>

           </div>

        </>

    );

}

export default Footerquicklink;