import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchAllRockets = createAsyncThunk(
  'rockets/fetchAllRockets',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseUrl);
      console.log(response.data);
      if (response.data === '') return [];
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  rockets: [],
  ifSucceed: false,
  isLoading: false,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllRockets.fulfilled, (state, action) => {
        state.rockets = action.payload;
        state.ifSucceed = true;
        state.isLoading = false;
      });
  },
});

export default rocketsSlice.reducer;

