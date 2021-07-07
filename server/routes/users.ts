import express from "express";
import { pipe } from "ramda";
import { get } from "../utilities/http";
import { mockProductionEndpoint } from "../middleware";
import { flattenUsers, formatUsers } from "../utilities/users";

const app = express();

export const users = app.get(
  "/",
  mockProductionEndpoint,
  async (request, response) => {
    const endpoint = process.env.PUBLIC_SERVER_ENDPOINT as string;

    try {
      const data = await get(endpoint);

      const { results } = data;

      const users = pipe(formatUsers, flattenUsers)(results);

      return response.status(200).json({ users });
    } catch {
      return response.status(500).json({
        error: { message: "Something went wrong. Please try again." },
      });
    }
  }
);
