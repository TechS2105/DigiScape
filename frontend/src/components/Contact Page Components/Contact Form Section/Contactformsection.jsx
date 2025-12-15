import React from 'react';
import ContactForm from '../Contact Form Section/Contactform';

function Contactformsection({ContactPageStyle}) {
    
    return (

        <>
        
            {/** Contact Form Section */}
            <div className={ContactPageStyle.contactFormSection}>

                {/** Contact Form Div */}
                <div className={ContactPageStyle.contactForm}>

                    {/** Contact Form Title */}
                    <div className={ContactPageStyle.contactFormTitle}>

                        <h3> Let’s Start Your Digital Growth Journey </h3>

                    </div>

                    {/** Contact Form */}
                    <div className={ContactPageStyle.formDiv}>

                        <ContactForm
                        
                            ContactPageStyle={ContactPageStyle}
                            
                        />

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Contactformsection;