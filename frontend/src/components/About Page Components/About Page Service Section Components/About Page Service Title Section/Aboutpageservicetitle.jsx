import React from 'react';

function Aboutpageservicetitle({AboutSectionStyle, serviceSpanTitle, serviceMainTitle}) {
    
    return (

        <>
        
            {/** Title Inner Section */}
            <div className={AboutSectionStyle.titleInnerDiv}>

                <span> {serviceSpanTitle} </span>
                <h2> {serviceMainTitle} </h2>

            </div>
            
        </>

    );

}

export default Aboutpageservicetitle;