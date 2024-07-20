import { useSelector } from 'react-redux';

const StockTable = () => {
  const data = useSelector((state: any) => state.stock.data);

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Price</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry: any) => (
          <tr key={entry.timestamp}>
            <td>{entry.symbol}</td>
            <td>{entry.price}</td>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StockTable;
