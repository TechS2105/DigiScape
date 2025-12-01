import React, {useState} from 'react';
import ContactFormStyle from '../../../public/styles/contact form files/Contactform.module.css';
import ContactGetInTouchSection from '../Contact Form Component/Contactgetintouchsection';
import ContactFormSection from '../Contact Form Component/Contactdetailsform';

function Contactfrom() {

    /** Contact From Section */
    const [hideContactFromSection, setHideContactFromSection] = useState({

        transform: "translateX(2000px)",
        opacity: "0",
        filter: "blur(100px)"

    });

    /** Contact From Image  */
    const [imageAnime, setImageAnime] = useState({

        transform: "scale(0)",
        opacity: "0",
        filter: "brightness(0%)"

    });

    /** Contact From Span Title */
    const [contactFormSpanTitleAnime, setContactFormSpanTitleAnime] = useState({

        transform: "scaleY(0)",
        opacity: "0",
        filter: "blur(20px)",

    });

    /** Contact From Title */
    const [contactFormTitleAnime, setContactFormTitleAnime] = useState({

        transform: "scaleY(0)",
        opacity: "0",
        filter: "blur(20px)",

    });

    /** Contact Form  */
    const [getInTouchFormAnime, setGetInTouchFormAnime] = useState({

        transform: "translateY(1000px)",
        opacity: "0",
        filter: "blur(50px)",

    })

    /** Handle Contact Form Animation */
    function handleContactFromSection() {
        
        // Unhide Contact From 
        setHideContactFromSection({

            transform: "translateX(0px)",
            opacity: '1',
            filter: "blur(0)",
            transition: 'all 0.8s ease',

        });

        // Contact From Image
        setImageAnime({

            transform: "scale(1)",
            transition: "all 1s ease 0.5s",
            opacity: "1",
            filter: "brightness(170%)",

        });

        // Span Title
        setContactFormSpanTitleAnime({

            transform: "scaleY(1)",
            opacity: "1",
            transition: 'all 0.8s ease 0.7s',
            filter: "blur(0px)"

        });

        // Title
        setContactFormTitleAnime({

            transform: "scaleY(1)",
            opacity: "1",
            transition: "all 0.8s ease 0.9s",
            filter: "blur(0px)",

        });

        // Contact Form
        setGetInTouchFormAnime({

            transform: "translateY(0px)",
            opacity: "1",
            transition: "all 0.8s ease 1.2s",
            filter: "blur(0px)",

        })

    }
    
    return (

        <>
        
            {/** Contact Form Main Section */}
            <div className={ContactFormStyle.contactFormMainSection}>

                {/** Contact Form Section */}
                <ContactFormSection
                
                    ContactFormStyle={ContactFormStyle}
                    hideContactFromSection={hideContactFromSection}
                    imageAnime={imageAnime}
                    contactFormSpanTitleAnime={contactFormSpanTitleAnime}
                    contactFormTitleAnime={contactFormTitleAnime}
                    getInTouchFormAnime={getInTouchFormAnime}
                    
                />

                {/** Contact Get In Touch Section */}
                <ContactGetInTouchSection

                    ContactFormStyle={ContactFormStyle}
                    handleContactFromSection={handleContactFromSection}
                    
                />


            </div>
            
        </>

    );

}

export default Contactfrom;