const express = require("express");
const cors = require("cors");
const app = express();
const port = 5002;
const router = express.Router();

app.use(express.json());

// skapa en route
app.get("/", (req, res) => res.send("hello !"));
app.get("/post", (req, res) => res.send("post !"));
app.get("/put", (req, res) => res.send("put"));

app.post("/post", (req, res) => {
  const hej = { id: 1, name: req.body.name };
  console.log(hej);
  res.send(req.body.name);
});

app.put("/put", (req, res) => {
  console.log(req.body.name);
  res.send("put");
  res.send(req.body.name);
});

//läs av public-folder
app.use(cors({ origin: "*" }));
app.use(express.static("public"));

//ange port
app.listen(port, () => {
  console.log("server is listening on port" + port);
});
