import React from 'react';
import MarqueeTextStyle from '../../../public/styles/marquee text files/Marqueetext.module.css';
import MarqueeFirstTextScrollerSection from '../Marquee Text Component/Marqueefirstinnertextscrollersection';
import MarqueeSecondTextScrollerSection from '../Marquee Text Component/Marqueesecondinnertextscrollersection';

function Marqueetext() {
    
    return (

        <>
        
            {/** Marquee Text Main Section */}
            <div className={MarqueeTextStyle.marqueeTextMainDiv}>

                {/** First Marquee Div */}
                <MarqueeFirstTextScrollerSection
                
                    MarqueeTextStyle={MarqueeTextStyle}
                    
                />

                {/** Second Marquee Div */}
                <MarqueeSecondTextScrollerSection
                
                    MarqueeTextStyle={MarqueeTextStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Marqueetext;