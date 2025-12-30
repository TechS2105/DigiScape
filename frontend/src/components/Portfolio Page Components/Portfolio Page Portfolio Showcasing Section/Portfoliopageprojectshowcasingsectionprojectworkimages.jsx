import React from 'react';

function Portfoliopageprojectshowcasingsectionprojectworkimages({PortfolioPageStyle, items}) {
    
    return (

        <>
        
            {/** Project Work Images */}
            <div className={PortfolioPageStyle.portfolioImage}>

                <img src={items.pImage} alt={items.pAltText} />

            </div>
            
        </>

    );

}

export default Portfoliopageprojectshowcasingsectionprojectworkimages;