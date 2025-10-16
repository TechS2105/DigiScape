import React from 'react';

function Homeportfolioheader({spanText, title, para}) {
    
    return (

        <>
        
            <span> {spanText} </span>
            <h2> {title} </h2>
            <p> {para} </p>
            
        </>

    );

}

export default Homeportfolioheader;