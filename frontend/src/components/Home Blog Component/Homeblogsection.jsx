import React from 'react';
import HomeBlogs from '../Home Blog Component/Homeblogs';

function Homeblogsection({HomeBlogStyle}) {
    
    return (

        <>
        
            {/** Home Blog Section */}
            <div className={HomeBlogStyle.blogSection}>

                <HomeBlogs
                
                    HomeBlogStyle={HomeBlogStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Homeblogsection;