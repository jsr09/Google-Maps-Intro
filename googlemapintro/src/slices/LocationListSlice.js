import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationList: [],
  selectedLocation: {},
  defaultLocation: {
    id: 1,
    name: "Home",
    position: { lat: 33.82069, lng: -116.54814 },
    zoom: 14,
  },
};

const locationListSlice = createSlice({
  name: "locationList",
  initialState,
  reducers: {
    setLocationList: (state, action) => {
      state.locationList = action.payload
    },
    setDefaultLocation: (state, action) => {
      state.defaultLocation = action.payload;
    },
    setSelectedLocation: (state, action) => {
      state.selectedLocation = action.payload;
      console.log('Line 30 State.selectedLocation>>', state.selectedLocation)
    },
  },
});

export const { setLocationList, setDefaultLocation, setSelectedLocation } =
  locationListSlice.actions;

export default locationListSlice.reducer;
