import React from 'react';

function Portfolioenquiryformsectiontitle({configureButtonStyle, configureEnquaryHeadingStyle, configureSpanTextStyle, handleProjectConsultationSection, enquiryFormSpanText, enquiryFormHeadingText, enquiryFormButtonText}) {
    
    return (

        <>
        
            {/** Form Title */}
            <span style={configureSpanTextStyle}>{enquiryFormSpanText}</span>
            <h2 style={configureEnquaryHeadingStyle}>{enquiryFormHeadingText}</h2>
            <button onClick={handleProjectConsultationSection} style={configureButtonStyle}>{enquiryFormButtonText}</button>

            
        </>

    );

}

export default Portfolioenquiryformsectiontitle;