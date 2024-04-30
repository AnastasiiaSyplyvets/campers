import { createSlice } from '@reduxjs/toolkit';
import { fetchCamperList, addFavorite, filterCampers } from './operations';
// import storage from 'redux-persist/lib/storage';

export const CamperSlice = createSlice({
  name: 'camper',
  initialState: {
    campers: [],
    filter: [],
    favorites: [],
    isLoading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCamperList.fulfilled, (state, action) => {
        const newCampers = action.payload.filter(
          (item) =>
            !state.campers.some((currentItem) => currentItem._id === item._id)
        );
        state.campers = [...state.campers, ...newCampers];
      })
      .addCase(fetchCamperList.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCamperList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        console.log(action.payload);
        const filteredCamper = state.favorites.find(
          (camper) => camper._id === action.payload._id
        );
        if (filteredCamper) {
          return {
            ...state,
            favorites: state.favorites.filter(
              (camper) => camper._id !== action.payload._id
            ),
          };
        }
        state.favorites = [...state.favorites, action.payload];
      })
      .addCase(addFavorite.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(filterCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.filter = action.payload;
        console.log(action.payload);
      });
  },
});

export const CamperReducer = CamperSlice.reducer;
