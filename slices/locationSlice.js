import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLocation: null,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducer: {
    setCurrentLocation: (state, action) => {
      state.currentLocation = action.payload;
    },
  },
});

export const { setCurrentLocation } = locationSlice.actions;

// Selector
export const selectCurrentLocation = (state) => state.location.currentLocation;

export default locationSlice.reducer;
