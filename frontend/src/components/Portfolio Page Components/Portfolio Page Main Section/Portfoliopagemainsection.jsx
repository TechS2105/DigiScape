import React from 'react';
import PortfolioPageTitleSection from '../Portfolio Page Title Section/Portfoliopagetitlesection';
import PortfolioPageBannerSection from '../Portfolio Page Banner Section/Portfoliopagebannersection';
import PortfolioPagePortfolioShowCasingSection from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingsection';

function Portfoliopagemainsection({ PortfolioPageStyle }) {
    
    return (

        <>
        
            {/** Title Section */}
            <PortfolioPageTitleSection
            
                PortfolioPageStyle={PortfolioPageStyle}
                
            />

            {/** Banner Section */}
            <PortfolioPageBannerSection
            
                PortfolioPageStyle={PortfolioPageStyle}
                
            />

            {/** Portfolio Showcasing Section */}
            <PortfolioPagePortfolioShowCasingSection
            
                PortfolioPageStyle={PortfolioPageStyle}
                
            />
            
        </>

    );

}

export default Portfoliopagemainsection;