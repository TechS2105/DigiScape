import React from 'react';
import FooterStyle from '../../../public/styles/footer files/Footer.module.css';
import FooterCopyrightSection from '../Footer Component/Footercopyrightsection';
import FooterLInkSection from '../Footer Component/Footerlinksection';

let date = new Date(); // call new date object
let currentYear = date.getFullYear(); // get current year

function Footer() {
    
    return (

        <>
        
            {/** Footer */}
            <div className={FooterStyle.footerSection}>

                {/** Links Section */}
                <FooterLInkSection
                
                    FooterStyle={FooterStyle}
                    
                />

                {/** Copyright Section */}
                <FooterCopyrightSection
                
                    FooterStyle={FooterStyle}
                    currentYear={currentYear}
                    
                />

            </div>

        </>

    );

}

export default Footer;