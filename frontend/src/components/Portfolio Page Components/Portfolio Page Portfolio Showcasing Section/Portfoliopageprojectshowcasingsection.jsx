import React from 'react';

function Portfoliopageprojectshowcasingsection({ PortfolioPageStyle }) {
    
    return (

        <>
        
            {/** Portfolio Page Showcasing Title Section */}
            <div className={PortfolioPageStyle.portfolioPageShowcasingMainTitleSection}>

                {/** Portfolio Showcasing Title Section */}
                <div className={PortfolioPageStyle.portfolioPageShowcasingTitleSection}>

                    {/** Inner Title Section */}
                    <div className={PortfolioPageStyle.portfolioShowcasingInnerTitleSection}>

                        <span>Portfolio Insights</span>
                        <h2>
                            
                            <div className={PortfolioPageStyle.title1}>

                                <span>High Value</span>

                            </div>
                            <div className={PortfolioPageStyle.title2}>

                                <span>Digital Solutions</span>

                            </div>
                            <div className={PortfolioPageStyle.title3}>

                                <span>for Scalable</span>

                            </div>
                            <div className={PortfolioPageStyle.title4}>

                                <span>Growth</span>

                            </div>
                        
                        </h2>

                    </div>

                </div>
                
            </div>

            {/** Portfolio Showcasing Section */}
            <div className={PortfolioPageStyle.portfolioPageShowCasingSection}>

                {/** Portfolio Showcasing Inner Section */}
                <div className={PortfolioPageStyle.portfolioPageInnerShowCasingSection}>

                    {/** First Portfolio Div */}
                    <div className={PortfolioPageStyle.portfolioWorkDiv}>

                        {/** Portfoli Image Div */}
                        <div className={PortfolioPageStyle.portfolioImage}>

                            <img src="../../../../public/images/Portfolio Page Images/ncpl_image.png" alt="" />

                        </div>

                        {/** Live Demo Div */}
                        <div className={PortfolioPageStyle.portfolioLiveDemoDiv}>

                            

                        </div>

                    </div>

                    {/** First Portfolio Div */}
                    <div className={PortfolioPageStyle.portfolioWorkDiv}>

                        {/** Portfoli Image Div */}
                        <div className={PortfolioPageStyle.portfolioImage}>

                            <img src="../../../../public/images/Portfolio Page Images/guitarist_image.png" alt="" />

                        </div>

                        {/** Live Demo Div */}
                        <div className={PortfolioPageStyle.portfolioLiveDemoDiv}>

                            

                        </div>

                    </div>

                    {/** First Portfolio Div */}
                    <div className={PortfolioPageStyle.portfolioWorkDiv}>

                        {/** Portfoli Image Div */}
                        <div className={PortfolioPageStyle.portfolioImage}>

                            <img src="../../../../public/images/Portfolio Page Images/nexusdigital_image.png" alt="" />

                        </div>

                        {/** Live Demo Div */}
                        <div className={PortfolioPageStyle.portfolioLiveDemoDiv}>

                            

                        </div>

                    </div>

                    {/** First Portfolio Div */}
                    <div className={PortfolioPageStyle.portfolioWorkDiv}>

                        {/** Portfoli Image Div */}
                        <div className={PortfolioPageStyle.portfolioImage}>

                            <img src="../../../../public/images/Portfolio Page Images/wanderX_image.png" alt="" />

                        </div>

                        {/** Live Demo Div */}
                        <div className={PortfolioPageStyle.portfolioLiveDemoDiv}>

                            

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Portfoliopageprojectshowcasingsection;