import React from 'react';

function Secondpillarservicecontentsectioncontent({secondServicePillarSpanText, secondServicePillarSubHeading, secondServicePillarMainHeading,
secondServicePillarParaContent, secondServicePillarListitemHeading, secondServicePillarListitem_1, secondServicePillarListitem_2, secondServicePillarListitem_3, secondServicePillarListitem_4, secondServicePillarListitem_5, secondServicePillarButtonText, secondServicePillarButtonIcon}) {
    
    return (

        <>
        
            {/** Second Pillar Service Content */}
            <span>{secondServicePillarSpanText}</span>
            <h3>{secondServicePillarSubHeading}</h3>
            <h2>{secondServicePillarMainHeading}</h2>
            <p>{secondServicePillarParaContent}</p>

            <ul>

                <h4>{secondServicePillarListitemHeading}</h4>
                            
                <li>{secondServicePillarListitem_1}</li>
                <li>{secondServicePillarListitem_2}</li>
                <li>{secondServicePillarListitem_3}</li>
                <li>{secondServicePillarListitem_4}</li>
                <li>{secondServicePillarListitem_5}</li>

            </ul>

            <button>{secondServicePillarButtonText} {secondServicePillarButtonIcon}</button>
            
        </>
        


    );

}

export default Secondpillarservicecontentsectioncontent