import React from 'react';
import WhyChooseUsImage from '../Home Why Choose Us Component/Whychooseusimage';

let image1 = "https://images.unsplash.com/photo-1666698809123-44e998e93f23?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image2 = "https://images.unsplash.com/photo-1647371349667-72a6c995784d?q=80&w=1071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
let image3 = "https://images.unsplash.com/photo-1758873268528-af4613d099b6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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