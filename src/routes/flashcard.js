const express = require("express");
const {
  createFlashcard,
  getAllFlashcards,
  getFlashcardById,
} = require("../controllers/flashcardController");

const flashcardRouter = express.Router();

flashcardRouter.post("/", createFlashcard);
flashcardRouter.get("/", getAllFlashcards);
flashcardRouter.get("/:id", getFlashcardById);

module.exports = flashcardRouter;
