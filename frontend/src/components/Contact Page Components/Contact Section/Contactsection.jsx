import React from 'react';
import ContactTitleSection from '../Contact Title Section/Contacttitlesection';
import ContactBannerSection from '../Contact Banner Image Section/Contactbannersection';
import ContactAdditionalInfoSection from '../Contact Page Additional Info Section/Contactadditionalinfosection';
import ContactFormSection from '../Contact Form Section/Contactformsection';

function Contactsection({ContactPageStyle}) {
    
    return (

        <>
        
            {/** Contact Section */}
            <div className={ContactPageStyle.contactSection}>

                {/** Title Section */}
                <ContactTitleSection
                
                    ContactPageStyle={ContactPageStyle}
                    contactSpanTitle="Contact Us"
                    contactTitle="Let’s Talk About Your Digital Growth"
                    
                />

                {/** Banner Image Section */}
                <ContactBannerSection
                
                    ContactPageStyle={ContactPageStyle}
                    BannerContent="Have a question, idea, or project in mind? Reach out to DigiScape and start a conversation that focuses on real goals and measurable results. Our team works closely with businesses to understand their challenges, plan the right digital strategy, and deliver solutions that drive visibility, leads, and long-term growth."
                    
                />

                {/** Contact Additional Info Section */}
                <ContactAdditionalInfoSection
                
                    ContactPageStyle={ContactPageStyle}
                    
                />

                {/** Contact Form Section */}
                <ContactFormSection
                
                    ContactPageStyle={ContactPageStyle}
                    
                />


            </div>
            
        </>

    );

}

export default Contactsection;