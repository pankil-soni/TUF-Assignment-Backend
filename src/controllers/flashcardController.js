const prismaClient = require("../prisma");

const createFlashcard = async (req, res) => {
  const { question, answer, description } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Question and answer are required" });
  }

  try {
    const flashcard = await prismaClient.flashcard.create({
      data: {
        question,
        answer,
        description,
      },
    });
    res.status(200).json(flashcard);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllFlashcards = async (req, res) => {
  try {
    const flashcards = await prismaClient.flashcard.findMany();
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getFlashcardById = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "Flashcard ID is required" });
  }
  try {
    const flashcard = await prismaClient.flashcard.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!flashcard) {
      return res.status(404).json({ error: "Flashcard not found" });
    }

    res.status(200).json(flashcard);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateFlashcard = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Flashcard ID is required" });
  }

  const { question, answer, description } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Question and answer are required" });
  }

  try {
    const dbcard = await prismaClient.flashcard.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!dbcard) {
      return res.status(404).json({ error: "Flashcard not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }

  try {
    const flashcard = await prismaClient.flashcard.update({
      where: {
        id: parseInt(id),
      },
      data: {
        question,
        answer,
        description,
      },
    });
    res.status(200).json(flashcard);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteFlashcard = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "Flashcard ID is required" });
  }

  try {
    const dbcard = await prismaClient.flashcard.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!dbcard) {
      return res.status(404).json({ error: "Flashcard not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }

  try {
    await prismaClient.flashcard.delete({
      where: {
        id: parseInt(id),
      },
    });
    res.status(200).json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createFlashcard,
  getAllFlashcards,
  getFlashcardById,
  updateFlashcard,
  deleteFlashcard,
};
