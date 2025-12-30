import { configureStore } from '@reduxjs/toolkit';
import BlogSlice from '../features/blog/blogSlice';
import AllBlogSlice from '../features/blog/allBlogSlice';
import PortfolioSlice from '../features/Portfolio Page Project/PortfolioSlice';

const contentLibrary = configureStore({

    reducer: {

        blogs: BlogSlice,
        allBlogs: AllBlogSlice,
        portfolio: PortfolioSlice 

    }

});

export default contentLibrary;