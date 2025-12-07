import React from 'react';

function Homeblogtitle({HomeBlogStyle}){

    return (

        <>
        
            {/** Home Blog Title Section */}
            <div className={HomeBlogStyle.blogTitle}>

                <span>Insights & Ideas</span>
                <h2>Explore the Latest in Digital Growth</h2>
                <p>Stay updated with practical guides, industry trends, and expert breakdowns. Our blog covers digital marketing, web development, and AI-driven strategies to help you build stronger results and smarter online experiences.</p>

            </div>
            
        </>

    );

}

export default Homeblogtitle;