import React from 'react';
import ContactBannerContent from '../Contact Banner Image Section/Contactbannercontent';

function Contactbannersection({ContactPageStyle, BannerContent}) {
    
    return (

        <>
        
            {/** Contact Banner Section */}
            <div className={ContactPageStyle.contactPageBannerSection}> 

                {/** Description */}
                <div className={ContactPageStyle.contactPageDescription}>

                    <ContactBannerContent
                    
                        BannerContent={BannerContent}
                        
                    />
                        
                </div>

            </div>
            
        </>

    );

}

export default Contactbannersection;