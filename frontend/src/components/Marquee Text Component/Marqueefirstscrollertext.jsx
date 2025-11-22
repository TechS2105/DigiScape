import React from 'react';

function Marqueefirstscrollertext({firstText, secondText, thirdText, MarqueeTextStyle}) {
    
    return (

        <>
        
            {/** Scroller Texts */} 
            <div className={MarqueeTextStyle.marqueeFirstInnerDiv}>

                <span>{ firstText }</span>
                <span>{ secondText }</span>
                <span>{ thirdText }</span>

            </div>
            
        </>

    );

}

export default Marqueefirstscrollertext;