import {configureStore} from '@reduxjs/toolkit'
import locationListReducer from '../slices/LocationListSlice'


const store = configureStore({
  reducer: {
    locationList: locationListReducer,
  },
});

export default store;
export * from '../slices/LocationListSlice';