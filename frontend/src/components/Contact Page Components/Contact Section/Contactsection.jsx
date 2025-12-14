import React from 'react';

function Contactsection({ContactPageStyle}) {
    
    return (

        <>
        
            {/** Contact Section */}
            <div className={ContactPageStyle.contactSection}>

                {/** Title Section */}
                <div className={ContactPageStyle.contactPageTitleSection}>

                    {/** Title Div */}
                    <div className={ContactPageStyle.contactPageTitleDiv}>

                        <span> Contact Us </span>
                        <h1> Let’s Work Together </h1>

                    </div>

                </div>

                {/** Banner Image Section */}
                <div className={ContactPageStyle.contactPageBannerSection}> 

                    {/** Description */}
                    <div className={ContactPageStyle.contactPageDescription}>

                        <p>Ready to grow your brand online? Get in touch with DigiScape to discuss your goals, challenges, and ideas. Our team is here to offer clear guidance, smart strategies, and results-focused digital marketing solutions tailored to your business.</p>
                        
                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Contactsection;