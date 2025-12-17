import React from 'react';

function Aboutpagemarqueetext({AboutSectionStyle, marqueeTextPara}) {
    
    return (

        <>
        
            {/** Marquee Text */}
            <div className={AboutSectionStyle.marqueeText}>

                <p>{ marqueeTextPara }</p>

            </div>
            
        </>

    );

}

export default Aboutpagemarqueetext;