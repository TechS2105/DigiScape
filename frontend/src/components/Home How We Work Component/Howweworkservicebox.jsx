import React from 'react';

function Howweworkservicebox({content}) {
    
    return (

        <>
        
            <h3> {content.title} </h3>

            <ul>

                <li>{content.list1}</li>
                <li>{content.list2}</li>
                <li>{content.list3}</li>

            </ul>
            
        </>

    );

}

export default Howweworkservicebox;