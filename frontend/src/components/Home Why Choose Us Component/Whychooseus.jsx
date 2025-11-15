import React, {useEffect} from 'react';
import WhyChooseUsStyle from '../../../public/styles/home why choose us files/whychooseus.module.css';
import HomeWhyChooseUsServicesBox from '../Home Why Choose Us Component/Whychooseusservicesbox';
import WhyChooseUsImage from '../Home Why Choose Us Component/Whychooseusimagecontainer';
import HomeWhyChooseUsImageTextSpinner from '../Home Why Choose Us Component/Whychooseusimagetextspinner';
import HomeWhyChooseUsContent from '../Home Why Choose Us Component/Whychooseuscontent';

function Whychooseus() {

    useEffect(() => {

        let text = document.querySelector(`.${WhyChooseUsStyle.textSpinnerText} p`);
        console.log(text);
        
        text.innerHTML = text.innerText.split("").map((char, i) => {

            return (
                
                `<span style="transform: rotate(${i * 7.5}deg)">${char}</span>`

            )


        }).join("");

    }, []);
    
    return (

        <>
        
            {/** Why Choose Us Main Section */}
            <div className={WhyChooseUsStyle.whyChooseUsMainDiv}>

                {/** Image Div */}
                <div className={WhyChooseUsStyle.whyChooseUsImageDiv}>

                    <WhyChooseUsImage
                    
                        WhyChooseUsStyle={WhyChooseUsStyle}
                        
                    />

                    {/** Text Spinner */}
                    <div className={WhyChooseUsStyle.textSpinner}>

                        {/** Logo & Text Spinner*/}
                        <HomeWhyChooseUsImageTextSpinner
                        
                            WhyChooseUsStyle={WhyChooseUsStyle}
                            spanText="DS"
                            spinnerText="Digital * Creative * Agency *"
                            
                        />

                    </div>

                </div>

                {/** Content Div */}
                <div className={WhyChooseUsStyle.whyChooseUsContentDiv}>

                    {/** Inner Content Div */}
                    <div className={WhyChooseUsStyle.whyChooseUsInnerContentDiv}>

                        {/** Title & Subtitle Div */}
                        <HomeWhyChooseUsContent
                        
                            WhyChooseUsStyle={WhyChooseUsStyle}
                            spanTitle="Why Choose Us for Quality Services"
                            subHeadingTitle="Why You Should Choose Our Agency for Trusted Services"
                            
                        />

                        {/** Why Choose Us Services */}
                        <div className={WhyChooseUsStyle.whyChooseUsServices}>

                            {/** Services Box */}
                            <HomeWhyChooseUsServicesBox
                            
                                WhyChooseUsStyle={WhyChooseUsStyle}
                                
                            />

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Whychooseus;