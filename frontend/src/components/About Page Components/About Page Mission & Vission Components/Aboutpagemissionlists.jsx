import React from 'react';

function Aboutpagemissionlists({listSVGIcon, listItem1, listItem2, listItem3, listItem4, listItem5}) {
    
    return (

        <>
        
            {/** Mission List Items */}
            <ul>
            
                <li>{listSVGIcon} {listItem1}</li>
                <li>{listSVGIcon} {listItem2}</li>
                <li>{listSVGIcon} {listItem3}</li>
                <li>{listSVGIcon} {listItem4}</li>
                <li>{listSVGIcon} {listItem5}</li>
            
            </ul>
            
        </>

    );

}

export default Aboutpagemissionlists;