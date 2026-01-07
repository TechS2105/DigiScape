import React from 'react';

function Finalctainnerformtitlesectiontitle({configureFinalCtaFormMainTitleStyle, finalCtaInnerFormSectionSpanSVGIcon, configureFinalCtaFormSpanTitleStyle, finalCTAInnerFormSpanTitle, finalCTAInnerFormMainTitle}) {
    
    return (

        <>

            {/** Titles */}
            <span style={configureFinalCtaFormSpanTitleStyle}>{finalCTAInnerFormSpanTitle}{finalCtaInnerFormSectionSpanSVGIcon}</span>
            <h2 style={configureFinalCtaFormMainTitleStyle}>{finalCTAInnerFormMainTitle}</h2>

        
        </>

    );

}

export default Finalctainnerformtitlesectiontitle;