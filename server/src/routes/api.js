import { Router } from "express";
import productsRouter from "./products-router.js";
import unsplashRouter from "./unsplash-router.js";

const apiRouter = Router();

apiRouter.use("/products", productsRouter);
apiRouter.use("/feed", unsplashRouter);

export default apiRouter;
