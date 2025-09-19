import React from 'react';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";

function Homebannernavigation({HomeStyle, next, previous}) {
    
    return (

        <>
        
            <div className={HomeStyle.homeBannerNaviationSection}>

                <ul>

                    <li id={previous}><RiArrowLeftSLine /></li>
                    <li id={next}><RiArrowRightSLine /></li>

                </ul>

            </div>

        </>

    );

}

export default Homebannernavigation;