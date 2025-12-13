import React from 'react';
import BlogTitle from '../Blog Title Section/Blogtitle';

function Blogtitlesection({BlogStyle}) {
    
    return (

        <>
        
            {/** Blog Title Section  */}
            <div className={BlogStyle.blogTitleSection}>

                {/** blog Title */}
                <BlogTitle
                
                    bSpanTitle="Insights That Drive Growth"
                    bHeadingTitle="Digital Marketing Insights"
                    bParaContent="Explore practical ideas, clear strategies and real examples that help you understand the fast moving digital world. Our blog brings together expert knowledge on SEO, ads, content and branding, written in a way that feels simple, helpful and relevant. Whether you're building a new brand or improving an existing one, these insights give you a clearer direction and the confidence to make better decisions."
                    
                />

            </div>
            
        </>

    );

}

export default Blogtitlesection