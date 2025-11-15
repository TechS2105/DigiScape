import React from 'react';

function WhyChooseusservices({WhyChooseUsStyle, svg, title, para}) {
    
    return (

        <>
        
            {/** Services Box */}
            <div className={WhyChooseUsStyle.whyChooseUsServicesBox}>
        
                {/** Title and SVG Block */}
                <div className={WhyChooseUsStyle.whyChooseUsTitleSvgBlock}>
        
                    {/** SVG Box */}
                    <div className={WhyChooseUsStyle.whyChooseUseSvgIcon}>
        
                        {svg}
        
                    </div>
        
                    {/** Title Box */}
                    <div className={WhyChooseUsStyle.whyChooseUseTitle}>
        
                        <h3> {title} </h3>
        
                    </div>
        
                </div>
        
                {/** Para Block */}
                <div className={WhyChooseUsStyle.whyChooseUsParaBlock}>
        
                    <p> {para} </p>
        
                </div>
        
            </div>    
            
        </>

    );

}

export default WhyChooseusservices;