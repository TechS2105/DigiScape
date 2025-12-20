import React from 'react';

function Aboutpageservicesectionlistitems({handleStyleOnMouseOut, handleStyleOnMouseOver, spanAnime, AboutSectionStyle, serviceNameAnime, buttonAnime, svgAnime, imageAnime, serviceSpanNo, serviceTitle, serviceSVGIcon, serviceImage, serviceImageAltText, serviceTitleDivAnime}) {
    
    return (

        <>
        
            {/** About Page Services List Items */}
            <li onMouseOver={handleStyleOnMouseOver} onMouseOut={handleStyleOnMouseOut}>
            
                <div className={AboutSectionStyle.noDiv}>
                                                
                    <span style={spanAnime}>{serviceSpanNo}</span>
                                            
                </div>
                <div className={AboutSectionStyle.serviceNameDiv}>

                    {/** Image Div */}
                    <div className={AboutSectionStyle.serviceNameImageDiv} style={imageAnime}>

                        <img src={serviceImage} alt={serviceImageAltText} />

                    </div>

                    {/** Title Div */}
                    <div className={AboutSectionStyle.serviceTitleDiv} style={serviceTitleDivAnime}>

                        <h3 style={serviceNameAnime}>{serviceTitle}</h3>

                    </div>
                                            
                </div>
                <div className={AboutSectionStyle.serviceNavigationDiv}>
            
                    <button style={buttonAnime}><a href="#" style={svgAnime}>{serviceSVGIcon}</a></button>
            
                </div>
            
            </li>

            
        </>

    );

}

export default Aboutpageservicesectionlistitems;