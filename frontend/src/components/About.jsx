import React from 'react';
import AboutSection from '../components/About Page Components/About Page About Section/Aboutsection';
import AboutSectionStyle from '../../public/styles/about page styles files/Aboutpage.module.css';

function About() {
    
    return (

        <>
        
            {/** About Section */}
            <AboutSection
            
                AboutSectionStyle={AboutSectionStyle}
                
            />
            
        </>

    );

}

export default About;