import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchAllMissions = createAsyncThunk(
  'missions/fetchAllMissions',
  async (missions, { rejectWithValue }) => {
    try {
      const response = await axios.get(baseUrl);
      if (response.data === '') return [];
      const missionsData = response.data.map((mission, id) => {
        const missionId = mission.mission_id;
        const missionName = mission.mission_name;
        const { description } = mission;
        const getFromState = JSON.parse(localStorage.getItem('missions')) || null;
        if (getFromState) {
          const { reserved } = getFromState[id];
          return {
            missionId, missionName, description, reserved,
          };
        }
        const reserved = false;
        return {
          missionId, missionName, description, reserved,
        };
      });
      return missionsData;
    } catch (error) {
      return rejectWithValue('something went wrong');
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    toggleReservation(state, action) {
      const updatedMission = state.missions.map((mission) => {
        if (mission.missionId !== action.payload) return mission;
        const reserved = !mission.reserved;
        return { ...mission, reserved };
      });
      localStorage.setItem('missions', JSON.stringify(updatedMission));
      return { ...state, missions: updatedMission };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllMissions.pending, (state) => {
      state.isLoading = true;
    })
      .addCase(fetchAllMissions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.missions = action.payload;
      })
      .addCase(fetchAllMissions.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { toggleReservation } = missionsSlice.actions;

export default missionsSlice.reducer;
