import React from 'react';

function BlogTitle({bSpanTitle, bHeadingTitle, bParaContent}) {
    
    return (

        <>
        
            {/** Blog Title */}
            <span> {bSpanTitle} </span>
            <h1> {bHeadingTitle} </h1>
            <p> {bParaContent} </p>
            
        </>

    );

}

export default BlogTitle;