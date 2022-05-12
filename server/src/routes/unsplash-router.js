import axios from "axios";
import "dotenv/config";
import { Router } from "express";

const BASE_UNSPLASH_URL =
  "https://api.unsplash.com/photos/random?count=30&orientation=squarish";

export const unsplashRouter = Router();

unsplashRouter.get("/", async (_req, res) => {
  try {
    const response = await axios.get(BASE_UNSPLASH_URL, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    });

    const data = await response.data;
    res.send({ feed: data });
  } catch (error) {
    console.log(error);
  }
});

export default unsplashRouter;
