import React from 'react';

function Whychooseuscontent({WhyChooseUsStyle, spanTitle, subHeadingTitle}) {
    
    return (

        <>

            <div className={WhyChooseUsStyle.titleSubtitleDiv}>
        
                <span> {spanTitle} </span>
                <h2> {subHeadingTitle} </h2>
        
            </div>
        
        </>

    );

}

export default Whychooseuscontent;