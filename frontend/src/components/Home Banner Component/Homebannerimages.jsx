import React from 'react';

function Homebannerimages({bannerImage}) {
    
    return (

        <>
        
            <img src={bannerImage.image} alt={bannerImage.altText} />
            
        </>

    );

}

export default Homebannerimages;