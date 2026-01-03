import React from 'react';

function Whychooseuscontentstitleandpara({ServicePageStyle, contentItem, idx}) {
    
    return (

        <>
        
            {/** Content Section Title & Para */}
             <div className={ServicePageStyle.corePointDiv} key={idx}>

                <h4>{contentItem.whyChooseUsTitle}</h4>
                <p>{contentItem.whyChooseUsPara}</p>

            </div>


        </>

    );

}

export default Whychooseuscontentstitleandpara;