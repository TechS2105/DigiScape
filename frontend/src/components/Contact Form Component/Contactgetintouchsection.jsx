import React from 'react';
import { PiArrowFatLinesRight } from "react-icons/pi";

function Contactgetintouchsection({ContactFormStyle, handleContactFromSection}) {
    
    return (

        <>
        
            {/** Contact Form Get In Touch Section */} 
            <div className={ContactFormStyle.contactGetIntouchSection}>

                {/** Contact Form Get In Touch Inner Section */}                
                <div className={ContactFormStyle.contactFormGetInTochInnerDiv}>

                    <span>Talk To Our Team</span>
                    <h2> Get Expert Help With Marketing And Web Development </h2>
                    <button onClick={() => (handleContactFromSection())}> Proceed To Contact Form <PiArrowFatLinesRight /> </button>
                    
                </div>

            </div>
            
        </>

    );

}

export default Contactgetintouchsection;