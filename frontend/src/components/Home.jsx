import React from "react";
import HomeBanner from "../components/Home Banner Component/Homebanner";
import MarqueeTextScroller from "./Home Marquee Text Scroller Component/Marqueetextscroller";
import HomeStyle from "../../public/styles/home files/Home.module.css";
import QuickView from "../components/Home Quickoverview Component/Quickview";
import HomeAbout from '../components/Home About Section Component/Homeabout';
import HomeCreativeStudio from '../components/Home Creative Studio Component/Homecreativestudio';
import HomeHowWeWork from '../components/Home How We Work Component/Howwework';
import HomeSecondTextScroller from '../components/Home Second Text Scroller Component/Homesecondtextscroller';
import HomeServices from '../components/Home Services Component/Homeservices';
import HomeMissionVission from './Home Mission and Vission Component/Missionvission';

function Home() {

    return (
      
    <>
          <main>
          
            {/** Home Hero/Banner Section */}
            <HomeBanner
                    
                HomeStyle={HomeStyle}
                    
            />
          
            {/** Home First Text Scroller Section */}
            <MarqueeTextScroller />

            {/** Home About Section */}
            <HomeAbout />    

            {/**  Home Quick View Section */}
            <QuickView />  
          
            {/** Home Creative Studio Section */}
            <HomeCreativeStudio />
            
            {/** Home How We Work Strategy Section */}
            <HomeHowWeWork />
          
            {/** Home Second Text Scroller Section */}
            <HomeSecondTextScroller />

            {/** Home Services Section  */}
            <HomeServices />
          
            {/** Home Mission and Vission */}
            <HomeMissionVission />
              
          </main>
          
      </>
      
    );
    
}

export default Home;
