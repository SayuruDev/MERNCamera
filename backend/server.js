import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 5005;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
