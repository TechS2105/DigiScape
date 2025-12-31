import React from 'react';
import PortfolioPageEnquiryTitleSectionTitle from '../Portfolio Page Enquary Form Section/Portfolioenquiryformsectiontitle';

function Portfoliopageenquiryformtitlesection({PortfolioPageStyle, configureSpanTextStyle, configureEnquaryTitleSectionHeight, configureButtonStyle, handleProjectConsultationSection, configureEnquaryHeadingStyle}) {
    
    return (

        <>

            {/** Portfolio Page Enquiry Form Title Section */}
            <div className={PortfolioPageStyle.enquaryTitleSection} style={configureEnquaryTitleSectionHeight}>

                <PortfolioPageEnquiryTitleSectionTitle
                
                    configureEnquaryHeadingStyle={configureEnquaryHeadingStyle}
                    configureButtonStyle={configureButtonStyle}
                    configureSpanTextStyle={configureSpanTextStyle}
                    handleProjectConsultationSection={handleProjectConsultationSection}
                    enquiryFormSpanText="Project Consultation"
                    enquiryFormHeadingText="Discuss Your Digital Strategy With Our Expert Team"
                    enquiryFormButtonText="Consult With Our Experts"
                    
                />

            </div>
        
        </>

    );

}

export default Portfoliopageenquiryformtitlesection;