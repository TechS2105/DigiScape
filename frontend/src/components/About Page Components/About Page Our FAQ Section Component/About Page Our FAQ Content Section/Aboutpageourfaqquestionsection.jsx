import React from 'react';
import AboutPageOurFaqQuestion from '../About Page Our FAQ Content Section/Aboutpageourfaqquestion';
import AboutpageOurFaqQuestionSVG from '../About Page Our FAQ Content Section/Aboutpageourfaqquestionsvg';

function Aboutpageourfaqquestionsection({AboutSectionStyle, animateFaqQuestionDiv, animateFaqQuestionSVG, faqFirstSpan, faqSecondSpan, faqQuestion, faqQuestionSVG}) {
    
    return (

        <>
        
            {/** FAQ Question Section */}
            <div className={AboutSectionStyle.faqQuestionDiv} style={animateFaqQuestionDiv}>
            
                {/** FAQ Question */}
                <div className={AboutSectionStyle.faqQuestion}>
            
                    <AboutPageOurFaqQuestion
                    
                        animateFaqQuestionSVG={animateFaqQuestionSVG}
                        faqQuestionSVG={faqQuestionSVG}
                        faqQuestion={faqQuestion}
                        
                    />
            
                </div>
            
                {/** FAQ Toggle Button Div */}
                <div className={AboutSectionStyle.faqToggleButtonDiv}>
            
                    {/** Span Dash Icons Div*/}
                    <div className={AboutSectionStyle.faqSpanDashIconsDiv}>
            
                        <AboutpageOurFaqQuestionSVG
                        
                            faqFirstSpan={faqFirstSpan}
                            faqSecondSpan={faqSecondSpan}
                            
                        />
            
                    </div>
            
                </div>
            
            </div>
            
        </>

    );

}

export default Aboutpageourfaqquestionsection;