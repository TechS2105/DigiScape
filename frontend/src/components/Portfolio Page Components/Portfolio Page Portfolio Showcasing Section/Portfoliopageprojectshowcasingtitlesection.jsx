import React from 'react';
import PortfolioPageProjectShowcasingSectionTitle from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingsectiontitle';

function Portfoliopageprojectshowcasingtitlesection({PortfolioPageStyle}) {
    
    return (

        <>
        
            {/** Title Section */}
            <div className={PortfolioPageStyle.portfolioPageShowcasingMainTitleSection}>

                {/** Portfolio Showcasing Title Section */}
                <div className={PortfolioPageStyle.portfolioPageShowcasingTitleSection}>

                    {/** Inner Title Section */}
                    <PortfolioPageProjectShowcasingSectionTitle
                    
                        PortfolioPageStyle={PortfolioPageStyle}
                        mainSpanTitle="Portfolio Insights"
                        firstSpanTitle="High Value"
                        secondSpanTitle="Digital Solutions"
                        thirdSpanTitle="For Scalable"
                        fourthSpanTitle="Growth"
                        
                    />

                </div>
                
            </div>
            
        </>

    );

}

export default Portfoliopageprojectshowcasingtitlesection;