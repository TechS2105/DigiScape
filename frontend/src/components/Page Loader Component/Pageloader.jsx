import React from 'react';
import PageLoaderStyle from '../../../public/styles/page loader files/pageloader.module.css';

function Pageloader() {
    
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