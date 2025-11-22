import React from 'react';
import MarqueeSecondTextScroller from '../Marquee Text Component/Marqueesecondscrollertext';

function Marqueesecondinnertextscrollersection({MarqueeTextStyle}) {
    
    return (

        <>
        
            {/** Marquee Second Text Scroller Div */}
            <div className={MarqueeTextStyle.marqueeSecondDiv}>
            
                {/** First Marquee Inner Div */}
                <MarqueeSecondTextScroller 
                
                    MarqueeTextStyle={MarqueeTextStyle}
                    firstText="Boost your online growth with DigiScape Digital Marketing Agency *"
                    secondText="Smart strategies that help your business shine online *"
                    thirdText="Web development and digital marketing solutions that deliver results *"
                    
                />
            
                {/** Second Marquee Inner Div */}
                <MarqueeSecondTextScroller
                
                    MarqueeTextStyle={MarqueeTextStyle}
                    firstText="Boost your online growth with DigiScape Digital Marketing Agency *"
                    secondText="Smart strategies that help your business shine online *"
                    thirdText="Web development and digital marketing solutions that deliver results *"
                    
                />
            
                {/** Third Marquee Inner Div */}
                <MarqueeSecondTextScroller
                
                    MarqueeTextStyle={MarqueeTextStyle}
                    firstText="Boost your online growth with DigiScape Digital Marketing Agency *"
                    secondText="Smart strategies that help your business shine online *"
                    thirdText="Web development and digital marketing solutions that deliver results *"
                    
                />
            
            </div>
            
        </>

    );

}

export default Marqueesecondinnertextscrollersection;