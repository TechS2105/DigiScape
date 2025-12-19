import React from 'react';
import HomeAboutStyle from '../../../public/styles/home about section files/homeabout.module.css';
import HomeAboutImage from '../Home About Section Component/Homeaboutimage';
import HomeAboutContent from '../Home About Section Component/Homeaboutcontent';

let fImage = "/images/Home About Images/about_image1.png";
let sImage = "/images/Home About Images/about_image2.png";

function Homeabout() {
    
    return (

        <>
        
            <div className={HomeAboutStyle.aboutDiv}>
                
                {/** Home about section outer image div */}
                <div className={HomeAboutStyle.aboutImageDiv}>

                    {/** Home about section inner first image div */}
                    <div className={HomeAboutStyle.innerImageDiv}>

                        <HomeAboutImage
                        
                            image={fImage}
                            altText="Office Person Image"
                            
                        />

                    </div>

                    {/** Home about section inner second image div */}
                    <div className={HomeAboutStyle.innerSecondImageDiv}>

                        <HomeAboutImage
                        
                            image={sImage}
                            altText="Office Person Image"
                            
                        />

                    </div>

                </div>

                {/** About section content div */}
                <div className={HomeAboutStyle.aboutContentDiv}>

                    <HomeAboutContent
                    
                        HomeAboutStyle={HomeAboutStyle}
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Homeabout;