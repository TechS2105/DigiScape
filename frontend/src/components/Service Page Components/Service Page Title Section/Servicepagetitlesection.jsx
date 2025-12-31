import React from 'react';
import ServicePageTitleSectionTitle from '../Service Page Title Section/Servicepagetitlesectiontitle';

function Servicepagetitlesection({ ServicePageStyle }) {
    
    return (

        <>
        
            {/** Title Section */}
            <div className={ServicePageStyle.servicePageTitleSection}>

                {/** Inner Title Section */}
                <div className={ServicePageStyle.servicePageInnerTitleSection}>

                    <ServicePageTitleSectionTitle
                    
                        servicePageSpanTitle="Our Services"
                        servicePageHeadingTitle="Integrated Digital Services Built for Performance, Growth, and Scale"
                        servicePagePara="DigiScape delivers end to end digital services designed to help businesses grow with confidence. From demand generation and growth optimization to scalable web technology, our solutions align strategy, execution, and performance under one unified framework."
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Servicepagetitlesection;