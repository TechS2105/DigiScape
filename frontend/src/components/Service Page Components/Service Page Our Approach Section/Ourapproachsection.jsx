import React from 'react';

function Ourapproachsection({ServicePageStyle}) {
    
    return (

        <>
        
            {/** Our Approach Section */}
            <div className={ServicePageStyle.servicePageOurApproachSection}>

                {/** Our Approach Title Section */}
                <div className={ServicePageStyle.servicePageOurApproachTitleSection}>

                    <span>Our Approach</span>
                    <h2>An Integrated Strategy Across Marketing, Growth, and Technology</h2>
                    <p>We take a coordinated approach to digital execution, bringing marketing, growth, and technology together under a single strategic framework. By eliminating silos, our teams work collaboratively to ensure every initiative is aligned, efficient, and focused on measurable business outcomes.</p>

                </div>

                {/** Our Approach Card Boxes Section */}
                <div className={ServicePageStyle.ourApproachCardBoxesSection}>

                    {/** Card Box */}
                    <div className={ServicePageStyle.ourApproachCardBox}>

                        {/** SVG Icon Div */}
                        <div className={ServicePageStyle.cardBoxSVGIcon}>

                            {/** SVG Icon Inner Div */}
                            <div className={ServicePageStyle.svgIconInnerDiv}>

                                <img src="../../../../public/images/Ourt Approach SVG Icons/our_approach_SVG1.png" alt="" />

                            </div>


                        </div>

                        {/** Content Section Div */}
                        <div className={ServicePageStyle.cardBoxContentDiv}>

                            <h4>Business Discovery & Alignment</h4>
                            <p>We begin by understanding your business model, market context, and growth objectives to ensure complete strategic alignment.</p>

                        </div>

                    </div>
                    
                </div>

            </div>
            
        </>

    );

}

export default Ourapproachsection;