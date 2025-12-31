import React from 'react';
import PortfolioPageTitleSection from '../Portfolio Page Title Section/Portfoliopagetitlesection';
import PortfolioPageBannerSection from '../Portfolio Page Banner Section/Portfoliopagebannersection';
import PortfolioPagePortfolioShowCasingSection from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingsection';
import PortfolioPageEnquaryFormSection from '../Portfolio Page Enquary Form Section/Portfoliopageenquaryformmainsection';

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

            {/** Portfolio Enquary Form Section */}
            <PortfolioPageEnquaryFormSection
            
                PortfolioPageStyle={PortfolioPageStyle}
                
            />
            
        </>

    );

}

export default Portfoliopagemainsection;