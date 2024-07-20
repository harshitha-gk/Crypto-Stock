import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import apiRoutes from './routes/api';

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

export default app;
