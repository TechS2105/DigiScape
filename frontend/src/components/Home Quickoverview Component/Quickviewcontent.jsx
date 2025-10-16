import React from 'react';

function Quickviewcontent({QuickViewStyle, svgIcon, title, description}) {
    
    return (

        <>
        
            {/** Quick view inner SVG box */}
            <div className={QuickViewStyle.svgBox}>

                <span>{ svgIcon }</span>

            </div>

            {/** Quick view inner content box */}
            <div className={QuickViewStyle.contentBox}>

                <h3> { title } </h3>
                <p>{ description }</p>

            </div>
            
        </>

    );

}

export default Quickviewcontent;