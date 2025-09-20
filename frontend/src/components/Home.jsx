import React from "react";
import HomeBanner from "../components/Home Banner Component/Homebanner";
import MarqueeTextScroller from "./Home Marquee Text Scroller Component/Marqueetextscroller";
import HomeStyle from "../../public/styles/home files/Home.module.css";
import QuickView from "../components/Home Quickoverview Component/Quickview";
import HomeAbout from '../components/Home About Section Component/Homeabout';

function Home() {

    return (
      
    <>
          <main>
              
            <HomeBanner
                    
                HomeStyle={HomeStyle}
                    
            />
            <MarqueeTextScroller />
            <HomeAbout />    
            <QuickView />    
              
          </main>
          
      </>
      
    );
    
}

export default Home;
