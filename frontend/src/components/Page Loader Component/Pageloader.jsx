import React, {useEffect} from 'react';
import PageLoaderStyle from '../../../public/styles/page loader files/pageloader.module.css';

function Pageloader() {

    useEffect(() => {
       
        let thirdPageLoaderBox = document.querySelector(`.${PageLoaderStyle.pageLoaderThirdSection}`);
        let thirdPageLoaderInnerBox = document.querySelectorAll(`.${PageLoaderStyle.pageLoaderThirdSection} .${PageLoaderStyle.welcomeBox}`);
        let thirdPageLoaderInnerBoxLength = thirdPageLoaderInnerBox.length;

        thirdPageLoaderBox.style.transform = "translateY(-30vh)";

        for (let i = 0; i < thirdPageLoaderInnerBoxLength; i++){

            thirdPageLoaderInnerBox[i].style.transform = `translateY(-${1000 + (i + 5)}px)`;

        }

        window.addEventListener('load', () => {

            // Use Request Animation Frame
            requestAnimationFrame(() => {

                thirdPageLoaderBox.style.transform = "translateY(0)";
                thirdPageLoaderBox.style.transition = "all 0.8s ease";

                for (let i = 0; i < thirdPageLoaderInnerBoxLength; i++){

                    thirdPageLoaderInnerBox[i].style.transform = "translateY(0)";
                    thirdPageLoaderInnerBox[i].style.transition = `all 2s ease ${i * 0.2}s`;
                    thirdPageLoaderInnerBox[i].style.backgroundColor = "#ffffffff";

                }

             });

        })

    }, []);
    
    return (

        <>
        
            {/** Page Loader Main Section */}    
            <div className={PageLoaderStyle.pageLoaderMainSection}>

                {/** Page Loader DigiScape Text Section */}
                <div className={PageLoaderStyle.pageLoaderFirstSection}>

                    

                </div>

                {/**  Page Loader TO Text Section*/}
                <div className={PageLoaderStyle.pageLoaderSecondSection}>

                    

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