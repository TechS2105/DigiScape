import React from 'react';
import AboutPageGetInTouchInnerFormTitleSection from '../About Page Get In Touch Form Section/Aboutpagegetintouchinnerformtitlesection';
import AboutPageGetInTouchInnerFormMainFormSection from '../About Page Get In Touch Form Section/Aboutpagegetintouchinnerformmainformsection';

function Aboutpagegetintouchinnerformsection({AboutSectionStyle, innerFormSection}) {
    
    return (

        <>
        
            {/** Inner Form Section */}
            <div className={AboutSectionStyle.aboutPageGetInTouchForm} style={innerFormSection}>

                {/** Get In Touch Main Form Section Title Div */}
                <AboutPageGetInTouchInnerFormTitleSection
                
                    AboutSectionStyle={AboutSectionStyle}
                
                />

                {/** Get In Touch Main Form Section Inner Form Div */}
                <AboutPageGetInTouchInnerFormMainFormSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    
                />

            </div>
        
        </>

    );

}

export default Aboutpagegetintouchinnerformsection;