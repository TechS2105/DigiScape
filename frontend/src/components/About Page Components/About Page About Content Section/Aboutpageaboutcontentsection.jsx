import React from 'react';
import { FaRegHandPointRight } from "react-icons/fa";

function Aboutpageaboutcontentsection({AboutSectionStyle}) {

    return (

        <>
        
            {/** About Page About Content Section */}
            <div className={AboutSectionStyle.aboutPageAboutContentDiv}>

                {/** About Page About Inner Content */}
                <div className={AboutSectionStyle.aboutPageAboutInnerContent}>

                    {/** Content Section */}
                    <div className={AboutSectionStyle.aboutContentSection}>

                        <span>Who We Are</span>
                        <h2>Driving Digital Growth With Strategy, Creativity, and Measurable Results</h2>
                        <p>DigiScape is a results driven digital marketing agency helping brands grow with clarity and confidence in an ever changing digital space. We bring together strategic planning, creative execution, and data led insights to build digital solutions that attract the right audience and convert attention into real business growth. Our work is grounded in transparency, collaboration, and measurable outcomes, ensuring every effort supports long term success rather than short-term wins.</p>

                    </div>

                    {/** Content List Section */}
                    <div className={AboutSectionStyle.aboutContentList}>

                        <h3> What Defines Us: </h3>

                        <ul>

                            <li><FaRegHandPointRight />Strategy first digital marketing aligned with clear business goals.</li>
                            <li><FaRegHandPointRight />SEO, paid advertising, and content driven by performance data.</li>
                            <li><FaRegHandPointRight />Conversion focused websites built for speed and usability.</li>
                            <li><FaRegHandPointRight />Transparent communication with clear reporting and insights.</li>
                            <li><FaRegHandPointRight />Long term partnerships focused on sustainable growth.</li>

                        </ul>
                        
                    </div>
                    

                </div>
                
            </div>
            
        </>

    );
    
}

export default Aboutpageaboutcontentsection;