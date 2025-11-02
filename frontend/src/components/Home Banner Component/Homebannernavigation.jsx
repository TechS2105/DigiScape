import React, {useEffect} from 'react';

function Homebannernavigation({ HomeBannerStyle, prevArrow, nextArrow }) {
    
    useEffect(() => {

        let nxtArrowBox = document.querySelector(`.${HomeBannerStyle.nxtBannerNavigation}`);
        let prvArrowBox = document.querySelector(`.${HomeBannerStyle.prevBannerNavigation}`);
        let nxtArrow = document.querySelector(`.${HomeBannerStyle.nextArrow}`);
        let prvArrow = document.querySelector(`.${HomeBannerStyle.previousArrow}`);

        /** Next banner navigation  */

        // Mouse over 
        nxtArrowBox.addEventListener('mouseover', () => {

            nxtArrow.style.backgroundColor = "#292929ff";
            nxtArrow.style.transform = "translateY(-77%) rotateY(360deg)";

            prvArrow.style.transform = "translateX(-200px) rotateY(360deg)";
            prvArrow.style.opacity = "0";
            prvArrow.style.backgroundColor = "royalblue";


        });

        // Mouse leave
        nxtArrowBox.addEventListener('mouseleave', () => {

            nxtArrow.style.backgroundColor = "royalblue";
            nxtArrow.style.transform = "translateY(0%) rotateY(0deg)";

            prvArrow.style.transform = "translateX(0px) rotateY(0deg)";
            prvArrow.style.opacity = "1";
            prvArrow.style.backgroundColor = "#292929"

        });

        /** Previous banner navigation */

        // Mouse over
        prvArrowBox.addEventListener('mouseover', () => {

            prvArrow.style.backgroundColor = "royalblue";
            prvArrow.style.transform = "translateY(77%) rotateY(360deg)";

            nxtArrow.style.backgroundColor = "#292929";
            nxtArrow.style.opacity = "0";
            nxtArrow.style.transform = "translateX(200px) rotateY(360deg)";

        });

        // Mouse leave
        prvArrowBox.addEventListener('mouseleave', () => {

            prvArrow.style.backgroundColor = "#292929";
            prvArrow.style.transform = "translateY(0%) rotateY(0deg)";

            nxtArrow.style.backgroundColor = "royalblue";
            nxtArrow.style.opacity = "1";
            nxtArrow.style.transform = "translateX(0px) rotateY(0deg)";

        })

    }, [HomeBannerStyle, prevArrow, nextArrow]);
    
    return (

        <>
        
            {/** Previous Arrow Main Div */}
            <div className={HomeBannerStyle.prevBannerNavigation}>
            
                {/** Previous Arrow */}
                <div className={HomeBannerStyle.previousArrow} id="prev">
            
                    {prevArrow}
                                        
                </div>
            
            </div>
            
            {/** Next Arrow Main Div */}                    
            <div className={HomeBannerStyle.nxtBannerNavigation}>
            
                {/** Next Arrow */}
                <div className={HomeBannerStyle.nextArrow} id="next">
            
                    {nextArrow}
            
                </div>
            
            </div>
            
        </>

    );

}

export default Homebannernavigation;