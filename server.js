import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));

/*
 * Import your routes here 
 */
import authRoutes from './router/auth.routes.js';
import userRoutes from './router/user.routes.js';

app.use('/api/', authRoutes);
app.use('/api/', userRoutes);

dotenv.config();

const PORT = process.env.PORT || 8080;

// Simple test route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to express starter kit made with 💖 by henryjrzai🤖' });
});

app.listen(PORT, () => {
  console.log(` app listening on port http://localhost:${PORT}`)
});