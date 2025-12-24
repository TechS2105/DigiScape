import React from 'react';
import { PiStarFourFill } from "react-icons/pi";

function Aboutpageourfaqcontentsection({AboutSectionStyle}) {
    
    return (

        <>
        
            {/** About Page FAQ Section */}
            <div className={AboutSectionStyle.aboutPageFAQSection}>

                {/** About Page FAQ Title Section */}
                <div className={AboutSectionStyle.aboutPageFAQTitleSection}>

                    {/** FAQ Inner Title Div */}
                    <div className={AboutSectionStyle.aboutPageFAQInnerTitle}>

                        <span>Support & Guidance</span>
                        <h2> Transparent Answers That Build Trust From Day One </h2>

                    </div>

                </div>

                {/** About Page FAQ Content Section */}
                <div className={AboutSectionStyle.aboutPageFAQContentSection}>

                    {/** FAQ Inner Content Section */}
                    <div className={AboutSectionStyle.aboutPageFAQContentInnerSection}>

                        {/** First FAQ */}
                        <div className={AboutSectionStyle.firstFAQDiv}>

                            {/** FAQ Question Div */}
                            <div className={AboutSectionStyle.firstFaqQuestionDiv}>

                                {/** FAQ Question */}
                                <div className={AboutSectionStyle.firstFaqQuestion}>

                                    <h3> <PiStarFourFill /> What makes DigiScape different from other digital marketing agencies? </h3>

                                </div>

                                {/** FAQ Toggle Button Div */}
                                <div className={AboutSectionStyle.firstFaqToggleButtonDiv}>

                                    {/** Span Dash Icons Div*/}
                                    <div className={AboutSectionStyle.faqSpanDashIconsDiv}>

                                        <span></span>
                                        <span></span>

                                    </div>

                                </div>

                            </div>

                            {/** FAQ Answer Div */}
                            <div className={AboutSectionStyle.firstFaqAnswerDiv}>

                                <p>DigiScape focuses on strategy first, execution second. We do not apply generic tactics or one-size-fits-all packages. Every engagement starts with understanding your business goals, audience, and growth stage. Our team combines data-driven planning, creative execution, and measurable performance tracking so you always know what is being done and why it matters to your business.</p>

                            </div>

                        </div>

                    </div>

                </div>
                
            </div>
            
        </>

    );

}

export default Aboutpageourfaqcontentsection;