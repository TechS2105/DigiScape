import React from 'react';

function Aboutpagemissiontitles({AboutSectionStyle, missionTitle, missionPara}) {
    
    return (

        <>
        
            {/** Mission Title & Para */}
             {/** Content Div */}
            <div className={AboutSectionStyle.contentDiv}>

                <h4> {missionTitle} </h4>
                <p> {missionPara} </p>

            </div>

            
        </>

    );

}

export default Aboutpagemissiontitles;