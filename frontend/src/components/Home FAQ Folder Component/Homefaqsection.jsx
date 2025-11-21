import React, {useState} from 'react';
import HomeFaqSection from '../../../public/styles/home faq section files/Homefaq.module.css';
import HomeFaqQuestionAnswer from '../Home FAQ Folder Component/Homefaqquestionanswersection';

function Homefaqsection() {

    /** FAQ First Box Click Animation */
    const [isActiveClick, setIsActiveClick] = useState(false);

    function handleFaqClick() {
        
        setIsActiveClick((prev) => !prev);
        setIsActiveSecondBoxClick((prev) => (prev === !prev));
        setIsActiveThirdBoxClick((prev) => (prev === !prev));

    }

    /** Answer Div */
    const hideFaqAnswerBox = isActiveClick ? {

        height: "0rem",
        transition: "all 0.8s ease",
        opacity: "0",

    } : {

        height: "7rem",
        transition: "all 0.8s ease",
        opacity: "1"

    }

    /** Question Div */
    const faqQuestionBoxStyle = isActiveClick ? {

        borderRadius: "0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    }

    /** Question Box SVG Icon */
    const faqQuestionSVG = isActiveClick ? {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    } : {
        
        transform: "rotate(-50deg)",
        transition: 'all 0.8s ease'

    }

    /** FAQ Second Box Click Animation */
    const [isActiveSecondBoxClick, setIsActiveSecondBoxClick] = useState(false);
    
    function handleSecondFaqClick() {
        
        setIsActiveSecondBoxClick((prev) => !prev);
        setIsActiveClick((prev) => !(prev && !prev));
        setIsActiveThirdBoxClick((prev) => (prev === !prev));

    }

    const hideSecondFaqAnswerBox = isActiveSecondBoxClick ? {

        height: "7rem",
        transition: "all 0.8s ease"

    } : {

        height: "0rem",
        transition: "all 0.8s ease"

    }

    /** FAQ Third Box Click Animation */
    const [isActiveThirdBoxClick, setIsActiveThirdBoxClick] = useState(false);

    function handleThirdFaqClick(){

        setIsActiveThirdBoxClick((prev) => !prev);
        setIsActiveSecondBoxClick((prev) => (prev === !prev));
        setIsActiveClick((prev) => !(prev && !prev));

    }

    const hideThirdFaqAnswerBox = isActiveThirdBoxClick ? {

        height: "7rem",
        transition: "all 0.8s ease"

    } : {

        height: "0rem",
        transition: "all 0.8s ease"

    }

    return (

        <>
        
            {/** FAQ's section  */}
            <div className={HomeFaqSection.faqMainContainer}>

                {/** Background Image */}
                <img src="/images/Home FAQ Images/world_map.png" alt="" />
                
                {/** FAQ's Content Box */}
                <div className={HomeFaqSection.faqContentBox}>

                    {/** Inner Div */}
                    <div className={HomeFaqSection.faqInnerDivBox}>

                        {/** Inner Div Title Section */}
                        <div className={HomeFaqSection.faqInnerDivTitleSection}>

                            <span> Our FAQ's </span>
                            <h2> Frequently Asked Questions About DigiScape </h2>
                            <p>Find clear answers to common questions about our digital marketing and web development services. Learn how we work, what we offer and how we help businesses grow online.</p>

                        </div>

                        {/** Inner FAQ's Section */}
                        <div className={HomeFaqSection.innerFaqSection}>

                            {/** First FAQ Question Answer Box */}
                            <HomeFaqQuestionAnswer
                            
                                HomeFaqSection={HomeFaqSection}
                                faqQuestionBoxStyle={faqQuestionBoxStyle}
                                hideFaqAnswerBox={hideFaqAnswerBox}
                                faqQuestionSVG={faqQuestionSVG}
                                handleFaqClick={handleFaqClick}
                                faqSerialNo="1."
                                faqQuestionTitle="Do you provide complete digital solutions, including both marketing and website development?"
                                faqAnswerContent="Yes. We handle everything from building or upgrading your website to running SEO, paid ads, social media, content, branding and analytics. This gives you a unified strategy instead of juggling multiple agencies"
                                
                            />

                            {/** Second FAQ Question Answer Box */}
                            <HomeFaqQuestionAnswer
                            
                                HomeFaqSection={HomeFaqSection}    
                                handleFaqClick={handleSecondFaqClick}
                                hideFaqAnswerBox={hideSecondFaqAnswerBox}
                                faqSerialNo="2."
                                faqQuestionTitle="How do you approach a new project when a business needs both web development and marketing?"
                                faqAnswerContent="We start with a discovery session to understand your goals, audience and current challenges. Then we plan the website structure and marketing roadmap together so both support each other. This helps avoid technical gaps and ensures smoother growth."
                                
                            />

                            {/** Third FAQ Question Answer Box */}
                            <HomeFaqQuestionAnswer
                            
                                HomeFaqSection={HomeFaqSection}
                                handleFaqClick={handleThirdFaqClick}
                                hideFaqAnswerBox={hideThirdFaqAnswerBox}
                                faqSerialNo="3."
                                faqQuestionTitle="What if I already have a website but it's not performing well?"
                                faqAnswerContent="We run a full audit to check design issues, loading speed, mobile responsiveness, SEO health, broken pages and conversion flow. After the review, we suggest either targeted fixes or a full rebuild depending on what will help you get results faster."
                                
                            />

                        </div>                      

                    </div>

                </div>

                {/** FAQ's Image Box */}
                <div className={HomeFaqSection.faqSideImageBox}>

                    {/** FAQ's Image Text Marquee Div */}
                    <div className={HomeFaqSection.faqTextMarquee}>

                        {/** Text Marquee */}
                        <div className={HomeFaqSection.faqMarquee}>

                            {/** Slidering Container */}
                            <div className={HomeFaqSection.slidingContainer}>

                                <span> Best Digital Marketing & Web Development Agency * </span>

                            </div>

                            {/** Slidering Container */}
                            <div className={HomeFaqSection.slidingContainer}>

                                <span> Best Digital Marketing & Web Development Agency * </span>

                            </div>

                            {/** Slidering Container */}
                            <div className={HomeFaqSection.slidingContainer}>

                                <span> Best Digital Marketing & Web Development Agency * </span>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
            
        </>

    );

}

export default Homefaqsection;