import React from 'react';
import FooterStyle from '../../../public/styles/footer files/Footer.module.css';
import FooterCopyrightSection from '../Footer Component/Footercopyrightsection';

let date = new Date(); // call new date object
let currentYear = date.getFullYear(); // get current year

function Footer() {
    
    return (

        <>
        
            {/** Footer */}
            <div className={FooterStyle.footerSection}>

                {/** Links Section */}
                <div className={FooterStyle.footerLinks}>



                </div>

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