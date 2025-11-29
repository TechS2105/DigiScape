import React from 'react';
import ContactFormStyle from '../../../public/styles/contact form files/Contactform.module.css';
import ContactGetInTouchSection from '../Contact Form Component/Contactgetintouchsection';
import ContactFormSection from '../Contact Form Component/Contactdetailsform';

function Contactfrom() {
    
    return (

        <>
        
            {/** Contact Form Main Section */}
            <div className={ContactFormStyle.contactFormMainSection}>

                {/** Contact Form Section */}
                <ContactFormSection
                
                    ContactFormStyle={ContactFormStyle}
                    
                />

                {/** Contact Get In Touch Section */}
                <ContactGetInTouchSection

                    ContactFormStyle={ContactFormStyle}
                    
                />



            </div>
            
        </>

    );

}

export default Contactfrom;