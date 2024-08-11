const express = require("express");
const app = express();
app.use(express.json());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT} 🚀`);
});
