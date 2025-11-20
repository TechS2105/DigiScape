import React from 'react';
import HomeFaqSection from '../../../public/styles/home faq section files/Homefaq.module.css';
import { FaPlus } from "react-icons/fa";

function Homefaqsection() {
    
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

                            {/** First FAQ */}
                            <div className={HomeFaqSection.faqQuestionBox}>

                                {/** Question Div */}
                                <div className={HomeFaqSection.faqQuestionDiv}>

                                    <span>1.</span>
                                    <h3>Do you provide complete digital solutions, including both marketing and website development?</h3>

                                </div>

                                {/** Open & Close Div */}
                                <div className={HomeFaqSection.faqOpenCloseIconDiv}> <FaPlus /> </div>

                            </div>

                            {/** First FAQ Answar Div */}
                            <div className={HomeFaqSection.faqAnswarDiv}>

                                <p>Yes. We handle everything from building or upgrading your website to running SEO, paid ads, social media, content, branding and analytics. This gives you a unified strategy instead of juggling multiple agencies.</p>

                            </div>

                            {/** Second FAQ */}
                            <div className={HomeFaqSection.faqQuestionBox}></div>

                            {/** Third FAQ */}
                            <div className={HomeFaqSection.faqQuestionBox}></div>

                            {/** Fourth FAQ */}
                            <div className={HomeFaqSection.faqQuestionBox}></div>

                            {/** Fifth FAQ */}
                            <div className={HomeFaqSection.faqQuestionBox}></div>

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