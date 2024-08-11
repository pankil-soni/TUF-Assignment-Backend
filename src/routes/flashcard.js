const express = require("express");
const { createFlashcard } = require("../controllers/flashcardController");

const flashcardRouter = express.Router();

flashcardRouter.post("/", createFlashcard);

module.exports = flashcardRouter;
