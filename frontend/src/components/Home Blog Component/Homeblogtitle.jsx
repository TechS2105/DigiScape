import React from 'react';

function Homeblogtitle({HomeBlogTitle, HomeBlogSpanTitle, HomeBlogPara}) {
    
    return (

        <>
        
            {/** Home Blog Title */}
            <span>{HomeBlogSpanTitle}</span>
            <h2>{HomeBlogTitle}</h2>
            <p>{HomeBlogPara}</p>
            
        </>

    );

}

export default Homeblogtitle;