import React, {useState} from 'react';
import ServicePageFinalCTAOuterContentSection from '../Service Page Final CTA Section/Finalctaoutercontentsection';
import ServicePageFinalCTAInnerFormSection from '../Service Page Final CTA Section/Finalctainnerformsection';

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

    const [configureServicePageInnerFinalCtaFormSection, setConfigureServicePageInnerFinalCtaFormSection] = useState({

        transform: "scaleX(0)",
        opacity: "0",
        filter: "blur(50px)"

    }); // Final CTA Inner Form Section

    const [configureFinalCTAFormStyle, setConfigureFinalCTAFormStyle] = useState({

        transform: "translateX(2000px)",
        opacity: "0",
        filter: "blur(50px)"

    }); // Final CTA Form 
    
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

            height: "200vh",
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

        // Final CTA Inner Form Section 
        setConfigureServicePageInnerFinalCtaFormSection({

            transform: "scaleX(1)",
            transition: "all 1s ease",
            opacity: "1",
            filter: "blur(0px)"

        });

        // Final CTA Form 
        setConfigureFinalCTAFormStyle({

            transform: "translateX(0px)",
            filter: "blur(0px)",
            opacity: "1",
            transition: "all 0.8s ease 0.8s" 

        });

    }
    
    return (

        <>
        
            {/** Service Page Final CTA Section */}
            <div className={ServicePageStyle.servicePageFinalCtaSection} style={configureServicePageFinalCtaSectionStyle}>

                {/** Final CTA Content Box */}
                <ServicePageFinalCTAOuterContentSection
                
                    ServicePageStyle={ServicePageStyle}
                    handleClickRequestConsultation={handleClickRequestConsultation}
                    configureServicePageFinalCtaContentBoxStyle={configureServicePageFinalCtaContentBoxStyle}
                    
                />

                {/** Final CTA Main Inner Form Section */}
                <ServicePageFinalCTAInnerFormSection
                
                    ServicePageStyle={ServicePageStyle}
                    configureFinalCtaMainFormSectionStyle={configureFinalCtaMainFormSectionStyle}
                    configureFinalCtaInnerFormTitleSection={configureFinalCtaInnerFormTitleSection}
                    configureFinalCtaFormSpanTitleStyle={configureFinalCtaFormSpanTitleStyle}
                    configureFinalCtaFormMainTitleStyle={configureFinalCtaFormMainTitleStyle}
                    configureServicePageInnerFinalCtaFormSection={configureServicePageInnerFinalCtaFormSection}
                    configureFinalCTAFormStyle={configureFinalCTAFormStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Finalctasection;