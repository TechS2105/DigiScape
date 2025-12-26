import React from 'react';
import AboutPageOurFaqQuestionSection from './Aboutpageourfaqquestionsection';
import AboutPageOurFaqAnswerSection from './Aboutpageourfaqanswersection';

function Aboutpageourfaqquestionanswersection({AboutSectionStyle, handleClickFAQ, animateFaqQuestionDiv, faqQuestionSVG, faqQuestion, faqFirstSpan, faqSecondSpan, animateFaqQuestionSVG, handleFaqAnswerDiv, faqAnswer}) {
    
    return (

        <>
        
            {/** FAQ Question Answer Section */}
            <div className={AboutSectionStyle.faqDiv} onClick={handleClickFAQ}>
            
                {/** FAQ Question Div */}
                <AboutPageOurFaqQuestionSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    animateFaqQuestionDiv={animateFaqQuestionDiv}
                    faqQuestionSVG={faqQuestionSVG}
                    faqQuestion={faqQuestion}
                    faqFirstSpan={faqFirstSpan}
                    faqSecondSpan={faqSecondSpan}
                    animateFaqQuestionSVG={animateFaqQuestionSVG}
                    
                />
            
                {/** FAQ Answer Div */}
                <AboutPageOurFaqAnswerSection
                
                    AboutSectionStyle={AboutSectionStyle}
                    handleFaqAnswerDiv={handleFaqAnswerDiv}
                    faqAnswer={faqAnswer}
                    
                />
            
            </div>  
            
        </>

    );

}

export default Aboutpageourfaqquestionanswersection;