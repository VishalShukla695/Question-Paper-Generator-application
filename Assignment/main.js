// main.js
const Question = require('./models/question');
const QuestionStore = require('./models/questionStore');
const QuestionPaperGenerator = require('./questionPaperGenerator');

// Create sample questions
const question1 = new Question("What is the speed of light", "Physics", "Waves", "Easy", 5);
// Add more questions as needed

// Create a question store
const questionStore = new QuestionStore();
questionStore.addQuestion(question1);
// Add more questions to the store

// Create a question paper generator
const questionPaperGenerator = new QuestionPaperGenerator(questionStore);

// Generate a question paper with a total of 100 marks
const generatedPaper = questionPaperGenerator.generateQuestionPaper(100, {
  "Easy": 20,
  "Medium": 50,
  "Hard": 30,
});

// Display the generated question paper
console.log("Generated Question Paper:");
generatedPaper.forEach(question => {
  console.log(`Question: ${question.question}, Marks: ${question.marks}, Difficulty: ${question.difficulty}`);
});
