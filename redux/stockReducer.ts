import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StockState {
  data: any[];
  symbol: string;
}

const initialState: StockState = {
  data: [],
  symbol: 'bitcoin'
};

const stockSlice = createSlice({
  name: 'stock',
  initialState,
  reducers: {
    setStockData(state, action: PayloadAction<any[]>) {
      state.data = action.payload;
    },
    setStockSymbol(state, action: PayloadAction<string>) {
      state.symbol = action.payload;
    }
  }
});

export const { setStockData, setStockSymbol } = stockSlice.actions;
export default stockSlice.reducer;
