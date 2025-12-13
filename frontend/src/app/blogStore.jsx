import { configureStore } from '@reduxjs/toolkit';
import BlogSlice from '../features/blog/blogSlice';
import AllBlogSlice from '../features/blog/allBlogSlice';

const blogStore = configureStore({

    reducer: {

        blogs: BlogSlice,
        allBlogs: AllBlogSlice

    }

});

export default blogStore;