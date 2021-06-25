import { getRandomBoolean } from "../utilities/random";
import { sleep } from "../utilities/sleep";
import type { Request, Response, NextFunction } from "express";

export const mockProductionEndpoint = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const hasMockDelay = getRandomBoolean(0.5);

  if (hasMockDelay) {
    const SLEEP_DURATION = 2000;

    await sleep(SLEEP_DURATION);
  }

  const hasMockError = getRandomBoolean(0.25);

  if (hasMockError) {
    return response
      .status(500)
      .json({ error: { message: "Something went wrong. Please try again." } });
  }

  next();
};
