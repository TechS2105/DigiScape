import React from 'react';
import ContactTitle from '../Contact Title Section/Contacttitle';

function Contacttitlesection({ContactPageStyle, contactSpanTitle, contactTitle}) {
    
    return (

        <>
        
            {/** Title Section */}
            <div className={ContactPageStyle.contactPageTitleSection}>

                {/** Title Div */}
                <div className={ContactPageStyle.contactPageTitleDiv}>

                    <ContactTitle
                    
                        contactSpanTitle={contactSpanTitle}
                        contactTitle={contactTitle}
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Contacttitlesection;