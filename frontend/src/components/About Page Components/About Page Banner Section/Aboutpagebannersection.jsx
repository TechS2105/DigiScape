import React from 'react';

function Aboutpagebannersection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page Banner Section */}
            <div className={AboutSectionStyle.aboutSectionBanner}>

                {/** Banner Overlay Section */}
                <div className={AboutSectionStyle.aboutOverlaySection}></div>

            </div>
            
        </>

    );

}

export default Aboutpagebannersection;