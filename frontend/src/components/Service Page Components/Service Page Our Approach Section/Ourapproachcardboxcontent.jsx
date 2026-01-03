import React from 'react';

function Ourapproachcardboxcontent({cardItem}) {
    
    return (

        <>
        
            {/** Card Box Content */}
            <h4>{cardItem.approachTitle}</h4>
            <p>{cardItem.approachPara}</p>
            
        </>

    );

}

export default Ourapproachcardboxcontent;