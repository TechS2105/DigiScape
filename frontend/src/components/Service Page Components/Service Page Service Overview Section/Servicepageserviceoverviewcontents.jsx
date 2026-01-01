import React from 'react';

function Servicepageserviceoverviewcontent({sOverviewSpanTitle, sOverviewHeading, sOverviewPara, sOverviewSVG}) {
    
    return (

        <>
        
            {/** Service Overview Content */}
            <span>{ sOverviewSpanTitle }{sOverviewSVG}</span>
            <h2>{sOverviewHeading}</h2>
            <p>{sOverviewPara}</p>

            
        </>

    );

}

export default Servicepageserviceoverviewcontent;