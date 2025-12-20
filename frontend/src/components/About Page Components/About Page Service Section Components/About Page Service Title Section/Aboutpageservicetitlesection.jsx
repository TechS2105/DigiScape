import React from 'react';
import AboutPageServiceTitle from '../About Page Service Title Section/Aboutpageservicetitle';

function Aboutpageservicetitlesection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page Service Title Section */}
            <div className={AboutSectionStyle.aboutPageServiceTitleSection}>

                {/** Title Inner Section */}
                <AboutPageServiceTitle
                
                    AboutSectionStyle={AboutSectionStyle}
                    serviceSpanTitle="Our Expertise"
                    serviceMainTitle="End to End Digital Services for Growing Brands"
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpageservicetitlesection;