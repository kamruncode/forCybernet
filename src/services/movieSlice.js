import React from "react";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movieCard: [],
};

const movieSlice = createSlice({
  name: "movieCard",
  initialState,
  reducers: {
    AddMovie: (state, action) => {
      state.card.push(action.payload);
    },
  },
});

export const { AddMovie } = movieSlice.actions;
export default movieSlice.reducer;
