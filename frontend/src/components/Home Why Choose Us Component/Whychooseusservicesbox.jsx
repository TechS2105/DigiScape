import React from 'react';
import HomeWhyChooseUsServices from '../Home Why Choose Us Component/Whychooseusservices';
import { MdOutlineAreaChart } from "react-icons/md";
import { GoWorkflow } from "react-icons/go";
import { GiImpactPoint } from "react-icons/gi";
import { PiLightbulbLight } from "react-icons/pi";

function Whychooseusservicesbox({WhyChooseUsStyle}) {
    
    return (

        <>
        
            {/** Services Box */}
            <HomeWhyChooseUsServices
                            
                WhyChooseUsStyle={WhyChooseUsStyle}
                svg={<MdOutlineAreaChart/>}
                title="Digital Strategy That Drives Growth"
                para="DigiScape builds focused digital strategies that help brands stand out, attract the right audience, and scale wconfidence."
                                
            />

            <HomeWhyChooseUsServices
                            
                WhyChooseUsStyle={WhyChooseUsStyle}
                svg={<GoWorkflow />}
                title="Transparent Workflow You Can Trust"
                para="Every project follows a clear and organized process, backed by open communication, fair pricing, and reliable suppfrom start to finish."
                                
            />

            <HomeWhyChooseUsServices
                            
                WhyChooseUsStyle={WhyChooseUsStyle}
                svg={<PiLightbulbLight />}
                title="Solutions Tailored to Your Brand"
                para="From branding to performance campaigns, each service is shaped around your goals to deliver meaningful and measuraresults."
                                
            />

            <HomeWhyChooseUsServices
                            
                WhyChooseUsStyle={WhyChooseUsStyle}
                svg={<GiImpactPoint />}
                title="Quality Execution with Real Impact"
                para="Our team prioritizes precision, creativity, and consistency, ensuring every project delivers strong outcomes lasting value for your business."
                                
            />
            
        </>

    );

}

export default Whychooseusservicesbox;