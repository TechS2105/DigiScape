import React from 'react';
import PortfolioPageMainSection from '../components/Portfolio Page Components/Portfolio Page Main Section/Portfoliopagemainsection';
import PortfolioPageStyle from '../../public/styles/portfolio page styles files/Portfoliopage.module.css';

function Portfolio() {
    
    return (

        <>
        
            {/** Portfolio Page Main Section */}
            <main>

                {/** Inner Main Section */}
                <PortfolioPageMainSection
                
                    PortfolioPageStyle={PortfolioPageStyle}
                    
                />

            </main>
            
        </>

    );

}

export default Portfolio;