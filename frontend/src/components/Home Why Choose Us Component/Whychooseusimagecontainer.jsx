import React from 'react';
import WhyChooseUsImage from '../Home Why Choose Us Component/Whychooseusimage';

let image1 = "/images/Home Why Choose Us Image/home_why_chooseus_image1.png";
let image2 = "/images/Home Why Choose Us Image/home_why_chooseus_image2.jpg";
let image3 = "/images/Home Why Choose Us Image/home_why_chooseus_image3.png";

function Whychooseusimage({WhyChooseUsStyle}) {
    
    return (

        <>
        
            {/** Inner Image Div */}
            <div className={WhyChooseUsStyle.innerImageDiv}>
            
                {/** Image1 Div */}
                <div className={WhyChooseUsStyle.firstImageDiv}>

                    <WhyChooseUsImage
                    
                        image={image1}
                        altText="Why choose us first image"
                    
                    />

                </div>
                {/** Image2 Div */}
                <div className={WhyChooseUsStyle.secondImageDiv}>

                    <WhyChooseUsImage

                        image={image2}
                        altText="Why choose us second image"

                    />

                </div>
                {/** Image3 Div */}
                <div className={WhyChooseUsStyle.thirdImageDiv}>

                    <WhyChooseUsImage
                    
                        image={image3}
                        altText="Why choose us third image"

                    />

                </div>
                                
            </div>
            
        </>

    );

}

export default Whychooseusimage;