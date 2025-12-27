import React from 'react';
import AboutPageGetInTouchInnerFormSectionMainForm from '../About Page Get In Touch Form Section/Aboutpagegetintouchinnerformsectionmainform';

function Aboutpagegetintouchinnerformmainformsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** Get In Touch Inner Form Main Form Section */}
            <div className={AboutSectionStyle.aboutPageGetInTouchInnerFormDiv}>

                {/** Form */}
                <AboutPageGetInTouchInnerFormSectionMainForm
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpagegetintouchinnerformmainformsection;