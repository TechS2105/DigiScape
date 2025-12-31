import React from 'react';
import PortfolioPageEnquiryForm from '../Portfolio Page Enquary Form Section/Portfoliopageenquiryform'; 

function Portfoliopageenquiryformsection({PortfolioPageStyle, configureEnquaryFormSectionStyle, configureEnquiryFormStyle}) {
    
    return (

        <>
        
            {/** Portfolio Page Enquiry Form Section */}
             <div className={PortfolioPageStyle.enquaryFormSectionMainFormDiv} style={configureEnquaryFormSectionStyle}>
            
                <PortfolioPageEnquiryForm
                
                    PortfolioPageStyle={PortfolioPageStyle}
                    configureEnquiryFormStyle={configureEnquiryFormStyle}
                    
                />
            
            </div>
            
        </>

    );

}

export default Portfoliopageenquiryformsection;