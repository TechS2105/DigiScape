import React from 'react';

function Testimonialpersonimage({image, altText, patternImg, pAltText}) {
    
    return (

        <>
        
            {/** Background Pattern Image */}
            <img src={patternImg} alt={pAltText} />

            {/** Robot Image */}
            <img src={image} alt={altText} />
            
        </>

    );

}

export default Testimonialpersonimage;