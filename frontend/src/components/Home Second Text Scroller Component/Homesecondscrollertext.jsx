import React from 'react';

function Homesecondscrollertext({HomeSecondTextScrollerStyle, svg}) {
    
    return (

        <>
        
           {/** Text scroller div */}
            <div className={HomeSecondTextScrollerStyle.scrollerDiv}>
           
                <span> Digital </span>
                {svg}
                <span> Web Agency </span>
                {svg}
                <span> Marketing </span>
                {svg}
                <span> Solution </span>
                {svg}
           
            </div> 
            
        </>

    );

}

export default Homesecondscrollertext;