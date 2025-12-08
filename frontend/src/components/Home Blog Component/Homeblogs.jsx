import React from 'react';
import HomeSwiperBlog from '../Home Blog Component/Homeswiperblog';

function Homeblogs({HomeBlogStyle}) {
    
    return (

        <>
        
          {/** Home Blogs */}  
          <div className={HomeBlogStyle.blogInnerSection}>

                {/** Home Swiper Blog Section */}                
                <HomeSwiperBlog
                
                    HomeBlogStyle={HomeBlogStyle}
                    
                />

          </div>

        </>

    );

}

export default Homeblogs;