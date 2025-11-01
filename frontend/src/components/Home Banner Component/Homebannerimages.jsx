import React from 'react';

function Homebannerimages(props) {
    
    return (

        <>
        
            <img src={props.itemImage.image} alt={props.itemImage.altText} />
            
        </>

    );

}

export default Homebannerimages;