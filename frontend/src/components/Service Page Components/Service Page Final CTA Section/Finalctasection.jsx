import React, {useState} from 'react';

function Finalctasection({ ServicePageStyle }) {

    const [configureServicePageFinalCtaContentBoxStyle, setConfigureServicePageFinalCtaContentBoxStyle] = useState({

        height: "100%",
        opacity: "1",
        filter: "blur(0px)",
        transform: "scale(1)"

    }); // Final CTA Content Box

    const [configureServicePageFinalCtaSectionStyle, setConfigureServicePageFinalCtaSectionStyle] = useState({

        height: "70vh"

    }); // Final CTA Section

    const [configureFinalCtaMainFormSectionStyle, setConfigureFinalCtaMainFormSectionStyle] = useState({

        transform: "translateY(2000px)",
        opacity: "0",
        filter: "blur(100px)"

    }); // Final CTA Main Form Section

    const [configureFinalCtaInnerFormTitleSection, setConfigureFinalCtaInnerFormTitleSection] = useState({

        transform: "translateY(-1000px)",
        opacity: "0",
        filter: "blur(5px)",

    }); // Final CTA Inner Form Title Section

    const [configureFinalCtaFormSpanTitleStyle, setConfigureFinalCtaFormSpanTitleStyle] = useState({

        transform: "translateX(500px)",
        opacity: "0",
        filter: "blur(20px)"

    }); // Final CTA Form Span Title

    const [configureFinalCtaFormMainTitleStyle, setConfigureFinalCtaFormMainTitleStyle] = useState({

        transform: "translateX(2000px)",
        opacity: "0",
        filter: "blur(20px)"

    }); // Final CTA Form Main Title
    
    const handleClickRequestConsultation = () => {

        // Final CTA Content Box Style
        setConfigureServicePageFinalCtaContentBoxStyle({

            height: "0%",
            opacity: "0",
            filter: "blur(20px)",
            transform: "scale(0)",
            transition: "all 2s ease"

        });

        // Final CTA Section
        setConfigureServicePageFinalCtaSectionStyle({

            height: "220vh",
            transition: "all 0.8s ease"

        });

        // Final CTA Main Form Section
        setConfigureFinalCtaMainFormSectionStyle({

            transform: "translateY(0px)",
            transition: "all 0.8s ease",
            opacity: "1",
            filter: "blur(0px)"

        });

        // Final CTA Form Inner Title Section
        setConfigureFinalCtaInnerFormTitleSection({

            transform: "translateY(0px)",
            transition: "all 0.8s ease",
            opacity: "1",
            filter: "blur(0px)"

        });

        // Final CTA Form Span Title
        setConfigureFinalCtaFormSpanTitleStyle({

            transform: "translateX(0px)",
            transition: "all 0.8s ease 0.5s",
            opacity: "1",
            filter: 'blur(0px)'

        });

        // Final CTA Form Main Title
        setConfigureFinalCtaFormMainTitleStyle({

            transform: 'translateX(0px)',
            transition: "all 0.8s ease 0.7s",
            opacity: "1",
            filter: 'blur(0px)'

        });

    }
    
    return (

        <>
        
            {/** Service Page Final CTA Section */}
            <div className={ServicePageStyle.servicePageFinalCtaSection} style={configureServicePageFinalCtaSectionStyle}>

                {/** Final CTA Content Box */}
                <div className={ServicePageStyle.servicePageFinalCtaContentBox} style={configureServicePageFinalCtaContentBoxStyle}>

                    {/** Final CTA Inner Content Box */}
                    <div className={ServicePageStyle.servicePageFinalCtaInnerContentBox}>

                        <span>Get Started</span>
                        <h2>Strategic Digital Solutions Built for Enduring Growth</h2>
                        <p>DigiScape partners with forward thinking brands to design refined, performance driven digital strategies. Our approach balances precision, insight, and execution to support sustainable growth with clarity and confidence.</p>
                        <button onClick={() => {handleClickRequestConsultation()}}>Request a Consultation</button>

                    </div>
                    
                </div>

                {/** Final CTA Main Form Section Box */}
                <div className={ServicePageStyle.servicePageMainInnerFinalCtaFormBox} style={configureFinalCtaMainFormSectionStyle}>

                    {/** Final CTA Inner Form Title Section */}
                    <div className={ServicePageStyle.servicePageFinalCtaInnerFormTitleSection} style={configureFinalCtaInnerFormTitleSection}>

                        {/** Form Title Section Inner Title Div */}
                        <div className={ServicePageStyle.servicePageInnerFormTitleSectionTitleDiv}>

                            <span style={configureFinalCtaFormSpanTitleStyle}>Strategic Engagement</span>
                            <h2 style={configureFinalCtaFormMainTitleStyle}>Begin a Strategic Digital Conversation</h2>

                        </div>

                    </div>

                    {/** Final CTA Inner Form Section Form */}
                    <div className={ServicePageStyle.servicePageInnerFinalCtaFormSection}>

                        <form>

                            {/** First Input Div */}
                            <div className={ServicePageStyle.firstInputDiv}>

                                {/** First Name Div */}
                                <div className={ServicePageStyle.firstNameDiv}>

                                    <label htmlFor="fullname"> Full Name </label>
                                    <input type="text" placeholder='Enter Your Full Name' />

                                </div>

                                {/** Email Div */}
                                <div className={ServicePageStyle.emailDiv}>

                                    <label htmlFor="email"> Email </label>
                                    <input type="email" placeholder='Enter Your Email' />

                                </div>

                            </div>

                             {/** Second Input Div */}
                            <div className={ServicePageStyle.secondInputDiv}>

                                {/** Mobile No Div */}
                                <div className={ServicePageStyle.mobileNoDiv}>

                                    <label htmlFor="mobile"> Mobile No. </label>
                                    <input type="tel" placeholder='Enter Your Mobile No.' />

                                </div>

                                {/** Company Name Div */}
                                <div className={ServicePageStyle.companyNameDiv}>

                                    <label htmlFor="companyname"> Company Name </label>
                                    <input type="text" placeholder='Enter Your Company Name (Optional)' />

                                </div>

                            </div>

                            {/** Third Input Div */}
                            <div className={ServicePageStyle.thirdInputDiv}>

                                {/** Industry Type Div */}
                                <div className={ServicePageStyle.industryTypeDiv}>

                                    <label htmlFor="industrytype"> Industry Type </label>
                                    <select name='industrytype'>

                                        <option value="">Choose Your Industry Type</option>
                                        <option value="Technology / SaaS">Technology / SaaS</option>
                                        <option value="E-Commerce">E-Commerce</option>
                                        <option value="Healthcare">Healthcare</option>
                                        <option value="Education">Education</option>
                                        <option value="Real Estate">Real Estate</option>
                                        <option value="Other">Other</option>

                                    </select>

                                </div>

                                {/** Company Size Div */}
                                <div className={ServicePageStyle.companySizeDiv}>

                                    <label htmlFor="companysize"> Company Size </label>
                                    <select name='Select Your Company Size'>

                                        <option value="Choose Your Company Size"> Choose Your Company Size </option>
                                        <option value="1–10">1–10</option>
                                        <option value="11–50">11–50</option>
                                        <option value="51–200">51–200</option>
                                        <option value="201–500">201–500</option>
                                        <option value="500+">500+</option>

                                    </select>
                                    

                                </div>

                            </div>

                            {/** Fourth Input Div */}
                            <div className={ServicePageStyle.fourthInputDiv}>

                                {/** Industry Type Div */}
                                <div className={ServicePageStyle.servicesDiv}>

                                    <label htmlFor="servuces"> Services </label>
                                    <select name='services'>

                                        <option value="">Choose Your Services</option>
                                        <option value="Digital Marketing">Digital Marketing</option>
                                        <option value="Wordpress Development">Wordpress Development</option>
                                        <option value="Full Stack Web Development">Full Stack Web Development</option>
                                        <option value="Branding & Designing">Branding & Designing</option>
                                        <option value="Performance Marketing">Performance Marketing</option>
                                        <option value="SEO & Content Strategy">SEO & Content Strategy</option>
                                        <option value="Conversion Rate Improvement">Conversion Rate Improvement</option>
                                        <option value="Marketing Automation">Marketing Automation</option>
                                        <option value="End to End Digital Strategy">End to End Digital Strategy</option>
                                        <option value="Demand Generation">Demand Generation</option>
                                        <option value="Other">Other</option>

                                    </select>

                                </div>

                            </div>

                            {/** Fifth Input Div  */}
                            <div className={ServicePageStyle.fifthInputDiv}>

                                {/** Company Size Div */}
                                <div className={ServicePageStyle.messageDiv}>

                                    <label htmlFor="estimatedtimeline"> Message </label>
                                    <textarea placeholder='Briefly describe your current goals or challenges...'></textarea>
                                    
                                </div>

                            </div>

                            {/** Submit Button Div */}
                            <div className={ServicePageStyle.submitButtonDiv}>

                                <button type='submit'>Request a Consultation</button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Finalctasection;