import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  locationList: [],
  selectedLocation: null,
  defaultLocation: {
    id: 1,
    name: "Home",
    position: { lat: 33.82069, lng: 116.54814 },
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
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.position = action.payload.position;
      state.zoom = action.payload.zoom;
    },
    selectLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setLocationList, setDefaultLocation, selectLocation } =
  locationListSlice.actions;

export default locationListSlice.reducer;
