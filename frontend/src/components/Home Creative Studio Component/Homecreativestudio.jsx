import React from 'react';
import HomeCreativeStudioStyle from '../../../public/styles/home creative studio section files/Homecreativestudio.module.css';
import HomeCreativeStudioVideo from '../Home Creative Studio Component/Homecreateivestudiovideo';
import { FaRegCirclePlay } from "react-icons/fa6";

function Homecreativestudio() {
    
    return (

        <>
        
            {/** Home creative studio section */}
            <div className={HomeCreativeStudioStyle.creativeStudioDiv}>

                {/** Home creative studio title section  */}
                <div className={HomeCreativeStudioStyle.creativeStudioTitle}>

                    <h2> Take A Virtual Office Tour </h2>
                    <span><FaRegCirclePlay /></span>

                </div>
                
                {/** Home creative studio video section */}
                <div className={HomeCreativeStudioStyle.creativeStudioVideoSection}>

                    <HomeCreativeStudioVideo />

                </div>

            </div>
            
        </>

    );

}

export default Homecreativestudio;