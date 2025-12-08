import React from 'react';
import HomeBlogStyle from '../../../public/styles/home blog files/Homeblog.module.css';
import HomeBlogTitleSection from '../Home Blog Component/Homeblogtitlesection';
import HomeBlogSection from '../Home Blog Component/Homeblogsection';

function Homeblog() {
    
    return (

        <>
        
            {/** Home Blog Section */}
            <div className={HomeBlogStyle.homeBlogMainSection}>

                {/** Home Blog Title Section */}
                <HomeBlogTitleSection
                
                    HomeBlogStyle={HomeBlogStyle}
                    
                />

                {/** Home Blog Section */}
                <HomeBlogSection
                
                    HomeBlogStyle={HomeBlogStyle}
                    
                />

            </div>
            
        </>

    );

}

export default Homeblog;