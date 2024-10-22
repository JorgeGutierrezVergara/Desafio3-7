const { obtenerPosts, agregarPost } = require("./consultas");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());

app.use(cors());

// GET /todos
app.get("/posts", async (req, res) => {
  const posts = await obtenerPosts();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  const { titulo, url, descripcion } = req.body;
  console.log(req.body);
  await agregarPost(titulo, url, descripcion, 0);
  res.send("Viaje agregado con éxito");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
