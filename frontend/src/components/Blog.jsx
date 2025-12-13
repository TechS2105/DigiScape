import React from 'react';
import BlogStyle from '../../public/styles/blog style files/blog.module.css';
import BlogSection from '../components/Blog Components/Blog Section/Blogsection';

function Blog() {
    
    return (

        <>
        
            {/** Blog Section */}
            <div className={BlogStyle.blogMainContainer}>

                <BlogSection
                
                    BlogStyle={BlogStyle}
                    
                />

            </div>

        </>
        

    );

}

export default Blog;