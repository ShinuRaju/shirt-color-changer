import { createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  shirtColors: Array<string>;
  pantColors: Array<string>;
  shade: boolean;
}

export const initialState: IInitialState = {
  shirtColors: [],
  pantColors: [],
  shade: true,
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
  },
});
export const { setShade, setShirtColors, setPantColors } = localSlice.actions;
export const localReducer = localSlice.reducer;
