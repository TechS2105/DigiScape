import React from 'react';

function Homeaboutwhatweoffers({HomeAboutStyle, svgIcon, title, description}) {
    
    return (

        <>
        
            {/** What we offer box */}
            <div className={HomeAboutStyle.whatWeOfferBox}>

                {/** SVG Box  */}
                <div className={HomeAboutStyle.svgIconBox}>

                    <span> {svgIcon} </span>

                </div>

                {/** Content Box  */}
                <div className={HomeAboutStyle.contentBox}>

                    <h3> {title} </h3>
                    <p> {description} </p>

                </div>

            </div>
            
        </>

    );

}

export default Homeaboutwhatweoffers;