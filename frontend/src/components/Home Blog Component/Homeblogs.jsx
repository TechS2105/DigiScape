import React, {useEffect} from 'react';
import HomeSwiperBlog from '../Home Blog Component/Homeswiperblog';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBlogs } from '../../features/blog/blogSlice';

function Homeblogs({ HomeBlogStyle }) {
    
    const { item: blogs, status } = useSelector((state) => state.blogs);
    const dispatch = useDispatch();

    useEffect(() => { 

        if (status === 'idle') {
            
            dispatch(fetchBlogs());

        }


    }, [status, dispatch]);

    if(status === 'loading') return <p> Product is loading...</p>
    if(status === 'failed') return <p> Something error. Please try again...</p>
    
    return (

        <>
        
          {/** Home Blogs */}  
          <div className={HomeBlogStyle.blogInnerSection}>

                {/** Home Swiper Blog Section */}                
                <HomeSwiperBlog
                
                    HomeBlogStyle={HomeBlogStyle}
                    blogs={blogs}
                    
                />

          </div>

        </>

    );

}

export default Homeblogs;