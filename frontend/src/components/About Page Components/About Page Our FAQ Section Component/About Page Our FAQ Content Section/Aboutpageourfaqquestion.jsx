import React from 'react';

function Aboutpageourfaqquestion({animateFaqQuestionSVG, faqQuestion, faqQuestionSVG}) {
    
    return (

        <>

            {/** FAQ Question */}
            <h3> <span style={animateFaqQuestionSVG}> {faqQuestionSVG} </span> { faqQuestion }</h3>
        
        </>

    );

}


export default Aboutpageourfaqquestion;
