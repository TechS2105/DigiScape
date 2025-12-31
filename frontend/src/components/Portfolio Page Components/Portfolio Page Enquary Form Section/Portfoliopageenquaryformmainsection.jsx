import React, { useState } from 'react';
import PortfolioEnquiryFormTitleSection from '../Portfolio Page Enquary Form Section/Portfoliopageenquiryformtitlesection';
import PortfolioPageEnquiryFormSection from '../Portfolio Page Enquary Form Section/Portfoliopageenquiryformsection';

function Portfoliopageenquaryformmainsection({ PortfolioPageStyle }) {
    
    const [configurePortfolioMainSectionHeight, setConfigurePortfolioMainSectionHeight] = useState({

        height: "100vh"

    }); // Enquary Form Main Section

    const [configureEnquaryTitleSectionHeight, setConfigureEnquaryTitleSectionHeight] = useState({

        height: "100%"

    }); // Enquary Form Title Section

    const [configureEnquaryHeadingStyle, setConfigureEnquaryHeadingStyle] = useState({

        fontSize: "120px",
        lineHeight: "120px",
        marginBottom: "10px"

    }) // Enquary Form Title Section Title

    const [configureButtonStyle, setConfigureButtonStyle] = useState({

        transition: 'scale(1)',
        opacity: "1",
        filter: "blur(0px)"

    }); // Enquary Form Title Section Button

    const [configureSpanTextStyle, setConfigureSpanTextStyle] = useState({

        transition: "all 0.8s ease",
        color: "var(--secondary-color)"

    }); // Enquary Form Title Section Sapn Text

    const [configureEnquaryFormSectionStyle, setConfigureEnquaryFormSectionStyle] = useState({

        height: "0%",
        opacity: "0",
        filter: "blur(20px)",
        backgroundColor: "#292929"

    }); // Enquirty Form Section

    const [configureEnquiryFormStyle, setConfigureEnquiryFormStyle] = useState({

        transform: "scale(0)",
        opacity: "0"

    }); // Enquiry Form 


    {/** Handle Click Event On Project Consultation Section */}
    function handleProjectConsultationSection() {
        
        // Enquary Form Main Section
        setConfigurePortfolioMainSectionHeight({

            height: "170vh",
            transition: "all 0.8s ease",
            backgroundColor: "#ffffffff"

        });

        // Enquary Form Title Section
        setConfigureEnquaryTitleSectionHeight({

            height: "40%",
            transition: "all 0.8s ease",

        });

        // Enquary Form Title Section Title
        setConfigureEnquaryHeadingStyle({

            fontSize: "100px",
            lineHeight: "100px",
            color: "var(--third-color)",
            transition: "all 0.8s ease",
            marginBottom: "-180px",

        });

        // Enquary Form Title Section Button
        setConfigureButtonStyle({

            transform: "scale(0)",
            transition: 'all 0.8s ease',
            opacity: "0",
            filter: "blur(0px)",

        });

        // Enquary Form Title Section Span Text
        setConfigureSpanTextStyle({

            color: "var(--third-color)",
            transition: 'all 0.8s ease',

        });

        // Form Section
        setConfigureEnquaryFormSectionStyle({

            height: "60%",
            opacity: "1",
            filter: "blur(0px)",
            transition: "all 0.8s ease",
            backgroundColor: "#ffffff"

        });

        // Form 
        setConfigureEnquiryFormStyle({

            transform: "scale(1)",
            opacity: "1",
            transition: "all 0.8s ease"

        });

    }
    
    return (

        <>
        
            {/** Portfolio Page Enquary Form Main Section */}
            <div className={PortfolioPageStyle.portfolioEnquaryFormMainSection} style={configurePortfolioMainSectionHeight}>

                {/** Enquary Title Section */}
                <PortfolioEnquiryFormTitleSection
                
                    PortfolioPageStyle={PortfolioPageStyle}
                    configureEnquaryTitleSectionHeight={configureEnquaryTitleSectionHeight}
                    configureSpanTextStyle={configureSpanTextStyle}
                    configureEnquaryHeadingStyle={configureEnquaryHeadingStyle}
                    handleProjectConsultationSection={() => (handleProjectConsultationSection())}
                    configureButtonStyle={configureButtonStyle}
                    
                />

                {/** Enquary Form Section Main Form Div*/}
                <PortfolioPageEnquiryFormSection
                
                    PortfolioPageStyle={PortfolioPageStyle}
                    configureEnquaryFormSectionStyle={configureEnquaryFormSectionStyle}
                    configureEnquiryFormStyle={configureEnquiryFormStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Portfoliopageenquaryformmainsection;