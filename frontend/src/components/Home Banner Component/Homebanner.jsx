import React from 'react';
import Container from '../Container Component/Container';
import HomeBannerContent from '../Home Banner Component/Homebannercontents';
import HomeBannerImage from '../Home Banner Component/Homebannerimages';

function Homebanner({HomeStyle}) {
    
    return (

        <>
        
            <Container>

                <div className={HomeStyle.bannerMainContainer}>

                    {/** Banner Sub Container */}
                    <div className={HomeStyle.bannerSubContainer}>

                        {/** Banner Content */}
                        <div className={HomeStyle.bannerContent}>

                            <HomeBannerContent />

                        </div>

                        {/** Banner Images */}
                        <div className={HomeStyle.bannerImage}>

                            <HomeBannerImage />

                        </div>

                    </div>

                </div>

            </Container>
            
        </>

    );

}

export default Homebanner;