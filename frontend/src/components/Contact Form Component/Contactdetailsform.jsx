import React from 'react';
import ContactForm from '../Contact Form Component/Form';

function Contactdetailsform({ContactFormStyle}) {
    
    return (

        <>
        
            {/** Contact Form Section */}
            <div className={ContactFormStyle.contactFormSection}>

                {/** Contact Form Section Inner Image Div */}
                <div className={ContactFormStyle.contactFormInnerImageDiv}>

                    <img src="https://images.unsplash.com/photo-1643139863038-7355941e9e89?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Get In Touch Image" />

                </div>

                {/** Contact From Section Inner Form Div */}
                <div className={ContactFormStyle.contactFormInnerFormDiv}>

                   {/** Inner Form Content Div */}
                    <div className={ContactFormStyle.innerFormContentDiv}>
                        
                        <span> We’re Here To Help </span>
                        <h3>Get In Touch For Growth-Focused Digital Strategies</h3>

                    </div>
                    
                    {/** Form Div */}
                    <div className={ContactFormStyle.formDiv}>

                        <ContactForm />

                    </div>

                </div>


            </div>
            
        </>

    );

}

export default Contactdetailsform;