import React from 'react';
import { MdAlternateEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { TfiAlarmClock } from "react-icons/tfi";
import ContactAdditionalInfo from '../Contact Page Additional Info Section/Contactadditionalinfo';

function Contactadditionalinfosection({ContactPageStyle}) {
    
    return (

        <>
        
            {/** Contact Additional Info Section */}
            <div className={ContactPageStyle.contactAdditionalInfo}>

                {/** First Contact Additional Info Box */}
                <ContactAdditionalInfo
                
                    ContactPageStyle={ContactPageStyle}
                    SVGIcon={<MdAlternateEmail />}
                    spanTitle="Email"
                    infoContent="digiscape.official@gamil.com"
                    
                />

                {/** Second Contact Additional Info Box */}
                <ContactAdditionalInfo
                
                    ContactPageStyle={ContactPageStyle}
                    SVGIcon={<BsTelephoneFill />}
                    spanTitle="Phone"
                    infoContent="+91 88432 88323"
                    
                />

                {/** Third Contact Additional Info Box */}
                <ContactAdditionalInfo
                
                    ContactPageStyle={ContactPageStyle}
                    SVGIcon={<TfiAlarmClock />}
                    spanTitle="Work Hours"
                    infoContent="Mon - Fri at 10.00 AM - 7.00 PM"
                    
                />

            </div>
            
        </>

    );

}

export default Contactadditionalinfosection;