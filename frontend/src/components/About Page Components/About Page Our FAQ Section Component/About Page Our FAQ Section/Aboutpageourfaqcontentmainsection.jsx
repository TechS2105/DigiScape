import React from 'react';
import { PiStarFourFill } from "react-icons/pi";
import AboutPageOurFaqTitleSection from '../About Page Our FAQ Title Section/Aboutpageourfaqtitlesection';
import AboutPageOurFaqQuestionAnswerMainSection from '../About Page Our FAQ Content Section/Aboutpageourfaqquestionanswermainsection';

function Aboutpageourfaqcontentsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page FAQ Section */}
            <div className={AboutSectionStyle.aboutPageFAQSection}>

                {/** About Page FAQ Title Section */}
                <AboutPageOurFaqTitleSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    faqSpanTitle="Support & Guidance"
                    faqMainTitle="Transparent Answers That Build Trust From Day One"
                    
                />

                {/** About Page FAQ Content Section */}
                <AboutPageOurFaqQuestionAnswerMainSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    faqQuestionSVG={<PiStarFourFill />}
                    
                />
                
            </div>
            
        </>

    );

}

export default Aboutpageourfaqcontentsection;