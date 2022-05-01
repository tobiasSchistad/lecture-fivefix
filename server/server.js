import express from "express";
import path from "path";

const app = express();

app.get("/api/login", (req, res) => {
  res.json({ username: "Noen andre Persson" });
});
app.post("/api/login", (req, res) => {
  res.sendStatus(401);
});

app.use(express.static("../client/dist"));
app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
