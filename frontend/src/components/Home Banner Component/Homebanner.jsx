import React, {useState, useEffect} from 'react';
import HomeBannerStyle from '../../../public/styles/home banner files/Homebanner.module.css';
import HomeBannerNavigation from '../Home Banner Component/Homebannernavigation';
import HomeBannerCarousel from '../Home Banner Component/Homeswiper';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

function Homebanner() {

    const [getBannerContent, setGetBannerContent] = useState([]);

    useEffect(() => {

        const bannerContent = async () => {

            try { 

                const res = await fetch('http://localhost:3000/api/home/banner');

                if(!res.ok){

                    throw new Error(`HTTP! Server response status is ${res.status}`);

                }

                let data = await res.json();
                setGetBannerContent(data);

            } catch (error) {
                
                console.log(error);

            }

        }

        bannerContent();

     }, []);
    
    return (

        <>
        
            {/** Home Banner Main Section */}
            <div className={HomeBannerStyle.bannerMainSection}>

              {/** Home Banner Carousel */}
                <HomeBannerCarousel
                
                    HomeBannerStyle={HomeBannerStyle}
                    getBannerContent={getBannerContent}
                    
                />

                {/** Home Banner Navigation Section */}
                <div className={HomeBannerStyle.bannerNavigationSection}>

                    <HomeBannerNavigation
                    
                        HomeBannerStyle={HomeBannerStyle}
                        prevArrow={<IoIosArrowBack />}
                        nextArrow={<IoIosArrowForward />}
                        
                    />

                </div>

            </div>
            
        </>

    );

}

export default Homebanner;