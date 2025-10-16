import React from 'react';

function Homebannercontent({bannerContent}) {
    
    return (

        <>
        
            <span>{bannerContent.spanText}</span>
            <h1>{bannerContent.title}</h1>
            <p>{bannerContent.description}</p>
            <button>{bannerContent.button}</button>
            
        </>

    );

}

export default Homebannercontent; 