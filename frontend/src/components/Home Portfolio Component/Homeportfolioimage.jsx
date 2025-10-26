import React from 'react';

function Homeportfolioimage({content}) {
    
    return (

        <>
        
            {/** Portfolio Images  */}
            <img src={content.image} alt={content.altText} />
            
        </>

    );

}

export default Homeportfolioimage;