import { Router } from "express";

const data = [
  { id: 1, name: "A", price: 4 },
  { id: 2, name: "B", price: 5 },
];

const productsRouter = Router();

productsRouter.get("/", (_, res) => {
  res.send({ products: data });
});

productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const result = data.filter((product) => {
    return product.id.toString() === id;
  });

  res.send({ product: result });
});

productsRouter.post("/", (req, res) => {
  const body = req.body;
  data.push(body);
  res.send({ product: data });
});

productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;

  const matchedIndex = data.findIndex((item) => item.id.toString() === id);
  data.splice(matchedIndex, 1);

  res.send({ data });
});

export default productsRouter;
