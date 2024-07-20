import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { stock } = req.query;
  const response = await axios.get(`http://localhost:5000/api/data/${stock}`);
  res.status(200).json(response.data);
};
