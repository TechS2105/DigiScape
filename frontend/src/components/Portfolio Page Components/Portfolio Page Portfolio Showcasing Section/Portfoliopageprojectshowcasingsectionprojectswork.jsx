import React from 'react';
import PortfolioPageProjectShowcasingSectionProjectsWorks from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingsectionprojectworkimages';
import PortfolioPageProjectShowcasingSectionProjectsLinkSection from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingsectionallprojectslinksection';

function Portfoliopageprojectshowcasingsectionprojectwork({PortfolioPageStyle, portfolio}) {
    
    return (

        <>
        
            {/** Project Works */}
            {portfolio.map((items, idx) => {

                return (

                    <div className={PortfolioPageStyle.portfolioWorkDiv} key={idx}>

                        {/** Portfoli Image Div */}
                        <PortfolioPageProjectShowcasingSectionProjectsWorks
                        
                            PortfolioPageStyle={PortfolioPageStyle}
                            items={items}
                            
                        />

                        {/** Live Demo Div */}
                        <PortfolioPageProjectShowcasingSectionProjectsLinkSection
                        
                            PortfolioPageStyle={PortfolioPageStyle}
                            items={items}
                            
                        />

                    </div> 

                );

            })}
            
        </>

    );

}

export default Portfoliopageprojectshowcasingsectionprojectwork;