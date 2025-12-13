import React from 'react';
import { VscDebugBreakpointLogUnverified } from "react-icons/vsc";

function Allblogs({BlogStyle, allBlogs}) {
    
    return (

        <>
        
            {/** All Blogs */}
            <div className={BlogStyle.allBlogs}>

                {/** Blog Div */}
                {allBlogs.map((allBlogItem, id) => {

                    return (

                        <div className={BlogStyle.blogDiv} key={id}>

                            {/** Blog Image */}
                            <div className={BlogStyle.blogImage}>

                                {/** Category */}
                                <div className={BlogStyle.blogCategory}>

                                    <VscDebugBreakpointLogUnverified/>
                                    <span> {allBlogItem.category} </span>

                                </div>
                                
                                <img src={allBlogItem.frontBlogDetails.image} alt={allBlogItem.frontBlogDetails.altText} />

                            </div>

                            {/** Blog Content */}
                            <div className={BlogStyle.blogContent}>

                                {/** Content */}
                                <div className={BlogStyle.contentDiv}>

                                    <h3> {allBlogItem.frontBlogDetails.title} </h3>
                                    <p> {allBlogItem.frontBlogDetails.description} </p>
                                    <button> {allBlogItem.frontBlogDetails.buttonText} </button>

                                </div>

                            </div>

                        </div>

                    );

                    

                })}
                
            </div>
            
        </>

    );

}

export default Allblogs;