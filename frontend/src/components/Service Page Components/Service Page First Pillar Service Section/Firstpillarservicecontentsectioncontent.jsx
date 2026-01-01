import React from 'react';

function Firstpillarservicecontentsectioncontent({spanTitle, mainHeadingTitle, subHeadingTitle, para, listItemHeading, includedService1, includedService2, includedService3, includedService4, includedService5, buttonText, buttonSVG}) {
    
    return (

        <>
        
            {/** First Pillar Service Content Section Content */}
            <span>{spanTitle}</span>

            <h3>{mainHeadingTitle}</h3>
            <h2>{subHeadingTitle}</h2>
            <p>{para}</p>
                        
            <ul>
                        
                <h4> {listItemHeading} </h4>
                        
                <li>{includedService1}</li>
                <li>{includedService2}</li>
                <li>{includedService3}</li>
                <li>{includedService4}</li>
                <li>{includedService5}</li>
                        
            </ul>
                        
            <button>{buttonText} {buttonSVG}</button>
            
        </>

    );

}

export default Firstpillarservicecontentsectioncontent;