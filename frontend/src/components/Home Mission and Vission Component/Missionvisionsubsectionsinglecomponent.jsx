import React from 'react';

function Missionvisionsubsectionsinglecomponent({heading, svg, para, subHeading, list1, list2, list3, list4, list5}) {
    
    return (

        <>
        
            <h3> {svg}{heading} </h3>
            
                <p>{para}</p>
            
            <h4> {subHeading} </h4>
            
            <ul>
            
                <li> { list1 } </li>
                <li> { list2 } </li>
                <li> { list3 } </li>
                <li> { list4 } </li>
                <li> { list5 } </li>
            
            </ul>
            
        </>

    );

}

export default Missionvisionsubsectionsinglecomponent;