import React from 'react';
import PortfolioPageProjectShowcasingProjectSectionAllProjectsLinkSection from '../Portfolio Page Portfolio Showcasing Section/Portfoliopageprojectshowcasingsectionprojectlinkslistitems';

function Portfoliopageprojectshowcasingsectionallprojectlinksection({PortfolioPageStyle, items}) {
    
    return (

        <>
        
            {/** Project Link Section */}
            <div className={PortfolioPageStyle.portfolioLiveDemoDiv}>

                {/** Live Demo Inner Div */}
                <div className={PortfolioPageStyle.portfolioInnerLiveDiv}>

                    <a href={items.pURL} target='_blank'>

                        {/** Link List Items */}
                        <PortfolioPageProjectShowcasingProjectSectionAllProjectsLinkSection
                        
                            items={items}
                            
                        />

                        {/** Link List Items */}
                        <PortfolioPageProjectShowcasingProjectSectionAllProjectsLinkSection
                        
                            items={items}
                            
                        />

                        {/** Link List Items */}
                        <PortfolioPageProjectShowcasingProjectSectionAllProjectsLinkSection
                        
                            items={items}
                            
                        />

                        {/** Link List Items */}
                        <PortfolioPageProjectShowcasingProjectSectionAllProjectsLinkSection
                        
                            items={items}
                            
                        />

                    </a>

                </div>

            </div>
            
        </>

    );

}

export default Portfoliopageprojectshowcasingsectionallprojectlinksection;