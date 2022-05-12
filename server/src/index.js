import express from "express";
import morgan from "morgan";
import apiRouter from "./routes/api.js";
import "dotenv/config";
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(morgan("tiny"));

app.get("/hello", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
