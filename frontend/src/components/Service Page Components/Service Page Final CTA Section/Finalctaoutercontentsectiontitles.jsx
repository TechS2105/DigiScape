import React from 'react';

function Finalctaoutercontentsectiontitles({handleClickRequestConsultation, outerCTAFormSpanTitle, outerCTAFormMainTitle, outerCTAFormParaContent, outerCTAFormButtonText}) {
    
    return (

        <>
        
            {/** Outer Content Section Titles */}
            <span>{outerCTAFormSpanTitle}</span>
            <h2>{outerCTAFormMainTitle}</h2>
            <p>{outerCTAFormParaContent}</p>
            <button onClick={() => {handleClickRequestConsultation()}}>{outerCTAFormButtonText}</button>
            
        </>

    );

}

export default Finalctaoutercontentsectiontitles;