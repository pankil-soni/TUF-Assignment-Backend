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

module.exports = {
  createFlashcard,
  getAllFlashcards,
  getFlashcardById,
};
