import React from 'react';
import FinalCTAInnerFormSectionForm from '../Service Page Final CTA Section/Finalctainnerformsectionform';

function Finalctainnerformsectionmainformbox({ServicePageStyle, configureFinalCTAFormStyle, configureServicePageInnerFinalCtaFormSection}) {
    
    return (

        <>
        
            {/** Inner Main Form Box */}
            <div className={ServicePageStyle.servicePageInnerFinalCtaFormSection} style={configureServicePageInnerFinalCtaFormSection}>
            
                <FinalCTAInnerFormSectionForm
                
                    configureFinalCTAFormStyle={configureFinalCTAFormStyle}
                    ServicePageStyle={ServicePageStyle}
                    
                />   
            
            </div>


        </>

    );

}

export default Finalctainnerformsectionmainformbox;