import React, {useState} from 'react';
import AboutPageOurFaqQuestionAnswerSection from '../About Page Our FAQ Content Section/Aboutpageourfaqquestionanswersection';

function Aboutpageourfaqquestionanswersection({AboutSectionStyle, faqQuestionSVG}) {

    const [isFirstFAQActive, setIsFirstFAQActive] = useState(false); // first FAQ 
    const [isSecondFAQActive, setIsSecondFAQActive] = useState(false); // second FAQ
    const [isThirdFAQActive, setIsThirdFAQActive] = useState(false); // third FAQ
    const [isFourthFAQActive, setIsFourthFAQActive] = useState(false); // fourth FAQ
    const [isFifthFAQActive, setIsFifthFAQActive] = useState(false); // fifth FAQ

    // First FAQ Click Event
    function firstHandleClickFAQ() {
        
        setIsFirstFAQActive(prev => !prev);
        setIsSecondFAQActive(prev => (prev !== prev));
        setIsFourthFAQActive(prev => (prev !== prev));
        setIsFifthFAQActive(prev => (prev !== prev));
        setIsThirdFAQActive(prev => (prev !== prev));

    }

    // add animation in the first faq Question Div
    const firstAnimateFaqQuestionDiv = isFirstFAQActive ? {

        borderRadius: "50px 50px 50px 50px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    }

    // add hide and show anime in the first faq Answer Div
    const firstHandleFaqAnswerDiv = isFirstFAQActive ? {

        height: "0rem",
        transition: "all 0.8s ease",
        borderBottom: "0px dashed #292929",
        marginBottom: "0px",
        opacity: "0",
        filter: "blur(2px)"

    } : {

        height: "10rem",
        transition: "all 0.8s ease",
        borderBottom: "2px dashed #292929",
        marginBottom: "20px",
        opacity: "1",
        filter: "blur(0px)"

    }

    // add rotate anime in the first faq Question Div SVG Icon
    const firstAnimateFaqQuestionSVG = isFirstFAQActive ? {

        transform: "rotate(50deg)",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    }

    // add a toggle animation in the first faq first span
    const faqFirstSpan = isFirstFAQActive ? {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease",
        width: "25%",
        height: "3px",
        borderRadius: "50px"

    } : {

        transform: "rotate(-180deg)",
        transition: "all 0.8s ease",
        width: "30%",
        height: "4px",
        borderRadius: "50px"

    }

    // add a toggle animation in the first faq second span
    const faqSecondSpan = isFirstFAQActive ? {

        transform: "rotate(-90deg)",
        transition: "all 0.8s ease",
        opacity: "1"

    } : {

        transform: "rotate(-180deg)",
        transition: "all 0.8s ease",
        opacity: "0"

    }

    /** Second FAQ Click Event */
    function secondHandleClickFAQ() {
        
        setIsSecondFAQActive(prev => !prev);
        setIsThirdFAQActive(prev => (prev !== prev));
        setIsFourthFAQActive(prev => (prev !== prev));
        setIsFifthFAQActive(prev => (prev !== prev));
        setIsFirstFAQActive(prev => (prev !== !prev));
        
    } 

    // add animation in the second faq question div
    const secondAnimateFaqQuestionDiv = isSecondFAQActive ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "50px",
        transition: "all 0.8s ease"

    };

    // add hide and show anime in the second faq Answer Div
    const secondHandleFaqAnswerDiv = isSecondFAQActive ? {

        height: "10rem",
        opacity: "1",
        filter: "blur(0px)",
        borderBottom: "2px dashed #292929",
        marginBottom: "20px",
        transition: "all 0.8s ease"

    } : {

        height: "0rem",
        opacity: "0",
        filter: "blur(2px)",
        transition: "all 0.8s ease",
        borderBottom: "2px dashed #292929",
        marginBottom: "0px"

    }
    
    // add rotate anime in the second faq question div SVG Icon
    const secondAnimateFaqQuestionSVG = isSecondFAQActive ? {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(50deg)",
        transition: "all 0.8s ease"

    }

    // add a toggle animation in the second faq first span
    const secondFaqFirstSpan = isSecondFAQActive ? { 

        transform: "rotate(-180deg)",
        transition: "all 0.8s ease",
        height: "4px",
        width: "30%"

    }: {
        
        transform: "rotate(0deg)",
        transition: "all 0.8s ease",
        height: "3px",
        width: "25%"

    }

    // add a toggle animation in the second faq second span
    const secondFaqSecondSpan = isSecondFAQActive ? {

        transform: "rotate(-180deg)",
        transition: "all 0.8s ease",
        opacity: "0"

    } : {

        transform: "rotate(-90deg)",
        transition: "all 0.8s ease",
        opacity: "1"

    }

    /** Third FAQ Click Event */
    function thirdHandleClickFAQ() {
        
        setIsThirdFAQActive(prev => !prev);
        setIsSecondFAQActive(prev => (prev !== prev));
        setIsFourthFAQActive(prev => (prev !== prev));
        setIsFifthFAQActive(prev => (prev !== prev));
        setIsFirstFAQActive(prev => (prev !== !prev));

    }

    // add an animation in the third FAQ question div
    const thirdAnimateFaqQuestionDiv = isThirdFAQActive ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease",

    } : {

        borderRadius: "50px",
        transition: "all 0.8s ease"

    }

    // add hide and show animation in the third FAQ answer div
    const thirdHandleFaqAnswerDiv = isThirdFAQActive ? {

        height: "10rem",
        opacity: "1",
        filter: "blur(0px)",
        transition: "all 0.8s ease",
        borderBottom: "2px dashed #292929",
        marginBottom: "20px"

        
    } : {

        height: "0rem",
        opacity: "0",
        filter: "blur(2px)",
        borderBottom: "0px dashed",
        transition: "all 0.8s ease",
        marginBottom: "0px"

    }

    // add anime in the third faq question div SVG icon
    const thirdAnimateFaqQuestionSVG = isThirdFAQActive ? {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(50deg)",
        transition: "all 0.8s ease"

    }

    // add anime in the third faq question div first span svg
    const thirdFaqFirstSpan = isThirdFAQActive ? {

        transform: "rotate(-180deg)",
        transition: "all 0.8s ease",
        height: "4px",
        width: "30%"

    } : {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease",
        height: "3px",
        width: "25%"

    }

    // add anime in the third faq question div first span svg
    const thirdFaqSecondSpan = isThirdFAQActive ? {

        transform: "rotate(-180deg)",
        opacity: "0",
        transition: "all 0.8s ease",

    } : {

        transform: "rotate(-90deg)",
        opacity: "1",
        transition: "all 0.8s ease"

    }

    /** Fourth FAQ Click Event */
    function fourthHandleClickFAQ() {
        
        setIsFourthFAQActive(prev => !prev);
        setIsThirdFAQActive(prev => (prev != prev));
        setIsSecondFAQActive(prev => (prev !== prev));
        setIsFifthFAQActive(prev => (prev !== prev));
        setIsFirstFAQActive(prev => (prev !== !prev));

    }

    // add an animation in the fourth FAQ question div
    const fourthAnimateFaqQuestionDiv = isFourthFAQActive ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"


    } : {

        borderRadius: "50px",
        transition: "all 0.8s ease"

    }

    // add an animation in the fourth FAQ question div SVG Icon
    const fourthAnimateFaqQuestionSVG = isFourthFAQActive ? {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(50deg)",
        transition: "all 0.8s ease"

    }

    // add hide and show animation in the fourth FAQ answer div
    const fourthHandleFaqAnswerDiv = isFourthFAQActive ? {

        height: "10rem",
        opacity: "1",
        filter: "blur(0px)",
        transition: "all 0.8s ease",
        marginBottom: "20px",
        borderBottom: "2px dashed #292929",

    } : {

        height: "0rem",
        opacity: "0",
        filter: "blur(2px)",
        transition: "all 0.8s ease",
        marginBottom: "0px",
        borderBottom: "0px dashed"

    }

    // add an animation in the fourth FAQ question div first span SVG icon
    const fourthFaqFirstSpan = isFourthFAQActive ? {

        transform: "rotate(-180deg)",
        transition: "all 0.8s ease",
        width: "30%",
        height: "4px"

    } : {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease",
        width: "25%",
        height: "3px"

    }

    // add an animation in the fourth FAQ question div second span SVG Icon
    const fourthFaqSecondSpan = isFourthFAQActive ? {

        transform: "rotate(-180deg)",
        transition: "all 0.8s ease",
        opacity: "0"

    } : {

        transform: "rotate(-90deg)",
        transition: "all 0.8s ease",
        opacity: "1"

    }

    {/** Fifth FAQ Click Event */}
    function fifthHandleClickFAQ() {
        
        setIsFifthFAQActive(prev => !prev);
        setIsFourthFAQActive(prev => (prev !== prev));
        setIsThirdFAQActive(prev => (prev !== prev));
        setIsSecondFAQActive(prev => (prev !== prev));
        setIsFirstFAQActive(prev => (prev !== !prev));

    }

    /// add an animation in the fifth FAQ question div
    const fifthAnimateFaqQuestionDiv = isFifthFAQActive ? {

        borderRadius: "20px 20px 0px 0px",
        transition: "all 0.8s ease"

    } : {

        borderRadius: "50px",
        transition: "all 0.8s ease"

    }

    // add an animation in the fifth FAQ question div SVG Icon
    const fifthAnimateFaqQuestionSVG = isFifthFAQActive ? {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(50deg)",
        transition: "all 0.8s ease"

    }

    // add an animation in the fifth FAQ answer div
    const fifthHandleFaqAnswerDiv = isFifthFAQActive ? {

        height: "10rem",
        opacity: "1",
        filter: "blur(0px)",
        transition: 'all 0.8s ease',
        marginBottom: "20px",
        borderBottom: "2px dashed #292929",

    } : {

        height: "0rem",
        opacity: "0",
        filter: "blur(2px)",
        transition: "all 0.8s ease",
        marginBottom: "0px",
        borderBottom: "0px dashed"

    }

    // add a rotate anime in the fifth FAQ question div first span svg icon
    const fifthFaqFirstSpan = isFifthFAQActive ? {

        transform: "rotate(0deg)",
        transition: "all 0.8s ease",
        width: "30%",
        height: "4px"

    } : {

        transform: "rotate(180deg)",
        transition: "all 0.8s ease",
        width: "25%",
        height: "3px"

    }

    // add a rotate anime in the fifth FAQ question div second span svg icon
    const fifthFaqSecondSpan = isFifthFAQActive ? {

        transform: "rotate(-180deg)",
        opacity: "0",
        transition: "all 0.8s ease"

    } : {

        transform: "rotate(-90deg)",
        opacity: "1",
        transition: "all 0.8s ease"

    }

    return (

        <>
        
            {/** Our FAQ Content Section */}
            <div className={AboutSectionStyle.aboutPageFAQContentSection}>
            
                {/** FAQ Inner Content Section */}
                <div className={AboutSectionStyle.aboutPageFAQContentInnerSection}>
            
                    {/** First FAQ Question Answer */}
                    <AboutPageOurFaqQuestionAnswerSection
                    
                        // About FAQ Question 
                        AboutSectionStyle={AboutSectionStyle}
                        handleClickFAQ={firstHandleClickFAQ}
                        animateFaqQuestionDiv={firstAnimateFaqQuestionDiv}
                        faqQuestionSVG={faqQuestionSVG}
                        faqQuestion="What makes DigiScape different from other digital marketing agencies? "
                        faqFirstSpan={faqFirstSpan}
                        faqSecondSpan={faqSecondSpan}
                        animateFaqQuestionSVG={firstAnimateFaqQuestionSVG}

                        // About FAQ Answer 
                        handleFaqAnswerDiv={firstHandleFaqAnswerDiv}
                        faqAnswer="DigiScape focuses on strategy first, execution second. We do not apply generic tactics or one size fits all packages. Every engagement starts with understanding your business goals, audience, and growth stage. Our team combines data driven planning, creative execution, and measurable performance tracking so you always know what is being done and why it matters to your business."
                        
                    />  

                    {/** Second FAQ Question Answer */}
                    <AboutPageOurFaqQuestionAnswerSection
                    
                        // About FAQ Question
                        AboutSectionStyle={AboutSectionStyle}
                        handleClickFAQ={secondHandleClickFAQ}
                        animateFaqQuestionDiv={secondAnimateFaqQuestionDiv}
                        faqQuestionSVG={faqQuestionSVG}
                        faqQuestion="What can clients expect during the onboarding process?"
                        faqFirstSpan={secondFaqFirstSpan}
                        faqSecondSpan={secondFaqSecondSpan}
                        animateFaqQuestionSVG={secondAnimateFaqQuestionSVG}
                        
                        // About FAQ Answer
                        handleFaqAnswerDiv={secondHandleFaqAnswerDiv}
                        faqAnswer="Our onboarding process is structured and efficient. We begin with a detailed discovery session to understand your objectives, challenges, and expectations. This is followed by a clear roadmap outlining scope, timelines, and responsibilities. From day one, you will know who is working on your account, how communication happens, and how success will be measured."
                        
                    />

                    {/** Third FAQ Question Answer */}
                    <AboutPageOurFaqQuestionAnswerSection
                    
                        // About FAQ Question
                        AboutSectionStyle={AboutSectionStyle}
                        handleClickFAQ={thirdHandleClickFAQ}
                        animateFaqQuestionDiv={thirdAnimateFaqQuestionDiv}
                        faqQuestionSVG={faqQuestionSVG}
                        faqQuestion="How do you ensure transparency throughout a project?"
                        animateFaqQuestionSVG={thirdAnimateFaqQuestionSVG}
                        faqFirstSpan={thirdFaqFirstSpan}
                        faqSecondSpan={thirdFaqSecondSpan}

                        // About FAQ Answer
                        handleFaqAnswerDiv={thirdHandleFaqAnswerDiv}
                        faqAnswer="Transparency is built into our process. From clear proposals and timelines to regular performance updates, you have full visibility at every stage. We share progress reports, key metrics, and insights in simple language, not jargon. You will always understand where your budget is going, what results are being achieved, and what steps come next."
                        
                    />

                    {/** Fourth FAQ Question */}
                    <AboutPageOurFaqQuestionAnswerSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        handleClickFAQ={fourthHandleClickFAQ}
                        animateFaqQuestionDiv={fourthAnimateFaqQuestionDiv}
                        faqQuestionSVG={faqQuestionSVG}
                        faqQuestion="How do you measure success and return on investment?"
                        animateFaqQuestionSVG={fourthAnimateFaqQuestionSVG}
                        faqFirstSpan={fourthFaqFirstSpan}
                        faqSecondSpan={fourthFaqSecondSpan}

                        // About FAQ Answer
                        handleFaqAnswerDiv={fourthHandleFaqAnswerDiv}
                        faqAnswer="Success is measured against real business outcomes, not vanity metrics. Depending on your goals, this may include lead quality, conversion rates, traffic growth, engagement, or revenue impact. We define success metrics upfront and track them consistently. Our reports focus on insights and actions, helping you make informed decisions rather than just reviewing numbers."
                        
                    />

                    {/** Fifth FAQ Question */}
                    <AboutPageOurFaqQuestionAnswerSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                        handleClickFAQ={fifthHandleClickFAQ}
                        animateFaqQuestionDiv={fifthAnimateFaqQuestionDiv}
                        faqQuestionSVG={faqQuestionSVG}
                        faqQuestion="Is DigiScape suitable for long term partnerships?"
                        animateFaqQuestionSVG={fifthAnimateFaqQuestionSVG}
                        faqFirstSpan={fifthFaqFirstSpan}
                        faqSecondSpan={fifthFaqSecondSpan}

                        // About FAQ Answer
                        handleFaqAnswerDiv={fifthHandleFaqAnswerDiv}
                        faqAnswer="Yes. DigiScape is built for long term collaboration, not short-term wins. We work best with businesses that value consistency, growth, and strategic thinking. As your business evolves, we adapt strategies, refine execution, and scale efforts to support sustained results. Our goal is to become a trusted digital partner, not just a service provider."
                        
                    />
            
                </div>
            
            </div>
            
        </>

    );

}

export default Aboutpageourfaqquestionanswersection;