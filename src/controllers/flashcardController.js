const prismaClient = require("../prisma");

const createFlashcard = async (req, res) => {
  const { question, answer, description } = req.body;

  if (!question || !answer) {
    return res.status(400).json({ error: "Question and answer are required" });
  }

  const flashcard = await prismaClient.flashcard.create({
    data: {
      question,
      answer,
      description,
    },
  });
  res.status(200).json(flashcard);
};

module.exports = {
  createFlashcard,
};
