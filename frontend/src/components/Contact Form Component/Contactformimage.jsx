import React from 'react';

function Contactformimage({contactFormImage, contactFormImageAltText, imageAnime}) {
    
    return (

        <>
        
            /** Image  */
            <img src={contactFormImage} alt={contactFormImageAltText} style={imageAnime} />
            
        </>

    );

}

export default Contactformimage;