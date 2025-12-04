import React from 'react';
import FooterCopyrightText from '../Footer Component/Footercopyrighttext';

function Footercopyrightsection({FooterStyle, currentYear}) {
    
    return (

        <>
        
            {/** Copyright Section */}
            <div className={FooterStyle.copyrightSection}>
            
                <FooterCopyrightText
                
                    currentYear={currentYear}
                    copyrightText1="Copyright &copy;"
                    copyrightText2="All rights reserved"
                    logoText="DigiScape"

                    
                />
            
            </div>
            
        </>

    );

}

export default Footercopyrightsection;