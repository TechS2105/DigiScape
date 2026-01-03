import React from 'react';

function Ourapproachcardboxsvgicon({cardItem}) {
    
    return (

        <>
        
            {/** Our Approach Card Box SVG Icon */}
            <img src={cardItem.approachSVGImage} alt={cardItem.approachSVGImageAltText} />
            
        </>

    );

}

export default Ourapproachcardboxsvgicon;