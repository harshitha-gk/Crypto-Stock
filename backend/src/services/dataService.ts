import axios from 'axios';
import StockData from '../models/StockData';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price';

export const fetchData = async () => {
  const symbols = ['bitcoin', 'ethereum', 'ripple']; // Add more symbols as needed
  const result = await axios.get(API_URL, {
    params: {
      ids: symbols.join(','),
      vs_currencies: 'usd'
    }
  });

  const data = result.data;
  const stockDataArray = symbols.map((symbol) => ({
    symbol,
    price: data[symbol].usd,
    timestamp: new Date()
  }));

  await StockData.insertMany(stockDataArray);
};
