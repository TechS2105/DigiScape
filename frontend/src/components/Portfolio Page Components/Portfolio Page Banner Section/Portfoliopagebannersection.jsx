import React from 'react';

const portfolioBannerImage1 = '/images/Portfolio Page Images/portfolio_page_banner_image1.png';
const portfolioBannerImage2 = '/images/Portfolio Page Images/portfolio_page_banner_image2.png';
const portfolioBannerImage3 = '/images/Portfolio Page Images/portfolio_page_banner_image3.png';
const portfolioBannerImage4 = '/images/Portfolio Page Images/portfolio_page_banner_image4.png';

function Portfoliopagebannersection({PortfolioPageStyle}) {
    
    return (

        <>
        
            {/** Porfolio Page Banner Section */}
            <div className={PortfolioPageStyle.portfolioBannerSection}>

               {/** Portfolio Page Banner Image Section */}
                <div className={PortfolioPageStyle.portfolioBannerImageSection}>
                    
                    {/** Portfilio Page Banner Scroller Image Section */}
                    <div className={PortfolioPageStyle.portfolioBannerScrollerImageSection}>
                        
                        <ul>

                            <li><img src={portfolioBannerImage1} alt="" /></li>
                            <li><img src={portfolioBannerImage2} alt="" /></li>
                            <li><img src={portfolioBannerImage3} alt="" /></li>
                            <li><img src={portfolioBannerImage4} alt="" /></li>

                        </ul>

                        <ul>

                            <li><img src={portfolioBannerImage1} alt="" /></li>
                            <li><img src={portfolioBannerImage2} alt="" /></li>
                            <li><img src={portfolioBannerImage3} alt="" /></li>
                            <li><img src={portfolioBannerImage4} alt="" /></li>

                        </ul>

                         <ul>

                            <li><img src={portfolioBannerImage1} alt="" /></li>
                            <li><img src={portfolioBannerImage2} alt="" /></li>
                            <li><img src={portfolioBannerImage3} alt="" /></li>
                            <li><img src={portfolioBannerImage4} alt="" /></li>

                        </ul>
                        
                         <ul>

                            <li><img src={portfolioBannerImage1} alt="" /></li>
                            <li><img src={portfolioBannerImage2} alt="" /></li>
                            <li><img src={portfolioBannerImage3} alt="" /></li>
                            <li><img src={portfolioBannerImage4} alt="" /></li>

                        </ul>

                    </div>

                </div>
                
                {/** Portfolio Page Banner Image Overlay Description Div */}
                <div className={PortfolioPageStyle.portfolioBannerOverlayDiv}>

                    <h2>How We Deliver Impact</h2>
                    <p>At DigiScape, we don’t treat projects as one time deliverables. Each engagement begins with understanding the client’s business, audience, and success metrics. Our portfolio reflects work that combines strategy, design, technology, and marketing into cohesive digital solutions that perform consistently over time.</p>

                </div>
                
            </div>
            
        </>

    );

}

export default Portfoliopagebannersection;