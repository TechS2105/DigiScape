import React from 'react';
import WhyChooseUsStyle from '../../../public/styles/home why choose us files/whychooseus.module.css';

function Whychooseus() {
    
    return (

        <>
        
            {/** Why Choose Us Main Section */}
            <div className={WhyChooseUsStyle.whyChooseUsMainDiv}>

                {/** Image Div */}
                <div className={WhyChooseUsStyle.whyChooseUsImageDiv}>

                    {/** Inner Image Div */}
                    <div className={WhyChooseUsStyle.innerImageDiv}>

                        {/** Image1 Div */}
                        <div className={WhyChooseUsStyle.firstImageDiv}></div>
                        {/** Image2 Div */}
                        <div className={WhyChooseUsStyle.secondImageDiv}></div>
                        {/** Image3 Div */}
                        <div className={WhyChooseUsStyle.thirdImageDiv}></div>
                    
                    </div>

                    {/** Text Spinner */}
                    <div className={WhyChooseUsStyle.textSpinner}>

                        {/** Logo */}
                        <div className={WhyChooseUsStyle.textSpinnerLogo}>

                            <span> DS </span>

                        </div>

                    </div>

                </div>

                {/** Content Div */}
                <div className={WhyChooseUsStyle.whyChooseUsContentDiv}>

                    

                </div>

            </div>
            
        </>

    );

}

export default Whychooseus;