const flashcardRouter = require("./routes/flashcardRoutes");
const express = require("express");
var cors = require("cors");
const PORT = 5000;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/flashcard", flashcardRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT} 🚀`);
});
