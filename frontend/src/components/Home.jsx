import React from 'react';
import HomeBanner from '../components/Home Banner Component/Homebanner';
import MarqueeTextScroller from '../components/Marquee Text Scroller Component/Marqueetextscroller';
import HomeStyle from '../../public/styles/home files/Home.module.css';

function Home() {
    
    return (

        <>
        
            <main>

                <HomeBanner
                
                    HomeStyle={HomeStyle}
                    
                />

                <MarqueeTextScroller />

            </main>
            
        </>

    );

}

export default Home;