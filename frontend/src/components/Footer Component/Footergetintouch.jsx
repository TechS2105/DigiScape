import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footergetintouch({FooterStyle}) {
    
    return (

        <>
        
            {/** Footer Get In Touch Section */}
            <div className={FooterStyle.footerGetInTouch}>

                {/** Get In Touch Title */}
                <div className={FooterStyle.footerGetInTouchTitle}>

                    <h4> Get In Touch </h4>

                </div>

                {/** Get In Touch Details */}
                <div className={FooterStyle.getInTouchDetails}>

                    <ul>

                        <li>Email: digiscape.official@gmail.com</li>
                        <li>Mobile: +91 88432 88323</li>
                        <li>WhatsApp: +91 23235 33223</li>

                    </ul>

                    {/** Social Links */}
                    <div className={FooterStyle.footerSocialLinks}>

                        <ul>

                            <li><a href='#'><FaFacebookF /></a></li>
                            <li><a href='#'><FaInstagram /></a></li>
                            <li><a href='#'><FaLinkedinIn /></a></li>
                            <li><a href='#'><FaXTwitter /></a></li>

                        </ul>

                    </div>

                </div>

            </div>
            
        </>

    );

}

export default Footergetintouch;