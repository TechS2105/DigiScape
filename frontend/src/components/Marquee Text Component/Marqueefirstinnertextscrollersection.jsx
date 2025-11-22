import React from 'react';
import MarqueeFirstScrollerText from "../Marquee Text Component/Marqueefirstscrollertext";

function Marqueefirstinnertextscrollersection({MarqueeTextStyle}) {
    
    return (

        <>
        
            {/** Marquee First Text Scroller Inner Section */}    
              <div className={MarqueeTextStyle.marqueeFirstDiv}>

                    {/** First Marquee Inner Div */}
                    <MarqueeFirstScrollerText
                    
                        MarqueeTextStyle={MarqueeTextStyle}
                        firstText="Boost your online growth with DigiScape Digital Marketing Agency"
                        secondText="Smart strategies that help your business shine online"
                        thirdText="Web development and digital marketing solutions that deliver results"
                        
                    />

                    {/** Second Marquee Inner Div */}
                    <MarqueeFirstScrollerText

                        MarqueeTextStyle={MarqueeTextStyle}
                        firstText="Boost your online growth with DigiScape Digital Marketing Agency"
                        secondText="Smart strategies that help your business shine online"
                        thirdText="Web development and digital marketing solutions that deliver results"
                    
                    />

                    {/** Third Marquee Inner Div */}
                    <MarqueeFirstScrollerText
                    
                        MarqueeTextStyle={MarqueeTextStyle}
                        firstText="Boost your online growth with DigiScape Digital Marketing Agency"
                        secondText="Smart strategies that help your business shine online"
                        thirdText="Web development and digital marketing solutions that deliver results"
                        
                    />

                </div>
            
        </>

    );

}

export default Marqueefirstinnertextscrollersection;