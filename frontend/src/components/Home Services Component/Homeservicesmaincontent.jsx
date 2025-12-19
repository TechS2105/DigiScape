import React, {useRef, useEffect, useState} from 'react';
import HomeServiceInnerContent from '../Home Services Component/Homeserviceinnercontent';
import { MdCurrencyRupee } from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuCodeXml } from "react-icons/lu";
import HomeServiceInnerContentSection from '../Home Services Component/Homeserviceinnercontentsection';

let sImage1 = "/images/Home Service Images/home_service_image1.png";
let sImage2 = "/images/Home Service Images/home_service_image3.jpg";
let sImage3 = "/images/Home Service Images/home_service_image2.png";

function Homeservicesmaincontent({HomeServicesStyle}) {

    const firstServiceBoxRef = useRef();
    const secondServiceBoxRef = useRef();

    const [firstServiceBox, setFirstServiceBox] = useState();
    const [secondServiceBox, setSecondServiceBox] = useState();
    const [thirdServiceBox, setThirdServiceBox] = useState();

    const [firstServiceId, setFirstServiceId] = useState();
    const [firstServiceBoxIcon, setFirstServicBoxIcon] = useState();

    const [secondServiceId, setSecondServiceId] = useState();
    const [secondServiceBoxIcon, setSecondServiceBoxIcon] = useState();

    const [thirdServiceId, setThirdServiceId] = useState();
    const [thirdServiceBoxIcon, setThirdServiceBoxIcon] = useState();

    /** First List Box */
    function handleServiceBoxContent1() {

        /** First Service Box */
        setFirstServiceBox({

            height: "25rem",
            transition: "all 0.8s ease"
           
        });

        /** First Service Box Heading Id and Icon Style*/
        setFirstServiceId({

            opacity: "1",
            transition: "all 0.5s ease"

        });

        setFirstServicBoxIcon({

            color: "#ffffff",
            transition: "all 0.5s ease",
            backgroundColor: "royalblue",
            borderRadius: "50%",
            marginBottom: "10px",
            transform: "rotateY(360deg)"

        });

        /** Second Service Box Heading Id and Icon Style */
        setSecondServiceId({

            opacity: "0.3",
            transition: "all 0.5s ease"

        });

        setSecondServiceBoxIcon({

            color: "#292929",
            backgroundColor: "transparent",
            marginBottom: "0px",
            borderRadius: "0%",
            transition: "all 0.5s ease"

        });

        /** Third Service Box Heading Id and Icon Style */
        setThirdServiceId({

            opacity: "0.3",
            transition: "all 0.5s ease"

        });

        setThirdServiceBoxIcon({

            color: "#292929",
            borderRadius: "0%",
            marginBottom: "0px",
            backgroundColor: "transparent",
            transition: "all 0.5s ease"

        });

        /** Second Service Box */
        setSecondServiceBox({

            height: "0rem",
            transition: "all 0.8s ease"

        });

        /** Third Service Box */
        setThirdServiceBox({

            height: "0rem",
            transition: "all 0.8s ease"

        });


    }

    /** Second List Box */
    function handleServiceBoxContent2() {
        
        /** Second Service Box Style */
        setSecondServiceBox({
          
            height: "25rem",
            transition: "all 0.8s ease"

        });

        /** First Service Box Heading Id and Icon Style */
        setFirstServiceId({

            opacity: "0.3",
            transition: "all 0.5s ease"

        });

        setFirstServicBoxIcon({

            color: "#292929",
            backgroundColor: "transparent",
            borderRadius: "0%",
            transition: "all 0.5s ease",
            marginBottom: "0px"

        });

        /** Second Service Box Heading Id and Icon Style */
        setSecondServiceId({

            opacity: "1",
            transition: "all 0.5s ease"

        });

        setSecondServiceBoxIcon({

            color: "#ffffff",
            backgroundColor: "royalblue",
            borderRadius: "50%",
            transition: 'all 0.5s ease',
            marginBottom: "10px",
            transform: "rotateY(360deg)"

        });

        /** Third Service Box Heading Id and Icon Style */
        setThirdServiceId({

            opacity: "0.3",
            transition: "all 0.5s ease"

        });

        setThirdServiceBoxIcon({

            color: "#292929",
            backgroundColor: "transparent",
            borderRadius: "0%",
            marginBottom: "0px",
            transition: "all 0.5s ease"

        });

        /** First Service Box Style */
        setFirstServiceBox({

            height: "0rem",
            transition: "all 0.8s ease"

        });

        /** Third Service Box Style */
        setThirdServiceBox({

            height: "0rem",
            transition: "all 0.8s ease"

        });

    }

    /** Third List Box */
    function handleServiceBoxContent3() {
        
        /** Third Service Box */
        setThirdServiceBox({

            height: "25rem",
            transition: "all 0.8s ease"

        });

        /** Third Service Box Heading Id and Icon Style */
        setThirdServiceId({

            opacity: "1",
            transition: "all 0.5s ease"

        });

        setThirdServiceBoxIcon({

            color: "#ffffff",
            backgroundColor: "royalblue",
            borderRadius: "50%",
            marginBottom: "10px",
            transition: "all 0.5s ease",
            transform: "rotateY(360deg)"

        });

        /** Second Service Box Heading Id and Icon Style */
        setSecondServiceId({

            opacity: "0.3",
            transition: "all 0.5s ease"

        });

        setSecondServiceBoxIcon({

            color: "#292929",
            marginBottom: "0px",
            transition: "all 0.5s ease",
            borderRadius: "0%",

        });

        /** First Service Box Heading Id and Icon Style */
        setFirstServiceId({

            opacity: "0.3",
            transition: "all 0.5s ease"

        });

        setFirstServicBoxIcon({

            color: "#292929",
            backgroundColor: "transparent",
            marginBottom: "0px",
            transition: "all 0.5se ease",
            borderRadius: "0%",

        });

        /** Second Service Box */
        setSecondServiceBox({

            height: "0rem",
            transition: "all 0.8s ease"

        });

        /** First Service Box */
        setFirstServiceBox({

            height: "0rem",
            transition: "all 0.8s ease"

        })

    }


    useEffect(() => {

        firstServiceBoxRef.current.style.height = "0rem";
        secondServiceBoxRef.current.style.height = "0rem";


    }, []);
    
    return (

        <>
        
            {/** Home Services Inner Content Section */}
            <div className={HomeServicesStyle.HomeServicesInnerContentSection}>

                <ul>

                     
                    {/** Home Services First Inner Content List */}
                    <HomeServiceInnerContent
                    
                        HomeServicesStyle={HomeServicesStyle}
                        HomeListHeading="Digital Marketing Services"
                        ServiceId="{01}"
                        SVGIcon={<MdCurrencyRupee />}
                        handleBoxeHeightOnClick={() => handleServiceBoxContent1()}
                        serviceIdStyle={firstServiceId}
                        serviceBoxIcon={firstServiceBoxIcon}
                        
                    />

                    {/** Home Services First Inner List Content */}
                    <HomeServiceInnerContentSection
                    
                        HomeServicesStyle={HomeServicesStyle}
                        image={sImage1}
                        altText="Digital Marketing Services"
                        para="Boost your brand with DigiScape’s expert digital marketing services. We deliver SEO, social media, and content strategies that drive traffic, increase leads, and grow your business online."
                        list1="Search Engine Optimization"
                        list2="Branding & Creative Services"
                        list3="Analytics & Strategy"
                        list4="Content Marketing"
                        list5="Social Media Marketing & Management"
                        styleState={firstServiceBox}
                        
                    />

                    {/** Home Services Second Inner Content List */}
                    <HomeServiceInnerContent
                    
                        HomeServicesStyle={HomeServicesStyle}
                        HomeListHeading="Specialised Digital Growth Services"
                        ServiceId="{02}"
                        SVGIcon={<LuChartNoAxesCombined />}
                        handleBoxeHeightOnClick={() => handleServiceBoxContent2()}
                        serviceIdStyle={secondServiceId}
                        serviceBoxIcon={secondServiceBoxIcon}
                        
                    />

                    {/** Home Services Second Inner List Content */}
                    <HomeServiceInnerContentSection
                    
                        HomeServicesStyle={HomeServicesStyle}
                        image={sImage2}
                        para="DigiScape’s specialised digital growth services focus on driving performance through data-driven strategies that enhance visibility, increase engagement, and deliver measurable, long-term online success for your business."
                        list1="Influencer marketing"
                        list2="Website performance optimisation"
                        list3="Marketing analytics and reporting"
                        list4="Online reputation management"
                        serviceBoxRef={firstServiceBoxRef}
                        styleState={secondServiceBox}
                    
                    />

                    {/** Home Services Third Inner Content List */}
                    <HomeServiceInnerContent
                    
                        HomeServicesStyle={HomeServicesStyle}
                        HomeListHeading="Web Development & Technology Services"
                        ServiceId="{03}"
                        SVGIcon={<LuCodeXml />}
                        handleBoxeHeightOnClick={() => handleServiceBoxContent3()}
                        serviceIdStyle={thirdServiceId}
                        serviceBoxIcon={thirdServiceBoxIcon}
                        
                    />

                    {/** Home Services Third Inner List Content */}
                    <HomeServiceInnerContentSection
                    
                        HomeServicesStyle={HomeServicesStyle}
                        image={sImage3}
                        para="DigiScape delivers expert web development and technology services, crafting fast, secure, and scalable digital solutions that enhance user experience, drive growth, and strengthen your brand’s online presence."
                        list1="WordPress Development"
                        list2="Full Stack Web Development"
                        list3="Frontend Development"
                        list4="Backend & API Development"
                        list5="E-Commerce"
                        serviceBoxRef={secondServiceBoxRef}
                        styleState={thirdServiceBox}
                        
                    />

                </ul>

            </div>
            
        </>

    );

}

export default Homeservicesmaincontent;