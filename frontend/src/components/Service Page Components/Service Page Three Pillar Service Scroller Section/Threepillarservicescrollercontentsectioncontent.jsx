import React from 'react';

function Threepillarservicescrollercontentsectioncontent({firstService, secondService, thirdService}) {
    
    return (

        <>
        
            {/** Pillar Service Scroller Content Section Content */}
            <ul>

                <li>{firstService}</li>
                <li>{secondService}</li>
                <li>{thirdService}</li>

            </ul>

        </>
        
    );

}

export default Threepillarservicescrollercontentsectioncontent;