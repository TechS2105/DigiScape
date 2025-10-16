import React from 'react';
import HomeSecondTextScrollerStyle from '../../../public/styles/home second text scroller section files/homesecondtextscroller.module.css';
import { TbView360 } from "react-icons/tb";
import HomeSecondScrollerText from '../../components/Home Second Text Scroller Component/Homesecondscrollertext';

function Homesecondtextscroller() {
    
    return (

        <>
        
            {/** Text scroller section */}
            <div className={HomeSecondTextScrollerStyle.secondTextScrollerSectionDiv}>

                {/** Text scroller section text */}
                <div className={HomeSecondTextScrollerStyle.secondTextScrollerSectionText}>

                    {/** First Scroller Text */}
                    <HomeSecondScrollerText
                    
                        HomeSecondTextScrollerStyle={HomeSecondTextScrollerStyle}
                        svg={<TbView360 />}
                        
                    />

                    {/** Second Scroller Text */}
                    <HomeSecondScrollerText
                    
                        HomeSecondTextScrollerStyle={HomeSecondTextScrollerStyle}
                        svg={<TbView360 />}
                        
                    />

                    {/** Third Scroller Text */}
                    <HomeSecondScrollerText
                    
                        HomeSecondTextScrollerStyle={HomeSecondTextScrollerStyle}
                        svg={<TbView360 />}
                        
                    />

                    {/** Foruth Scroller Text */}
                    <HomeSecondScrollerText
                    
                        HomeSecondTextScrollerStyle={HomeSecondTextScrollerStyle}
                        svg={<TbView360 />}
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Homesecondtextscroller;