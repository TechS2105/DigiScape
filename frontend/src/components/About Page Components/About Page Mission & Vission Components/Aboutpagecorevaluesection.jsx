import React from 'react';
import { SiSitecore } from "react-icons/si";
import { RiCircleLine } from "react-icons/ri";
import AboutPageCoreValuesTitleSection from '../About Page Mission & Vission Components/Aboutpagecorevaluestitlesection';

function Aboutpagecorevaluesection({AboutSectionStyle}) {
    
    return (

        <>

            {/** About Page Core Value Section */}
            <div className={AboutSectionStyle.aboutPageCoreValueSection}>

                {/** About Page Core Value Section SVG Icon Div */}
                <div className={AboutSectionStyle.aboutPageCoreValueSVGIconDiv}>

                    <SiSitecore />

                </div>

                {/** About Page Core Value Section Content Div */}
                <div className={AboutSectionStyle.aboutPageCoreValueContentSection}>

                    {/** About Page Core Value Section Inner Content Div */}
                    <AboutPageCoreValuesTitleSection
                    
                        AboutSectionStyle={AboutSectionStyle}
                    
                    />

                    {/** About Page Core Value Section List Items */}
                    <div className={AboutSectionStyle.aboutPageCoreValueSectionListItemDiv}>

                        {/** Core Value Section Inner List Items Div */}
                        <div className={AboutSectionStyle.aboutPageCoreValueSectionInnerListItemDiv}>

                            <ul>

                                <li><RiCircleLine />Integrity: We are honest, transparent, and accountable in everything we do</li>
                                <li><RiCircleLine />Quality: We prioritize performance, precision, and consistency</li>
                                <li><RiCircleLine />Collaboration: We work as true partners, not just service providers</li>
                                <li><RiCircleLine />Innovation: We continuously learn, adapt, and improve our approach</li>
                                <li><RiCircleLine />Results: We measure success by real business outcomes and growth</li>

                            </ul>

                        </div>

                         {/** Core Value Section Inner List Items Div */}
                        <div className={AboutSectionStyle.aboutPageCoreValueSectionInnerListItemDiv}>

                            <ul>

                                <li><RiCircleLine />Integrity: We are honest, transparent, and accountable in everything we do</li>
                                <li><RiCircleLine />Quality: We prioritize performance, precision, and consistency</li>
                                <li><RiCircleLine />Collaboration: We work as true partners, not just service providers</li>
                                <li><RiCircleLine />Innovation: We continuously learn, adapt, and improve our approach</li>
                                <li><RiCircleLine />Results: We measure success by real business outcomes and growth</li>

                            </ul>

                        </div>

                         {/** Core Value Section Inner List Items Div */}
                        <div className={AboutSectionStyle.aboutPageCoreValueSectionInnerListItemDiv}>

                            <ul>

                                <li><RiCircleLine />Integrity: We are honest, transparent, and accountable in everything we do</li>
                                <li><RiCircleLine />Quality: We prioritize performance, precision, and consistency</li>
                                <li><RiCircleLine />Collaboration: We work as true partners, not just service providers</li>
                                <li><RiCircleLine />Innovation: We continuously learn, adapt, and improve our approach</li>
                                <li><RiCircleLine />Results: We measure success by real business outcomes and growth</li>

                            </ul>

                        </div>

                         {/** Core Value Section Inner List Items Div */}
                        <div className={AboutSectionStyle.aboutPageCoreValueSectionInnerListItemDiv}>

                            <ul>

                                <li><RiCircleLine />Integrity: We are honest, transparent, and accountable in everything we do</li>
                                <li><RiCircleLine />Quality: We prioritize performance, precision, and consistency</li>
                                <li><RiCircleLine />Collaboration: We work as true partners, not just service providers</li>
                                <li><RiCircleLine />Innovation: We continuously learn, adapt, and improve our approach</li>
                                <li><RiCircleLine />Results: We measure success by real business outcomes and growth</li>

                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        
        </>

    );

}

export default Aboutpagecorevaluesection;