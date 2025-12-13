import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    
    const response = await axios.get("http://localhost:3000/api/home/blogs");
    return response.data;

});

const blogSlice = createSlice({

    name: 'blogs',
    initialState: {

        item: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchBlogs.pending, (state) => {

            state.status = 'loading'

        }).addCase(fetchBlogs.fulfilled, (state, action) => {

            state.status = 'succeeded',
            state.item = action.payload

        }).addCase(fetchBlogs.rejected, (state) => {

            state.status = 'failed'

        });

    }
    

});

export default blogSlice.reducer;