import React from 'react';
import ContactForm from '../Contact Form Component/Form';
import ContactFromImage from '../Contact Form Component/Contactformimage';
import InnerContactFormTitles from '../Contact Form Component/Innercontactformtitles';

const image = "/images/Home Contact Form Image/photo-1643139863038-7355941e9e89-removebg-preview.png";

function Contactdetailsform({ContactFormStyle, hideContactFromSection, imageAnime, contactFormSpanTitleAnime, contactFormTitleAnime, getInTouchFormAnime}) {
    
    return (

        <>
        
            {/** Contact Form Section */}
            <div className={ContactFormStyle.contactFormSection} style={hideContactFromSection}>

                {/** Contact Form Section Inner Image Div */}
                <div className={ContactFormStyle.contactFormInnerImageDiv}>

                    <ContactFromImage
                    
                        contactFormImage={image}
                        contactFormImageAltText="Get In Touch Image"
                        imageAnime={imageAnime}
                        
                    />

                </div>

                {/** Contact From Section Inner Form Div */}
                <div className={ContactFormStyle.contactFormInnerFormDiv}>

                   {/** Inner Form Content Div */}
                    <div className={ContactFormStyle.innerFormContentDiv}>
                        
                        <InnerContactFormTitles
                        
                            spanTitle="We’re Here To Help"
                            headingTitle="Get In Touch For Growth-Focused Digital Strategies"
                            contactFormSpanTitleAnime={contactFormSpanTitleAnime}
                            contactFormTitleAnime={contactFormTitleAnime}

                            
                        />

                    </div>
                    
                    {/** Form Div */}
                    <div className={ContactFormStyle.formDiv}>

                        <ContactForm
                        
                            ContactFormStyle={ContactFormStyle}
                            getInTouchFormAnime={getInTouchFormAnime}
                            
                        />

                    </div>

                </div>


            </div>
            
        </>

    );

}

export default Contactdetailsform;