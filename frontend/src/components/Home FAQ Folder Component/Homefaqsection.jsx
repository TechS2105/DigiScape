import React, {useState} from 'react';
import HomeFaqSection from '../../../public/styles/home faq section files/Homefaq.module.css';
import HomeFaqQuestionAnswer from '../Home FAQ Folder Component/Homefaqquestionanswersection';

function Homefaqsection() {

    /** FAQ First Box Click Animation */
    const [isActiveClick, setIsActiveClick] = useState(false);

    function handleFaqClick() {
        
        setIsActiveClick((prev) => !prev); // First
        setIsActiveSecondBoxClick((prev) => (prev === !prev)); // Second
        setIsActiveThirdBoxClick((prev) => (prev === !prev)); // Third
        setIsActiveFourthBoxClick((prev) => (prev === !prev)); // Fourth
        setIsActiveFifthBoxClick((prev) => (prev === !prev)); // Fifth

    }

    // Answer Div
    const hideFaqAnswerBox = isActiveClick ? {

        height: "0rem",
        transition: "all 0.8s ease",
        opacity: "0",

    } : {

        height: "7rem",
        transition: "all 0.8s ease",
        opacity: "1"

    }

    // Question Div
    const faqQuestionBoxStyle = isActiveClick ? {

        borderRadius: "0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"
        
    }

    // Question Box SVG
    const faqQuestionSVG = isActiveClick ? {

        transform: "rotate(0deg)",
        backgroundColor: "royalblue",
        color: "#ffffffff",
        transition: "all 0.8s ease"

    } : {
        
        transform: "rotate(45deg)",
        backgroundColor: "#ffffffff",
        color: "royalblue",
        transition: 'all 0.8s ease'

    }

    /** FAQ Second Box Click Animation */
    const [isActiveSecondBoxClick, setIsActiveSecondBoxClick] = useState(false);
    
    function handleSecondFaqClick() {
        
        setIsActiveFifthBoxClick((prev) => (prev === !prev)); // Fifth
        setIsActiveFourthBoxClick((prev) => (prev === !prev)); // Fourth
        setIsActiveThirdBoxClick((prev) => (prev === !prev)); // Third
        setIsActiveSecondBoxClick((prev) => !prev); // Second 
        setIsActiveClick((prev) => !(prev && !prev)); // First

    }

    // Answer Box
    const hideSecondFaqAnswerBox = isActiveSecondBoxClick ? {

        height: "7rem",
        transition: "all 0.8s ease",
        opacity: "1"

    } : {

        height: "0rem",
        transition: "all 0.8s ease",
        opacity: "0"

    }

    // Question Box
    const faqSecondQuestionBoxStyle = isActiveSecondBoxClick ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "0px",
        transition: "all 0.8s ease"

    }

    // Question Box SVG 
    const faqSecondQuestionSVG = isActiveSecondBoxClick ? {

        transform: "rotate(45deg)",
        backgroundColor: "#ffffffff",
        color: "royalblue",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(0deg)",
        backgroundColor: "royalblue",
        color: "#ffffffff",
        transition: "all 0.8s ease"

    }

    /** FAQ Third Box Click Animation */
    const [isActiveThirdBoxClick, setIsActiveThirdBoxClick] = useState(false);

    function handleThirdFaqClick() {

        setIsActiveFifthBoxClick((prev) => (prev === !prev)); // Fifth
        setIsActiveFourthBoxClick((prev) => (prev === !prev)); // Fourth
        setIsActiveThirdBoxClick((prev) => !prev); // Third
        setIsActiveSecondBoxClick((prev) => (prev === !prev)); // Second
        setIsActiveClick((prev) => !(prev && !prev)); // First

    }

    // Answar Box 
    const hideThirdFaqAnswerBox = isActiveThirdBoxClick ? {

        height: "7rem",
        transition: "all 0.8s ease",
        opacity: "1",

    } : {

        height: "0rem",
        transition: "all 0.8s ease",
        opacity: "0",

    }

    // Question Box
    const faqThirdQuestionBoxStyle = isActiveThirdBoxClick ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "0px",
        transition: "all 0.8s ease"

    }

    // Question Box SVG
    const faqThirdQuestionSVG = isActiveThirdBoxClick ? {

        transform: "rotate(45deg)",
        backgroundColor: "#ffffffff",
        color: "royalblue",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(0deg)",
        backgroundColor: "royalblue",
        color: "#ffffffff",
        transition: "all 0.8s ease"

    }

    /** FAQ Fourth Box Click Animation */
    const [isActiveFourthBoxClick, setIsActiveFourthBoxClick] = useState(false);

    const handleFourthFaqClick = () => {

        setIsActiveFifthBoxClick((prev) => (prev === !prev)); // Fifth
        setIsActiveFourthBoxClick((prev) => !prev); // Fourth
        setIsActiveThirdBoxClick((prev) => (prev === !prev)); // Third
        setIsActiveSecondBoxClick((prev) => (prev === !prev)); // Second
        setIsActiveClick((prev) => (!(prev && !prev))); // first

    }

    // Answer Box
    const hideFourthFaqAnswerBox = isActiveFourthBoxClick ? {

        height: "7rem",
        opacity: "1",
        transition: 'all 0.8s ease'

    } : {

        height: "0rem",
        opacity: "0",
        transition: "all 0.8s ease"

    }

    // Question Box 
    const faqFourthQuestionBoxStyle = isActiveFourthBoxClick ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "0px",
        transition: 'all 0.8s ease'

    }

    // Question Box SVG
    const faqFourthQuestionBoxSVG = isActiveFourthBoxClick ? {

        transform: "rotate(45deg)",
        backgroundColor: "#ffffffff",
        color: "royalblue",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(0deg)",
        backgroundColor: "royalblue",
        color: "#ffffffff",
        transition: "all 0.8s ease"

    }

    /** FAQ Fifth Box Click Animation */
    const [isActiveFifthBoxClick, setIsActiveFifthBoxClick] = useState(false);

    function handleFifthFaqClick() {
        
        setIsActiveFifthBoxClick((prev) => !prev);
        setIsActiveFourthBoxClick((prev) => (prev === !prev));
        setIsActiveThirdBoxClick((prev) => (prev === !prev));
        setIsActiveSecondBoxClick((prev) => (prev === !prev));
        setIsActiveClick((prev) => !(prev && !prev));

    }

    // Answer Box
    const hideFifthFaqAnswerBox = isActiveFifthBoxClick ? {

        height: "7rem",
        opacity: "1",
        transition: "all 0.8s ease"

    } : {

        height: "0rem",
        opacity: "0",
        transition: "all 0.8s ease"

    }

    // Question Box
    const faqFifthQuestionBoxStyle = isActiveFifthBoxClick ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "0px",
        transition: "all 0.8s ease"

    }

    // Question Box SVG 
    const faqFifthQuestionSVG = isActiveFifthBoxClick ? {

        transform: "rotate(45deg)",
        backgroundColor: "#ffffffff",
        color: "royalblue",
        transition: 'all 0.8s ease'

    } : {

        transform: "rotate(0deg)",
        backgroundColor: "royalblue",
        color: "#ffffffff",
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
                                faqQuestionBoxStyle={faqSecondQuestionBoxStyle}
                                faqQuestionSVG={faqSecondQuestionSVG}
                                faqSerialNo="2."
                                faqQuestionTitle="How do you approach a new project when a business needs both web development and marketing?"
                                faqAnswerContent="We start with a discovery session to understand your goals, audience and current challenges. Then we plan the website structure and marketing roadmap together so both support each other. This helps avoid technical gaps and ensures smoother growth."
                                
                            />

                            {/** Third FAQ Question Answer Box */}
                            <HomeFaqQuestionAnswer
                            
                                HomeFaqSection={HomeFaqSection}
                                handleFaqClick={handleThirdFaqClick}
                                hideFaqAnswerBox={hideThirdFaqAnswerBox}
                                faqQuestionBoxStyle={faqThirdQuestionBoxStyle}
                                faqQuestionSVG={faqThirdQuestionSVG}
                                faqSerialNo="3."
                                faqQuestionTitle="What if I already have a website but it's not performing well?"
                                faqAnswerContent="We run a full audit to check design issues, loading speed, mobile responsiveness, SEO health, broken pages and conversion flow. After the review, we suggest either targeted fixes or a full rebuild depending on what will help you get results faster."
                                
                            />

                            {/** Forth FAQ Question Answer Box */}
                            <HomeFaqQuestionAnswer
                            
                                HomeFaqSection={HomeFaqSection}
                                handleFaqClick={handleFourthFaqClick}
                                hideFaqAnswerBox={hideFourthFaqAnswerBox}
                                faqQuestionBoxStyle={faqFourthQuestionBoxStyle}
                                faqQuestionSVG={faqFourthQuestionBoxSVG}
                                faqSerialNo="4."
                                faqQuestionTitle="How do you make sure a website is marketing-ready before launching campaigns?"
                                faqAnswerContent="We set up essential elements like SEO-friendly pages, fast performance, secure hosting, clear navigation, analytics tracking and conversion-optimized layouts. This saves time later and helps your marketing campaigns perform more efficiently."
                                
                            />

                            {/** Fifth FAQ Question Answer Box */}
                            <HomeFaqQuestionAnswer
                            
                                HomeFaqSection={HomeFaqSection}
                                handleFaqClick={handleFifthFaqClick}
                                hideFaqAnswerBox={hideFifthFaqAnswerBox}
                                faqQuestionBoxStyle={faqFifthQuestionBoxStyle}
                                faqQuestionSVG={faqFifthQuestionSVG}
                                faqSerialNo="5."
                                faqQuestionTitle="How do you decide which digital marketing channels will work best for my business?"
                                faqAnswerContent="We look at your goals, budget, competition and customer behavior. Based on this, we create a customized plan that may include SEO, Google Ads, Facebook/Instagram ads, social media management, email marketing or content creation. Each suggestion is driven by ROI, not guesswork."
                                
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