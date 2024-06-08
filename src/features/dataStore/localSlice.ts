import { createSlice } from "@reduxjs/toolkit";
import { IColor } from "../main/Fields/RenderNameField";

export interface IInitialState {
  shirtColors: Array<IColor>;
  pantColors: Array<IColor>;
  shade: boolean;
  combinations: boolean;
  sort: boolean;
  hex: boolean;
}

export const initialState: IInitialState = {
  shirtColors: [],
  pantColors: [],
  shade: true,
  combinations: false,
  sort: true,
  hex: false,
};

const localSlice = createSlice({
  name: "localSlice",
  initialState,
  reducers: {
    setShirtColors: (state, action) => {
      state.shirtColors = action.payload;
    },
    setPantColors: (state, action) => {
      state.pantColors = action.payload;
    },
    setShade: (state, action) => {
      state.shade = action.payload;
    },
    setCombinations: (state, action) => {
      state.combinations = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setHex: (state, action) => {
      state.hex = action.payload;
    },
  },
});
export const {
  setCombinations,
  setShirtColors,
  setPantColors,
  setHex,
  setShade,
  setSort,
} = localSlice.actions;
export const localReducer = localSlice.reducer;
