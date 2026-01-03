import React from 'react';
import OurApproachCardBoxSVGIconSection from '../Service Page Our Approach Section/Ourapproachcardboxsvgiconsection';
import OurApproachCardBoxContentSection from '../Service Page Our Approach Section/Ourapproachcardboxcontentsection';

function Ourapproachcardbox({ServicePageStyle, cardItem, idx}) {
    
    return (

        <>
        
            {/** Our Approach Card Box */}
            <div className={ServicePageStyle.ourApproachCardBox} key={idx}>

                {/** SVG Icon Div */}
                <OurApproachCardBoxSVGIconSection
                
                    ServicePageStyle={ServicePageStyle}
                    cardItem={cardItem}
                    
                />

                {/** Content Section Div */}
                <OurApproachCardBoxContentSection
                
                    ServicePageStyle={ServicePageStyle}
                    cardItem={cardItem}
                    
                />

            </div>
            
        </>

    );

}

export default Ourapproachcardbox;