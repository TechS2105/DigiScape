import React from "react";
// import PageLoader from '../components/Page Loader Component/Pageloader';
import HomeBanner from "../components/Home Banner Component/Homebanner";
import MarqueeTextScroller from "./Home Marquee Text Scroller Component/Marqueetextscroller";
import QuickView from "../components/Home Quickoverview Component/Quickview";
import HomeAbout from '../components/Home About Section Component/Homeabout';
import HomeCreativeStudio from '../components/Home Creative Studio Component/Homecreativestudio';
import HomeHowWeWork from '../components/Home How We Work Component/Howwework';
import HomeSecondTextScroller from '../components/Home Second Text Scroller Component/Homesecondtextscroller';
import HomeServices from '../components/Home Services Component/Homeservices';
import HomeMissionVission from './Home Mission and Vission Component/Missionvission';
import HomePortfolioSection from './Home Portfolio Component/Homeportfolio';
import HomeWhyChooseUs from './Home Why Choose Us Component/Whychooseus';
import HomeTestimonial from './Testimonial Component/Testimonial';
import HomeFaqSection from '../components/Home FAQ Folder Component/Homefaqsection';

function Home() {

    return (
      
      <>
          <main>
          
            {/** Page Loader */}
            {/* <PageLoader /> */}

            {/** Home Hero/Banner Section */}
            <HomeBanner />
          
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
          
            {/** Home Portfolio Section */}
            <HomePortfolioSection />

            {/** Home Why Choose Us Section */}
            <HomeWhyChooseUs />
          
            {/** Home Testimonial */}
            <HomeTestimonial />
          
            {/** Home FAQ Section */}
            <HomeFaqSection />
              
          </main>
          
      </>
      
    );
    
}

export default Home;
