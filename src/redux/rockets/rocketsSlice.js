// redux/rockets/rocketsSlice.js

import { createSelector, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v4/rockets';

export const fetchAllRockets = createAsyncThunk(
  'rockets/fetchAllRockets',
  async (thunkAPI) => {
    try {
      const response = await axios.get(baseUrl);
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
  reducers: {
    reserveRocket: (state, action) => {
      const { payload: id } = action;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
    },
    cancelReservation: (state, action) => {
      const { payload: id } = action;
      const updatedRockets = state.rockets.map((rocket) => {
        if (rocket.id === id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return { ...state, rockets: updatedRockets };
    },
  },
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

// Selector to get reserved rockets
export const selectReservedRockets = createSelector(
  (state) => state.rockets.rockets,
  (rockets) => rockets.filter((rocket) => rocket.reserved)
);

export const { reserveRocket, cancelReservation } = rocketsSlice.actions;

export default rocketsSlice.reducer;
