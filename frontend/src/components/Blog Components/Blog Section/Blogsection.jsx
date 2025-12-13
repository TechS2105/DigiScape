import React from 'react'; 
import BlogTitleSection from '../Blog Title Section/Blogtitlesection';
import BlogBannerImageSection from '../Blog Banner Image Section/Blogbannerimagesection';
import AllBlogSection from '../All Blog Section/Allblogsection';

function Blogsection({BlogStyle}) {
    
    return (

        <>
        
            {/** Blog Section */}
            <div className={BlogStyle.blogSection}>

                {/** Blog Title Section */}
                <BlogTitleSection
                
                    BlogStyle={BlogStyle}
                    
                />

                {/** Blog Banner Image Section */}
                <BlogBannerImageSection
                
                    BlogStyle={BlogStyle}
                    
                />

                {/** All Blogs Section */}
                <AllBlogSection
                
                    BlogStyle={BlogStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Blogsection;