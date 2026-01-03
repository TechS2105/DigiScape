import React from 'react';
import OurApproachCardBoxSVGIcon from '../Service Page Our Approach Section/Ourapproachcardboxsvgicon';

function Ourapproachcardboxsvgiconsection({ServicePageStyle, cardItem}) {
    
    return (

        <>

            {/** SVG Icon Section */}
            <div className={ServicePageStyle.cardBoxSVGIcon}>

                {/** SVG Icon Inner Div */}
                <div className={ServicePageStyle.svgIconInnerDiv}>

                    <OurApproachCardBoxSVGIcon
                    
                        cardItem={cardItem}
                        
                    />

                </div>

            </div>
        
        </>

    );

}

export default Ourapproachcardboxsvgiconsection;