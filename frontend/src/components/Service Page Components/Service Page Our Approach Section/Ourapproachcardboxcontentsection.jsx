import React from 'react';
import OurApproachCardBoxContent from '../Service Page Our Approach Section/Ourapproachcardboxcontent';

function Ourapproachcardboxcontentsection({ServicePageStyle, cardItem}) {
    
    return (

        <>
        
            {/** Our Approach Card Box Content Section */}
            <div className={ServicePageStyle.cardBoxContentDiv}>

                <OurApproachCardBoxContent
                
                    cardItem={cardItem}
                    
                />

            </div>
            
        </>

    );

}

export default Ourapproachcardboxcontentsection;