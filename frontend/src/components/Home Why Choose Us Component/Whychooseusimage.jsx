import React from 'react';

function Whychooseusimage({image, altText}) {
    
    return (

        <>
        
            {/** Image */}
            <img src={image} alt={altText} />
            
        </>

    );

}

export default Whychooseusimage;