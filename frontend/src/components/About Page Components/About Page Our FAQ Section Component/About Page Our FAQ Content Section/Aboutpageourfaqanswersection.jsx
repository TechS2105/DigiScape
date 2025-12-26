import React from 'react';
import AboutPageOurFaqAnswer from '../About Page Our FAQ Content Section/Aboutpageourfaqanswer';

function Aboutpageourfaqanswersection({AboutSectionStyle, handleFaqAnswerDiv, faqAnswer}) {
    
    return (

        <>
        
            {/** About Page Our Faq Answer Section */}
            <div className={AboutSectionStyle.faqAnswerDiv} style={handleFaqAnswerDiv}>

                <AboutPageOurFaqAnswer
                
                    faqAnswer={faqAnswer}
                    
                />

            </div>
            
        </>

    );

}

export default Aboutpageourfaqanswersection;