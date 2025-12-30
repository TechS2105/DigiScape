import React from 'react';
import PortfolioPageProjectShowcasingSectionTitleSection from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingtitlesection'
import PortfolioPageProjectShowcasingProjectSection from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingprojectsection';

function Portfoliopageprojectshowcasingsection({ PortfolioPageStyle }) {

    return (

        <>
        
            {/** Portfolio Page Showcasing Title Section */}
            <PortfolioPageProjectShowcasingSectionTitleSection
            
                PortfolioPageStyle={PortfolioPageStyle}
                
            />

            {/** Portfolio Showcasing Section */}
            <PortfolioPageProjectShowcasingProjectSection
            
                PortfolioPageStyle={PortfolioPageStyle}
                
            />
            
        </>

    );

}

export default Portfoliopageprojectshowcasingsection;