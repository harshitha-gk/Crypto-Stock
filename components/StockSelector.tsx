import { useDispatch, useSelector } from 'react-redux';
import { setStockSymbol } from '../redux/stockReducer';
import { useState } from 'react';

const StockSelector = () => {
  const dispatch = useDispatch();
  const symbol = useSelector((state: any) => state.stock.symbol);
  const [input, setInput] = useState(symbol);

  const handleChange = () => {
    dispatch(setStockSymbol(input));
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleChange}>Change Stock</button>
    </div>
  );
};

export default StockSelector;
