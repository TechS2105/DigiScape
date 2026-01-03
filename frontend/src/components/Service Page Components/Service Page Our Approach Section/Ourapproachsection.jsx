import React, {useEffect, useState} from 'react';

function Ourapproachsection({ServicePageStyle}) {
    
    const [ourApproachCardContnet, setOurApproachCardContent] = useState([]);

    useEffect(() => { 

        async function ourApproachCardContent() {
            
            try {
                
                const response = await fetch('http://localhost:3000/api/servicepage/ourapproach/card');

                if (!response.ok) {
                    
                    throw new Error(`!HTTP Server Response Status Is ${response.status}`);

                }

                let data = await response.json();
                setOurApproachCardContent(data);

            } catch (error) {
                
                console.log(error);

            }
            
        }

        ourApproachCardContent();

    }, []);

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
                    {ourApproachCardContnet.map((cardItem, idx) => {

                        return (

                            <div className={ServicePageStyle.ourApproachCardBox} key={idx}>

                                {/** SVG Icon Div */}
                                <div className={ServicePageStyle.cardBoxSVGIcon}>

                                    {/** SVG Icon Inner Div */}
                                    <div className={ServicePageStyle.svgIconInnerDiv}>

                                        <img src={cardItem.approachSVGImage} alt={cardItem.approachSVGImageAltText} />

                                    </div>


                                </div>

                                {/** Content Section Div */}
                                <div className={ServicePageStyle.cardBoxContentDiv}>

                                    <h4>{cardItem.approachTitle}</h4>
                                    <p>{cardItem.approachPara}</p>

                                </div>

                            </div>

                        );

                    })}
                    
                    
                </div>

            </div>
            
        </>

    );

}

export default Ourapproachsection;