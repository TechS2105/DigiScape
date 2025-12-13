import React, {useEffect} from 'react';
import AllBlogs from '../All Blog Section/Allblogs';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllBlogsItem } from "../../../features/blog/allBlogSlice";

function Allblogsection({BlogStyle}) {

    const { allBlogItems: allBlogs, status } = useSelector((state) => state.allBlogs);
    const dispatch = useDispatch();

    useEffect(() => {

        if (status === 'idle') {
            
            dispatch(fetchAllBlogsItem());

        }

    }, [status, dispatch]);

    if(status === 'loading') return <p> Blog is loading </p>
    if(status === 'failed') return <p> Somethis is wrong. Please try again... </p>
    
    return (

        <>
        
            {/** All Blog Section */}
            <div className={BlogStyle.allBlogSection}>

                <AllBlogs
                
                    BlogStyle={BlogStyle}
                    allBlogs={allBlogs}
                
                />

            </div>
            
        </>

    );

}

export default Allblogsection;