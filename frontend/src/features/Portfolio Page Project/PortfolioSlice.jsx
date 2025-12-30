import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPortfolioDetails = createAsyncThunk('portfolio/fetchProtfolioDetails', async () => {

    const response = await axios.get('https://digiscape-backend.onrender.com/api/portfoliopage/project');
    return response.data;

});

const portfolioSlice = createSlice({ 
    
    name: 'portfolio',
    initialState: {

        portfolioitems: [],
        status: 'idle'

    },
    extraReducers: (builder) => {

        builder.addCase(fetchPortfolioDetails.pending, (state) => {

            state.status = 'loading'

        }).addCase(fetchPortfolioDetails.fulfilled, (state, action) => {

            state.status = 'succeeded';
            state.portfolioitems = action.payload;

        }).addCase(fetchPortfolioDetails.rejected, (state) => {

            state.status = 'failed'

        });

    }

});

export default portfolioSlice.reducer;