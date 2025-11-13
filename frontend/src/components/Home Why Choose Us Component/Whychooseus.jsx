import React, {useEffect} from 'react';
import WhyChooseUsStyle from '../../../public/styles/home why choose us files/whychooseus.module.css';

function Whychooseus() {

    useEffect(() => {

        let text = document.querySelector(`.${WhyChooseUsStyle.textSpinnerText} p`);
        console.log(text);
        
        text.innerHTML = text.innerText.split("").map((char, i) => {

            return (
                
                `<span style="transform: rotate(${i * 7.5}deg)">${char}</span>`

            )


        }).join("");

    }, [])
    
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

                            {/** Text */}
                            <div className={WhyChooseUsStyle.textSpinnerText}>

                                <p> Digital * Creative * Agency * </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/** Content Div */}
                <div className={WhyChooseUsStyle.whyChooseUsContentDiv}>

                    {/** Inner Content Div */}
                    <div className={WhyChooseUsStyle.whyChooseUsInnerContentDiv}>

                        {/** Title & Subtitle Div */}
                        <div className={WhyChooseUsStyle.titleSubtitleDiv}>

                            <span> Why Choose Us for Quality Services </span>
                            <h2> Why You Should Choose Our Agency for Trusted Services </h2>

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Whychooseus;