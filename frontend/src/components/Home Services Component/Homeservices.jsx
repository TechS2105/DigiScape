import React from 'react';
import HomeServicesStyle from '../../../public/styles/home services section files/Homeservices.module.css'; 
import HomeServicesContent from '../Home Services Component/Homeservicescontent';
import HomeServicesMainContent from '../Home Services Component/Homeservicesmaincontent';

function Homeservices() {
    
    return (

        <>
        
            {/** Home Services Section */}
            <div className={HomeServicesStyle.servicesSectionDiv}>

                {/** Home Services Contnet Section */}
                <div className={HomeServicesStyle.servicesUpperContentDiv}>
                
                    {/** Home Services Contnet Text Section */}
                    <div className={HomeServicesStyle.servicesContentTextDiv}>

                        <HomeServicesContent
                        
                            spanText="Our Serivices"
                            heading="Empower Your Business With Innovative Digital Services"
                            paragraph="Empower your business with innovative digital services designed to boost visibility, engage audiences, and achieve measurable results. From creative strategies to cutting-edge solutions, we help you grow and succeed in today’s digital landscape."
                            
                        />

                    </div>
                    
                </div>

                {/** Home Services Main Content Text Section */}
                <div className={HomeServicesStyle.servicesMainContentSectionDiv}>

                    <HomeServicesMainContent
                    
                        HomeServicesStyle={HomeServicesStyle}
                    
                    />
                        
                </div>

            </div>
            
        </>

    );

}

export default Homeservices;