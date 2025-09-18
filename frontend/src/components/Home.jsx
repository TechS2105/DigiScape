import React from 'react';
import HomeBanner from '../components/Home Banner Component/Homebanner';
import HomeStyle from '../../public/styles/home files/Home.module.css';

function Home() {
    
    return (

        <>
        
            <main>

                <HomeBanner
                
                    HomeStyle={HomeStyle}
                    
                />

            </main>
            
        </>

    );

}

export default Home;