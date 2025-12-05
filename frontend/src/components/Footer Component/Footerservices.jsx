import React from 'react';

function Footerservices({FooterStyle, servicesTitle, linkName1, linkName2, linkName3}) {
    
    return (

        <>
        
            {/** Footer Services */}
            <div className={FooterStyle.footerServices}>

                {/** Footer Services Title */}
                <div className={FooterStyle.footerServicesTitle}>

                    <h4> {servicesTitle} </h4>

                </div>

                {/** Footer Services Links */}
                <div className={FooterStyle.footerServicesLink}>

                    <ul>

                        <li><a href="#">{ linkName1 }</a></li>
                        <li><a href="#">{ linkName2 }</a></li>
                        <li><a href="#">{ linkName3 }</a></li>

                    </ul>

                </div>

            </div>
            
        </>

    );

}

export default Footerservices;