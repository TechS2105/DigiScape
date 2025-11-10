import React, {useEffect} from 'react';
import PageLoaderStyle from '../../../public/styles/page loader files/pageloader.module.css';

function Pageloader() {
    
    useEffect(() => {

        // let pageLoaderMainDiv = document.querySelector(`.${PageLoaderStyle.pageLoaderMainSection}`); // Page Loader Main Div
        let pageLoaderInnerDiv = document.querySelector(`.${PageLoaderStyle.pageLoaderInnerBox}`); // Page Loader Inner Div
        let welcomeDiv = document.querySelector(`.${PageLoaderStyle.pageLoaderWelcomeDiv}`); // Weolcome Div
        let welcomeDivText = document.querySelector(`.${PageLoaderStyle.pageLoaderWelcomeDiv} p`); // Welcome Div Text
        let digiscapeBox = document.querySelectorAll(`.${PageLoaderStyle.pageLoaderDigiscapeDiv} .${PageLoaderStyle.digiscapeBox}`); // Digiscape box
        let digiscapeBoxText = document.querySelectorAll(`.${PageLoaderStyle.digiscapeBox} span`); // Digiscape box text
        let digiscapeQuoteDiv = document.querySelector(`.${PageLoaderStyle.pageLoaderDigiscapeQuoteDiv} p`);

        // Sliding up the page loader main div
        pageLoaderInnerDiv.style.transform = "translateY(-100vh)";

        // Zooming out welcome div 
        welcomeDiv.style.transform = "scaleY(0) translate(-50%, -50%)";
        welcomeDiv.style.opacity = "0";
        welcomeDiv.style.filter = "blur(20px)";

        // Zooming out welcome div text
        welcomeDivText.style.transform = "scaleX(0)";
        welcomeDivText.style.opacity = "0";
        welcomeDivText.style.filter = "blur(20px)";

        // Zooming Out Digiscape quote div
        digiscapeQuoteDiv.style.transform = "scaleX(0)";
        digiscapeQuoteDiv.style.filter = "blur(20px)";

        // Selecting Digiscape div odd and even inner boxes and sliding them up and down words
        digiscapeBox.forEach((item, id) => {

            if (id % 2 === 1) {
                
                item.style.transform = `translateY(-${1000 + (id + 5)}px)`;
                item.style.opacity = "0";

            } else {
                
                item.style.transform = `translateY(${1000 + (id + 5)}px)`;
                item.style.opacity = "0";

            }

        });

        // Selecting Digiscape div odd and even inner box text's
        digiscapeBoxText.forEach((txt, id) => {

            if (id % 2 === 1) {
                
                txt.style.transform = `translateX(${id + 200}px)`;
                txt.style.opacity = "0";
                txt.style.filter = "blur(20px)";

            } else {
                
                txt.style.transform = `translateX(-${id + 200}px)`;
                txt.style.opacity = "0";
                txt.style.filter = "blur(20px)";

            }

        })
        
        window.addEventListener("load", () => {

            requestAnimationFrame(() => {

                // Keep center the page loader main div 
                pageLoaderInnerDiv.style.transform = "translateY(0)";
                pageLoaderInnerDiv.style.transition = "all 0.8s ease";

                // Zoom in welcome div
                welcomeDiv.style.transform = "scaleY(1) translate(-50%, -50%)";
                welcomeDiv.style.opacity = "1";
                welcomeDiv.style.filter = "blur(0px)"
                welcomeDiv.style.transition = "all 0.8s ease 0.5s";

                // Zoom in welcome div text
                welcomeDivText.style.transform = "scaleX(1)";
                welcomeDivText.style.opacity = "1";
                welcomeDivText.style.filter = "blur(0px)";
                welcomeDivText.style.transition = "all 0.8s ease 1s";

                // Selecting digiscape div odd and even inner boxes and keep them center align
                digiscapeBox.forEach((item, id) => {

                    if (id % 2 === 1) {
                        
                        item.style.transform = `translateY(0)`;
                        item.style.transition = `all 3s ease ${id * 0.2}s`;
                        item.style.opacity = "1";

                    } else {
                        
                        item.style.transform = `translateY(0)`;
                        item.style.opacity = "1";
                        item.style.filter = "blur(0px)";
                        item.style.transition = `all 2s ease ${id * 0.3}s`;

                    }

                });

                // Selecting Digiscape div odd and even inner boxes text and keep them center align
                digiscapeBoxText.forEach((txt, id) => {

                    if (id % 2 === 1) {
                        
                        txt.style.transform = `translateX(0)`;
                        txt.style.opacity = "1";
                        txt.style.filter = "blur(0px)";
                        txt.style.transition = `all 2s ease ${id * 0.3}s`;

                    } else {
                        
                        txt.style.transform = `translateX(0)`;
                        txt.style.opacity = "1";
                        txt.style.filter = "blur(0px)";
                        txt.style.transition = `all 2s ease ${id * 0.4}s`;

                    }

                });

                // Zoom In Digiscape quote div
                digiscapeQuoteDiv.style.transform = "scale(1)";
                digiscapeQuoteDiv.style.filter = "blur(0px)";
                digiscapeQuoteDiv.style.transition = "all 2s ease 4s";

            });

            /** Use setTimeOut */
            // setTimeout(() => {

                // Sliding down the page loader inner div
                // pageLoaderInnerDiv.style.transform = "translateY(100vh)";


            // }, 5000);

            // setTimeout(() => {

                // Sliding up the the page loader main div
                // pageLoaderMainDiv.style.opacity = "0";
                // pageLoaderMainDiv.style.transform = "translateY(-100vh)";
                // pageLoaderMainDiv.style.transition = "all 0.8s ease";
                

            // }, 5800);

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