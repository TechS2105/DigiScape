import React from 'react';
import PortfolioPageTitleSectionTitle from '../Portfolio Page Title Section/Portfoliopagetitle';

function Portfoliopagetitlesection({PortfolioPageStyle}) {
    
    return (

        <>

            {/** Title Section */}
            <div className={PortfolioPageStyle.portfolioPageTitleSection}>

                {/** Title Inner Div */}
                <div className={PortfolioPageStyle.portfolioPageInnerTitleSection}>

                    <PortfolioPageTitleSectionTitle
                    
                        portfolioSpanTitle="Our Portfolio"
                        portfolioMainTitle="Digital Work Shaped by Business Vision"
                        
                    />

                </div>
                
            </div>
        
        </>

    );

}

export default Portfoliopagetitlesection;