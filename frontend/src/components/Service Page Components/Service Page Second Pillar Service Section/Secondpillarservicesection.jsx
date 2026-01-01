import React from 'react';

function Secondpillarservicesection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Second Pillar Service Section */}
            <div className={ServicePageStyle.secondServicePillarSection}>

                {/** Second Pillar Service Image Section */}
                <div className={ServicePageStyle.secondServicePillarImageSection}>

                    <img src="/images/Service Page Images/pillar_service_image2.png" alt="" />

                </div>

                {/** Second Pillar Service Content Section */}
                <div className={ServicePageStyle.secondServicePillarContentSection}>

                    {/** Second Pillar Service Inner Content Section */}
                    <div className={ServicePageStyle.secondPillarServiceInnerContentSection}>

                        <span>{"{ SERVICE PILLAR 2 }"}</span>
                        <h3>{"< Specialised Digital Growth Services >"}</h3>
                        <h2>Advanced Growth Solutions Designed to Scale Performance</h2>
                        <p>These services support businesses looking to refine performance, improve efficiency, and gain deeper insight into digital outcomes. We focus on optimization, automation, and strategic clarity.</p>

                        <ul>

                            <h4>Included Services</h4>
                            
                            <li>Conversion Rate Optimization (CRO)</li>
                            <li>Analytics & Performance Tracking</li>
                            <li>Marketing Automation & CRM Integration</li>
                            <li>Brand Strategy & Digital Positioning</li>
                            <li>Market & Competitor Research</li>

                        </ul>

                        <button>Explore Growth Services</button>

                    </div>

                </div>

            </div>

        </>

    );

}

export default Secondpillarservicesection;