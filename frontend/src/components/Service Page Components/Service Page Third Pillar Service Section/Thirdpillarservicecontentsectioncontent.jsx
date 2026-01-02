import React from 'react';

function Thirdpillarservicecontentsectioncontent({thirdPillarServiceContentSpanText, thirdPillarServiceContentSubHeading, thirdPillarServiceContentMainHeading, thirdPillarServiceContentPara, thirdPillarServiceContentListItemHeading, thirdPillarServiceContentListItem_1, thirdPillarServiceContentListItem_2, thirdPillarServiceContentListItem_3, thirdPillarServiceContentListItem_4, thirdPillarServiceContentListItem_5,thirdPillarServiceContentButtonText, thirdPillarServiceContentButtonIcon}) {
    
    return (

        <>
        
            {/** Third Pillar Service Content Section Content */}
            <span>{thirdPillarServiceContentSpanText}</span>
            <h3>{thirdPillarServiceContentSubHeading}</h3>
            <h2>{thirdPillarServiceContentMainHeading}</h2>
            <p>{thirdPillarServiceContentPara}</p>
                        
            <ul>
                        
                <h4>{thirdPillarServiceContentListItemHeading}</h4>
                        
                <li>{thirdPillarServiceContentListItem_1}</li>
                <li>{thirdPillarServiceContentListItem_2}</li>
                <li>{thirdPillarServiceContentListItem_3}</li>
                <li>{thirdPillarServiceContentListItem_4}</li>
                <li>{thirdPillarServiceContentListItem_5}</li>
                        
            </ul>
                        
            <button>{thirdPillarServiceContentButtonText} {thirdPillarServiceContentButtonIcon}</button>
            
        </>

    );

}

export default Thirdpillarservicecontentsectioncontent;