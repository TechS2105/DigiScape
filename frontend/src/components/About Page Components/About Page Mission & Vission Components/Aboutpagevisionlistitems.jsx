import React from 'react';

function Aboutpagevisionlistitems({AboutSectionStyle, listItem1, listItem2, listItem3, listItem4, listItem5, visionSVGIcon}) {
    
    return (

        <>
        
            {/** List Items */}
            <div className={AboutSectionStyle.visionInnerListItemDiv}>
            
                    <ul>
            
                        <li>{visionSVGIcon} {listItem1}</li>
                        <li>{visionSVGIcon} {listItem2}</li>
                        <li>{visionSVGIcon} {listItem3}</li>
                        <li>{visionSVGIcon} {listItem4}</li>
                        <li>{visionSVGIcon} {listItem5}</li>
            
                    </ul>
            
            </div>  
            
        </>

    );

}

export default Aboutpagevisionlistitems;