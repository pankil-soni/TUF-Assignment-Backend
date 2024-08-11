const express = require("express");
const {
  createFlashcard,
  getAllFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
} = require("../controllers/flashcardController");

const flashcardRouter = express.Router();

flashcardRouter.post("/", createFlashcard);
flashcardRouter.get("/", getAllFlashcards);
flashcardRouter.get("/:id", getFlashcardById);
flashcardRouter.put("/:id", updateFlashcard);
flashcardRouter.delete("/:id", deleteFlashcard);

module.exports = flashcardRouter;
