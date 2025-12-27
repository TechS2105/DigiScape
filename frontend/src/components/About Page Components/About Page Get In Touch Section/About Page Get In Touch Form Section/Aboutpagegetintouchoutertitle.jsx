import React from 'react';

function Aboutpagegetintouchoutertitle({outerSpanTitle, outerMainTitle, outerButtonText, outerButtonOnClickFun}) {
    
    return (

        <>
        
            {/** Outer Title  */}
            <span> {outerSpanTitle} </span>
            <h2> {outerMainTitle} </h2>
            <button onClick={() => { outerButtonOnClickFun() }}>{outerButtonText}</button>
            
        </>

    );

}

export default Aboutpagegetintouchoutertitle;