import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setStockData } from '../redux/stockReducer';
import StockTable from '../components/StockTable';
import StockSelector from '../components/StockSelector';

const Home = () => {
  const dispatch = useDispatch();
  const symbol = useSelector((state: any) => state.stock.symbol);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/${symbol}`);
      dispatch(setStockData(response.data));
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, [symbol, dispatch]);

  return (
    <div>
      <StockSelector />
      <StockTable />
    </div>
  );
};

export default Home;
