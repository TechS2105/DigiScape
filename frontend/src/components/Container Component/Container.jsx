import React from 'react';

const customStyle = {

    width: "100%",
    height: "100%",
    position: "relative"

}

function Container(props) {
    
    return (

        <>
        
            <div style={customStyle}>

                {props.children}

            </div>
            
        </>

    );

}

export default Container