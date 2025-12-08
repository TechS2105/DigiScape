import React from 'react';
import HomeBlogTitle from '../Home Blog Component/Homeblogtitle';

function Homeblogtitle({HomeBlogStyle}){

    return (

        <>
        
            {/** Home Blog Title Section */}
            <div className={HomeBlogStyle.blogTitle}>

                <HomeBlogTitle
                
                    HomeBlogSpanTitle="Insights & Ideas"
                    HomeBlogTitle="Explore the Latest in Digital Growth"
                    HomeBlogPara="Stay updated with practical guides, industry trends, and expert breakdowns. Our blog covers digital marketing, web development, and AI-driven strategies to help you build stronger results and smarter online experiences."
                    
                />

            </div>
            
        </>

    );

}

export default Homeblogtitle;