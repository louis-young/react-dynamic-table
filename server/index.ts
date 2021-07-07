import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { users } from "./routes/users";

dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: process.env.APPLICATION_CLIENT_URL,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));

app.use("/users", users);
