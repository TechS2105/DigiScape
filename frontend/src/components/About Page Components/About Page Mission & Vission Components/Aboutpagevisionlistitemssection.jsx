import React from 'react';
import { BsCircle } from "react-icons/bs";
import AboutPageVisionListItems from '../About Page Mission & Vission Components/Aboutpagevisionlistitems';

function Aboutpagevisionlistitemssection({AboutSectionStyle}){

    return (

        <>
        
            {/** About Page Vision List Item Section */}
            <div className={AboutSectionStyle.visionListItemDiv}>
            
                {/** Vision First List items Inner Div */}
                <AboutPageVisionListItems
                
                    AboutSectionStyle={AboutSectionStyle}
                    visionSVGIcon={<BsCircle />}
                    listItem1="Lead with ethical and effective digital practices"
                    listItem2="Stay ahead of evolving technologies and user behavior"
                    listItem3="Help brands stand out in competitive digital markets"
                    listItem4="Create digital experiences that build credibility and loyalty"
                    listItem5="Deliver scalable solutions that grow with our clients"
                    
                />   
                
                {/** Vision Second List items Inner Div */}
                <AboutPageVisionListItems
                
                    AboutSectionStyle={AboutSectionStyle}
                    visionSVGIcon={<BsCircle />}
                    listItem1="Lead with ethical and effective digital practices"
                    listItem2="Stay ahead of evolving technologies and user behavior"
                    listItem3="Help brands stand out in competitive digital markets"
                    listItem4="Create digital experiences that build credibility and loyalty"
                    listItem5="Deliver scalable solutions that grow with our clients"
                    
                />   

                {/** Vision Third List items Inner Div */}
                <AboutPageVisionListItems
                
                    AboutSectionStyle={AboutSectionStyle}
                    visionSVGIcon={<BsCircle />}
                    listItem1="Lead with ethical and effective digital practices"
                    listItem2="Stay ahead of evolving technologies and user behavior"
                    listItem3="Help brands stand out in competitive digital markets"
                    listItem4="Create digital experiences that build credibility and loyalty"
                    listItem5="Deliver scalable solutions that grow with our clients"
                    
                />   

                {/** Vision Fourth List items Inner Div */}
                <AboutPageVisionListItems
                
                    AboutSectionStyle={AboutSectionStyle}
                    visionSVGIcon={<BsCircle />}
                    listItem1="Lead with ethical and effective digital practices"
                    listItem2="Stay ahead of evolving technologies and user behavior"
                    listItem3="Help brands stand out in competitive digital markets"
                    listItem4="Create digital experiences that build credibility and loyalty"
                    listItem5="Deliver scalable solutions that grow with our clients"
                    
                />   
            
            </div>

            
        </>

    );

}

export default Aboutpagevisionlistitemssection;