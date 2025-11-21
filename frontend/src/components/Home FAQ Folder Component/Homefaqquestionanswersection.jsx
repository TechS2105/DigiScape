import React from 'react';
import { FaPlus } from "react-icons/fa";

function Homefaqquestionanswersection({HomeFaqSection, handleFaqClick, faqQuestionBoxStyle, hideFaqAnswerBox, faqQuestionSVG, faqSerialNo, faqQuestionTitle, faqAnswerContent}) {
    
    return (

        <>
        
           {/** First FAQ */}
            <div className={HomeFaqSection.faqQuestionBox} onClick={handleFaqClick} style = {faqQuestionBoxStyle}>
           
                {/** Question Div */}
                <div className={HomeFaqSection.faqQuestionDiv}>
           
                    <span>{ faqSerialNo }</span>
                    <h3>{ faqQuestionTitle }</h3>
           
                </div>
           
                {/** Open & Close Div */}
                <div className={HomeFaqSection.faqOpenCloseIconDiv}> <FaPlus style={faqQuestionSVG}/> </div>
           
            </div>
           
            {/** First FAQ Answar Div */}
            <div className={HomeFaqSection.faqAnswarDiv} style={hideFaqAnswerBox}>
           
                <p>{ faqAnswerContent }</p>
           
            </div> 
            
        </>

    );

}

export default Homefaqquestionanswersection;