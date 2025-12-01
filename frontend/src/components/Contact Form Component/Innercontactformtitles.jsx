import React from 'react';

function Innercontactformtitles({spanTitle, headingTitle, contactFormTitleAnime, contactFormSpanTitleAnime}) {
    
    return (

        <>
        
            {/** Titles */}
            <span style={contactFormSpanTitleAnime}> {spanTitle} </span>
            <h3 style={contactFormTitleAnime}> {headingTitle} </h3>
            
        </>

    );

}

export default Innercontactformtitles;