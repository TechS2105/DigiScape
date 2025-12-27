import React from 'react';
import PortfolioPageTitleSection from '../Portfolio Page Title Section/Portfoliopagetitlesection';
import PortfolioPageBannerSection from '../Portfolio Page Banner Section/Portfoliopagebannersection';

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
            
        </>

    );

}

export default Portfoliopagemainsection;