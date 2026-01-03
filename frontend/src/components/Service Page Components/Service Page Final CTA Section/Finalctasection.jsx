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

            height: "100vh",
            transition: "all 0.8s ease"

        })

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

            </div>
            
        </>

    );

}

export default Finalctasection;