import React from 'react';

function Testimonialreviewswipercontents({TestimonialStyle, content, testimonialQuote, checkMarkAsAdmin}) {
    
    return (

        <>
        
            {/** Review Content Container */}
            <div className={TestimonialStyle.reviewContentContainer}>
            
                <p>{ testimonialQuote} {content.reviewText}</p>
            
                {/** Owner Name Section */}
                <div className={TestimonialStyle.ownerNameDiv}>
            
                    <span>{checkMarkAsAdmin} {content.reviewOwnerName}</span> * <span>{content.reviewOwnerDesignation}</span>
                                                                
                </div>
            
            </div>
            
        </>

    );

}

export default Testimonialreviewswipercontents;