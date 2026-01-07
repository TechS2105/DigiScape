import React from 'react';
import FinalCtaOuterContentSectionTitles from '../Service Page Final CTA Section/Finalctaoutercontentsectiontitles';

function Finalctaoutercontentsection({ServicePageStyle, handleClickRequestConsultation, configureServicePageFinalCtaContentBoxStyle}) {
    
    return (

        <>
        
            {/** Final CTA Outer Content Section */}
            <div className={ServicePageStyle.servicePageFinalCtaContentBox} style={configureServicePageFinalCtaContentBoxStyle}>

                {/** Final CTA Inner Content Box */}
                <div className={ServicePageStyle.servicePageFinalCtaInnerContentBox}>

                    <FinalCtaOuterContentSectionTitles
                    
                        handleClickRequestConsultation={handleClickRequestConsultation}
                        outerCTAFormSpanTitle="Get Started"
                        outerCTAFormMainTitle="Strategic Digital Solutions Built for Enduring Growth"
                        outerCTAFormParaContent="DigiScape partners with forward thinking brands to design refined, performance driven digital strategies. Our approach balances precision, insight, and execution to support sustainable growth with clarity and confidence."
                        outerCTAFormButtonText="Request a Consultation"
                        
                    />

                </div>
                    
            </div>
            
        </>

    );

}

export default Finalctaoutercontentsection;