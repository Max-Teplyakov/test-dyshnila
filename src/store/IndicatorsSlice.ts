import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IIndicator {
  indicator: boolean;
}
const initialState: IIndicator = {
  indicator: true,
};

const IndicatorsSlice = createSlice({
  name: "indicator",
  initialState,
  reducers: {
    addIndicator(state, action: PayloadAction<boolean>) {
      state.indicator = action.payload;
    },
  },
});

export default IndicatorsSlice.reducer;
export const { addIndicator } = IndicatorsSlice.actions;
