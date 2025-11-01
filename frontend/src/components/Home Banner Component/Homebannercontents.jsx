import React from 'react';

function Homebannercontents(props) {
    
    return (

        <>
        
            <span>{ props.itemContent.spanText }</span>
            <h2> { props.itemContent.title } </h2>
            <button> { props.itemContent.button } </button>
            
        </>

    );

}

export default Homebannercontents;