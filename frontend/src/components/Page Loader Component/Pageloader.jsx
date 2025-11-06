import React, {useEffect} from 'react';
import PageLoaderStyle from '../../../public/styles/page loader files/pageloader.module.css';

function Pageloader() {

    useEffect(() => {

        /** Hide Body Overfolow */
        let bdy = document.querySelector("body");
       
        /** Third Page Load Box */
        let thirdPageLoaderBox = document.querySelector(`.${PageLoaderStyle.pageLoaderThirdSection}`);
        let thirdPageLoaderInnerBox = document.querySelectorAll(`.${PageLoaderStyle.pageLoaderThirdSection} .${PageLoaderStyle.welcomeBox}`);
        let thirdPageLoaderInnerBoxLength = thirdPageLoaderInnerBox.length;

        /** Sliding Up Third Page Loader Box  */
        thirdPageLoaderBox.style.transform = "translateY(-100vh)";

        /** Second Page Load Box */
        let secondPageLoaderBox = document.querySelector(`.${PageLoaderStyle.pageLoaderSecondSection}`);
        let secondPageLoaderInnerBox = document.querySelectorAll(`.${PageLoaderStyle.pageLoaderSecondSection} .${PageLoaderStyle.toBox}`);
        let secondPageLoaderInnerBoxLength = secondPageLoaderInnerBox.length;

        /** Sliding Up Second Page Loader Box */
        secondPageLoaderBox.style.transform = "translateY(-100vh)";

        /** First Page Load Box */
        let firstPageLoaderBox = document.querySelector(`.${PageLoaderStyle.pageLoaderFirstSection}`);
        let firstPageLoaderInnerBox = document.querySelectorAll(`.${PageLoaderStyle.pageLoaderFirstSection} .${PageLoaderStyle.digiscapeBox}`);
        let firstPageLoaderInnerBoxLength = firstPageLoaderInnerBox.length;

        /** Sliding Up Second Page Loader Box */
        firstPageLoaderBox.style.transform = "translateY(-100vh)";


        /** Third Page Loader Box For-Loop */
        for (let i = 0; i < thirdPageLoaderInnerBoxLength; i++){

            thirdPageLoaderInnerBox[i].style.transform = `translateY(-${1000 + (i + 5)}px)`;
            thirdPageLoaderInnerBox[i].style.opacity = "0";

        }

        /** Second Page Loader Box For-Loop */
        for (let i = 0; i < secondPageLoaderInnerBoxLength; i++){

            secondPageLoaderInnerBox[0].style.transform = "translateX(-500px)";
            secondPageLoaderInnerBox[0].style.opacity = "0";

            secondPageLoaderInnerBox[1].style.transform = "translateX(500px)";
            secondPageLoaderInnerBox[1].style.opacity = "0";

        }
        
        window.addEventListener('load', () => {

            /** Hide Body Scroll */
            bdy.style.overflow = "hidden";

            // Use Request Animation Frame
            requestAnimationFrame(() => {

                /** Keep Center Third Page Loader Box */
                thirdPageLoaderBox.style.transform = "translateY(0)";
                thirdPageLoaderBox.style.transition = "all 0.8s ease";

                /** Keep Center Third Page Loader Inner Boxes */
                for (let i = 0; i < thirdPageLoaderInnerBoxLength; i++){

                    thirdPageLoaderInnerBox[i].style.transform = "translateY(0px)";
                    thirdPageLoaderInnerBox[i].style.transition = `all 2s ease ${i * 0.17}s`;
                    thirdPageLoaderInnerBox[i].style.backgroundColor = "#ffffffff";
                    thirdPageLoaderInnerBox[i].style.opacity = "1";

                }

                /** Keep Center Second Page Loader Box */
                secondPageLoaderBox.style.transform = "translateY(0)";
                secondPageLoaderBox.style.transition = "all 0.8s ease 4.5s";

                /** Keep Center Second Page Loader Inner Boxes */
                for (let i = 0; i < secondPageLoaderInnerBoxLength; i++){

                    secondPageLoaderInnerBox[0].style.transform = "translateX(0px)";
                    secondPageLoaderInnerBox[0].style.transition = "all 1s ease 5.2s";
                    secondPageLoaderInnerBox[0].style.opacity = "1";

                    secondPageLoaderInnerBox[1].style.transform = "translateX(0px)";
                    secondPageLoaderInnerBox[1].style.transition = "all 1s ease 5.2s";
                    secondPageLoaderInnerBox[1].style.opacity = "1";

                }

                // Use SetTimeOut For Third Page Loader Box
                setTimeout(() => {

                    thirdPageLoaderBox.style.transform = "translateY(100vh)";
                    thirdPageLoaderBox.style.transition = "all 0.8s ease 2s";

                    for (let i = 0; i < thirdPageLoaderInnerBoxLength; i++) {

                        thirdPageLoaderInnerBox[i].style.transform = `translateY(${1000 + (i + 5)}px)`;
                        thirdPageLoaderInnerBox[i].style.transition = `all 2s ease ${i * 0.17}s`;
                        thirdPageLoaderInnerBox[i].style.opacity = "0";

                    }

                }, 3000);

                // Use SetTimeOut For Second Page Loader Box
                setTimeout(() => {

                    secondPageLoaderBox.style.transform = "translateY(100vh)";
                    secondPageLoaderBox.style.transition = "all 0.8s ease 3s";

                    for (let i = 0; i < secondPageLoaderInnerBoxLength; i++) {

                        secondPageLoaderInnerBox[0].style.transform = "translateY(-1000px)";
                        secondPageLoaderInnerBox[0].style.transition = "all 2s ease";
                        secondPageLoaderInnerBox[0].style.opacity = "0";
                        
                        secondPageLoaderInnerBox[1].style.transform = "translateY(1000px)";
                        secondPageLoaderInnerBox[1].style.transition = "all 2s ease";
                        secondPageLoaderInnerBox[1].style.opacity = "0";

                    }

                }, 6500);

            });

        })

    }, []);
    
    return (

        <>
        
            {/** Page Loader Main Section */}    
            <div className={PageLoaderStyle.pageLoaderMainSection}>

                {/** Page Loader DigiScape Text Section */}
                <div className={PageLoaderStyle.pageLoaderFirstSection}>

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

                {/**  Page Loader TO Text Section*/}
                <div className={PageLoaderStyle.pageLoaderSecondSection}>

                    <div className={PageLoaderStyle.toBox}><span>T</span></div>
                    <div className={PageLoaderStyle.toBox}><span>O</span></div>

                </div>

                {/** Page Losader Welcome Text Section */}
                <div className={PageLoaderStyle.pageLoaderThirdSection}>

                    <div className={PageLoaderStyle.welcomeBox}><span>W</span></div>
                    <div className={PageLoaderStyle.welcomeBox}><span>E</span></div>
                    <div className={PageLoaderStyle.welcomeBox}><span>L</span></div>
                    <div className={PageLoaderStyle.welcomeBox}><span>C</span></div>
                    <div className={PageLoaderStyle.welcomeBox}><span>O</span></div>
                    <div className={PageLoaderStyle.welcomeBox}><span>M</span></div>
                    <div className={PageLoaderStyle.welcomeBox}><span>E</span></div>

                </div>

            </div>
            
        </>

    );

}

export default Pageloader;