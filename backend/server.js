import express from 'express';
import notesRoutes from './src/routes/notesRoutes.js';
import {connectDB} from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Mongodb connection middleware would go here
connectDB();

app.use(express.json());
app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});