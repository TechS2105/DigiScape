import React from 'react';
import AboutImageSection from '../About Page About Content Section/Aboutpageaboutimagesection';
import AboutContentSection from '../About Page About Content Section/Aboutpageaboutcontentsection';

function Aboutpageaboutsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About page about section */}
            <div className={AboutSectionStyle.aboutPageAboutSectionDiv}>

                {/** About Image Section */}
                <AboutImageSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

                {/** About Content Section */}
                <AboutContentSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpageaboutsection;