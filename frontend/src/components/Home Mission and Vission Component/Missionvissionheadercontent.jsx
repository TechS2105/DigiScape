import React from 'react';

function Missionvissionheadercontent({MissionVissionStyle, spanText, title, paraText}) {
    
    return (

        <>
        
            {/** Mission Vission Header Content Div */}
            <div className={MissionVissionStyle.missionVissionContent}>

                <span> {spanText} </span>
                <h2> {title} </h2>
                <p>{paraText}</p>

            </div>
            
        </>

    );

}

export default Missionvissionheadercontent;