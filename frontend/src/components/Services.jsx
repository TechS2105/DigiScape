import React from 'react';
import ServicePageMainSection from '../components/Service Page Components/Service Page Main Section/Servicepagemainsection';
import ServicePageStyle from '../../public/styles/service page styles files/Servicepage.module.css';

function Services() {
    
    return (

        <main>

            {/** Service Page Main Section */}
            <ServicePageMainSection
            
                ServicePageStyle={ServicePageStyle}
                
            />

        </main>

    );

}

export default Services;