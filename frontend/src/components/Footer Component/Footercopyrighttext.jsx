import React from 'react';

function Footercopyrighttext({currentYear, copyrightText1, copyrightText2, logoText}) {
    
    return (

        <>
        
            {/** Footer Copyright text */}
            <p> {copyrightText1} {currentYear} | {copyrightText2} </p>
            <span>{logoText}</span>

        </>

    );

}

export default Footercopyrighttext;