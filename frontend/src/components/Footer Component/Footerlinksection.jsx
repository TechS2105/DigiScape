import React from 'react';
import FooterQuickLink from '../Footer Component/Footerquicklink';
import FooterServices from '../Footer Component/Footerservices';
import FooterOthers from '../Footer Component/Footerothers';
import FooterGetInTouch from '../Footer Component/Footergetintouch';

function Footerlinksection({FooterStyle}) {
    
    return (

        <>
        
            {/** Link Section */}
            <div className={FooterStyle.footerLinks}>
            
                {/** Color Overlay */}
                <div className={FooterStyle.footerColorOverlay}>

                    {/** Quick Links */}
                    <FooterQuickLink
                    
                        FooterStyle={FooterStyle}
                        quickLinkTitle="Quick Links"
                        linkName1="Home"
                        linkName2="About"
                        linkName3="Blog"
                        linkName4="Contact"
                        
                    />

                    {/** Our Services */}
                    <FooterServices
                    
                        FooterStyle={FooterStyle}
                        servicesTitle="Our Services"
                        linkName1="Digital Marketing Services"
                        linkName2="Specialised Digital Growth Services"
                        linkName3="Web Development & Technology Services"
                        
                    />

                    {/** Others */}
                    <FooterOthers
                    
                        FooterStyle={FooterStyle}
                        othersTitle="Others"
                        linkName1="Privacy Policy"
                        linkName2="Terms & Conditions"
                        
                    />

                    {/** Get In Touch  */}
                    <FooterGetInTouch
                    
                        FooterStyle={FooterStyle}
                        
                    />

                </div>
            
            </div>
            
        </>

    );

}

export default Footerlinksection;

