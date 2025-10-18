import React from 'react';
import HomePortfolioStyle from '../../../public/styles/home portfolio section files/homeportfoliosectionstyle.module.css';
import HomePortfolioHeader from '../../components/Home Portfolio Component/Homeportfolioheader';

function Homeportfolio() {
    
    return (

        <>
        
            {/** Home Portoflio Div Main Container */}
            <div className={HomePortfolioStyle.homePortfolioMainContainer}>

                {/** Hoem Portfolio Div Header Container */}
                <div className={HomePortfolioStyle.homePortofolioHeaderContainer}>

                    <HomePortfolioHeader
                    
                        spanText="Our Creative Portfolio"
                        title="Showcasing Innovation, Design, and Digital Excellence"
                        para="Explore DigiScape’s portfolio featuring impactful web designs, branding, and digital marketing projects that drive engagement, enhance visibility, and deliver measurable results for businesses across industries."
                        
                    />

                </div>

                {/** Home Portfolio Work Carousel Section */}
                <div className={HomePortfolioStyle.homePortfolioWorkContainer}>


                        {/** Home Portfolio Work Inner Div */}
                      
                        <div className={HomePortfolioStyle.homePortfolioWorkInnerDiv}>
                                
                            <h3> North Calcutta Paints Private Limited </h3>

                            <img src="../../../public/images/Home Portfolio Images/Guitarish.png" alt="" />


                        </div>

                </div>

            </div>
            
        </>

    );

}

export default Homeportfolio;