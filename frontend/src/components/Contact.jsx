import React from 'react';
import ContactSection from '../components/Contact Page Components/Contact Section/Contactsection';
import ContactPageStyle from '../../public/styles/contact page style files/Contactpage.module.css';

function Contact() {
    
    return (
 
        <>
        
            {/** Contact Page Section */}
            < ContactSection

                ContactPageStyle={ContactPageStyle}
        
            />

        </>

    );

}

export default Contact;