import { Request, Response } from 'express';
import StockData from '../models/StockData';

export const getData = async (req: Request, res: Response) => {
  const { symbol } = req.params;
  const data = await StockData.find({ symbol }).sort({ timestamp: -1 }).limit(20);
  res.json(data);
};
