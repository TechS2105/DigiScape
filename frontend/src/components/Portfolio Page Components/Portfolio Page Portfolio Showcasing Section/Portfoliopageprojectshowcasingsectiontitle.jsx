import React from 'react';

function Portfoliopageprojectshowcasingsectiontitle({PortfolioPageStyle, mainSpanTitle, firstSpanTitle, secondSpanTitle, thirdSpanTitle, fourthSpanTitle}) {
    
    return (

        <>
        
            {/** Titles */}
            <div className={PortfolioPageStyle.portfolioShowcasingInnerTitleSection}>

                <span>{mainSpanTitle}</span>
                <h2>
                            
                    <div className={PortfolioPageStyle.title1}>

                        <span>{firstSpanTitle}</span>

                    </div>
                    <div className={PortfolioPageStyle.title2}>

                        <span>{secondSpanTitle}</span>

                    </div>
                    <div className={PortfolioPageStyle.title3}>

                        <span>{thirdSpanTitle}</span>

                    </div>
                    <div className={PortfolioPageStyle.title4}>

                        <span>{fourthSpanTitle}</span>

                    </div>
                        
                </h2>

            </div>
            
        </>

    );

}

export default Portfoliopageprojectshowcasingsectiontitle;