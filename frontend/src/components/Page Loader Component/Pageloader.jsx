import React, {useEffect} from 'react';
import PageLoaderStyle from '../../../public/styles/page loader files/pageloader.module.css';

function Pageloader() {
    
    useEffect(() => {

        let pageLoaderMainDiv = document.querySelector(`.${PageLoaderStyle.pageLoaderMainSection}`); // Page Loader Main Div
        let pageLoaderInnerDiv = document.querySelector(`.${PageLoaderStyle.pageLoaderInnerBox}`); // Page Loader Inner Div
        let welcomeDiv = document.querySelector(`.${PageLoaderStyle.pageLoaderWelcomeDiv}`); // Weolcome Div
        let welcomeDivText = document.querySelector(`.${PageLoaderStyle.pageLoaderWelcomeDiv} p`); // Welcome Div Text

        pageLoaderInnerDiv.style.transform = "translateY(-100vh)";
        
        window.addEventListener("load", () => {

            requestAnimationFrame(() => {

                pageLoaderInnerDiv.style.transform = "translateY(0)";
                pageLoaderInnerDiv.style.transition = "all 0.8s ease";

            });

            /** Use setTimeOut for end the animation */
            setTimeout(() => {

                pageLoaderInnerDiv.style.transform = "translateY(100vh)";


            }, 5000);

            setTimeout(() => {

                pageLoaderMainDiv.style.opacity = "0";
                pageLoaderMainDiv.style.transform = "translateY(-100vh)";
                pageLoaderMainDiv.style.transition = "all 0.8s ease";
                

            }, 5500);

        });
        

    }, []);

    return (

        <>
        
            {/** Page Loader Main Section */}
            <div className={PageLoaderStyle.pageLoaderMainSection}>

                {/** Page Loader Main Section Inner Box */}
                <div className={PageLoaderStyle.pageLoaderInnerBox}>

                    {/** Welcome Div */}                    
                    <div className={PageLoaderStyle.pageLoaderWelcomeDiv}>

                        {/** Text */}
                        <p> Welcome To </p>

                    </div>

                    {/** DigiScape Div */}
                    <div className={PageLoaderStyle.pageLoaderDigiscapeDiv}>

                        {/** Text */}
                        <div className={PageLoaderStyle.digiscapeBox}><span>D</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>I</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>G</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>I</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>S</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>C</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>A</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>P</span></div>
                        <div className={PageLoaderStyle.digiscapeBox}><span>E</span></div>

                    </div>

                    {/** DigiScape Quote */}
                    <div className={PageLoaderStyle.pageLoaderDigiscapeQuoteDiv}>

                        <p> Empowers brands to rise above the noise transforming ideas into impactful digital stories that inspire engagement & drive real results.</p>

                    </div>

                </div>


            </div>

        </>

    );

}

export default Pageloader;