import React from 'react';

function Homeprotfoliocontent({content}) {
    
    return (

        <>
        
            {/** Home Protfolio Content  */}
            <h3>{ content.title }</h3>
            <a href={content.url} target="_blank"> Live Demo  </a>
            
        </>

    );

}

export default Homeprotfoliocontent;