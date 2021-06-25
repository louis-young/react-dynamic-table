import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { pipe } from "ramda";
import { mockProductionEndpoint } from "./middleware";
import { get } from "./utilities/http";
import { flattenUsers, formatUsers } from "./utilities/users";

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

app.get("/users", mockProductionEndpoint, async (request, response) => {
  const endpoint = process.env.PUBLIC_SERVER_ENDPOINT as string;

  try {
    const data = await get(endpoint);

    const { results } = data;

    const users = pipe(formatUsers, flattenUsers)(results);

    return response.status(200).json({ users });
  } catch {
    return response
      .status(500)
      .json({ error: { message: "Something went wrong. Please try again." } });
  }
});
