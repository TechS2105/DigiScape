import React from 'react';

function Contactadditionalinfo({ContactPageStyle, SVGIcon, spanTitle, infoContent}) {
    
    return (

        <>
        
            {/** Additional Info Box */}
            <div className={ContactPageStyle.infoBox}>
            
                {/** SVG */}
                <div className={ContactPageStyle.svgDiv}>
            
                    {SVGIcon}
            
                </div>
            
                {/** Info */}
                <div className={ContactPageStyle.infoDiv}>
            
                    <span> {spanTitle} </span>
                    <p> {infoContent} </p>
            
                </div>
            
            </div>


        </>
        
    );

}

export default Contactadditionalinfo;