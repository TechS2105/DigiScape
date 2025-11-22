import React from 'react';

function Marqueesecondscrollertext({MarqueeTextStyle,firstText, secondText, thirdText}) {
    
    return (

        <>
        
            {/** Marquee Inner Text Scroller Div */}
            <div className={MarqueeTextStyle.marqueeSecondInnerDiv}>
            
                <span> {firstText} </span>
                <span> {secondText} </span>
                <span> {thirdText} </span>
            
            </div>
            
        </>

    );

}

export default Marqueesecondscrollertext;