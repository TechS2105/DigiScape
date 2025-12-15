import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAllBlogsItem = createAsyncThunk('allBlogs/fetchAllBlogsItem', async () => {

    const response = await axios.get('https://digiscape-backend.onrender.com/api/blogpage/content');
    return response.data;

});

const allBlogSlice = createSlice({

    name: 'allBlogs',
    initialState: {

        allBlogItems: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchAllBlogsItem.pending, (state) => {

            state.status = "loading"

        }).addCase(fetchAllBlogsItem.fulfilled, (state, action) => {

            state.status = "succeeded",
            state.allBlogItems = action.payload

        }).addCase(fetchAllBlogsItem.rejected, (state) => {

            state.status = "failed"

        })

    }

});

export default allBlogSlice.reducer;