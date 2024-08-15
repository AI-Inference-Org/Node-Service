import authRoutes from "./routes/auth";
import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);

app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

async function startServer() {
  try {
    await prisma.$connect(); // Connect to the database
    console.log("Connected to the database");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
