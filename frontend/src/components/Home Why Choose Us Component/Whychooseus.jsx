import React, {useEffect} from 'react';
import WhyChooseUsStyle from '../../../public/styles/home why choose us files/whychooseus.module.css';
import { MdOutlineAreaChart } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { GiImpactPoint } from "react-icons/gi";
import { PiLightbulbLight } from "react-icons/pi";
import HomeWhyChooseUsServices from '../Home Why Choose Us Component/Whychooseusservices';

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

                        {/** Why Choose Us Services */}
                        <div className={WhyChooseUsStyle.whyChooseUsServices}>

                            {/** Services Box */}
                            <HomeWhyChooseUsServices
                            
                                WhyChooseUsStyle={WhyChooseUsStyle}
                                svg={<MdOutlineAreaChart/>}
                                title="Digital Strategy That Drives Growth"
                                para="DigiScape builds focused digital strategies that help brands stand out, attract the right audience, and scale with confidence."
                                
                            />

                            <HomeWhyChooseUsServices
                            
                                WhyChooseUsStyle={WhyChooseUsStyle}
                                svg={<GoWorkflow />}
                                title="Transparent Workflow You Can Trust"
                                para="Every project follows a clear and organized process, backed by open communication, fair pricing, and reliable support from start to finish."
                                
                            />

                            <HomeWhyChooseUsServices
                            
                                WhyChooseUsStyle={WhyChooseUsStyle}
                                svg={<PiLightbulbLight />}
                                title="Solutions Tailored to Your Brand"
                                para="From branding to performance campaigns, each service is shaped around your goals to deliver meaningful and measurable results."
                                
                            />

                            <HomeWhyChooseUsServices
                            
                                WhyChooseUsStyle={WhyChooseUsStyle}
                                svg={<GiImpactPoint />}
                                title="Quality Execution with Real Impact"
                                para="Our team prioritizes precision, creativity, and consistency, ensuring every project delivers strong outcomes and lasting value for your business."
                                
                            />

                        </div>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Whychooseus;