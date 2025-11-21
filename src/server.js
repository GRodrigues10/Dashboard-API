import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());

// rota para evitar Bad Gateway
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

connectDB();

app.use("/api", userRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
