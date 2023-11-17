// questionPaperGenerator.js
const QuestionStore = require('./models/questionStore');

class QuestionPaperGenerator {
  constructor(questionStore) {
    this.questionStore = questionStore;
  }

  generateQuestionPaper(totalMarks, distribution) {
    const questionPaper = [];
    const difficultyGroups = {};

    this.questionStore.getQuestions().forEach(question => {
      if (!difficultyGroups[question.difficulty]) {
        difficultyGroups[question.difficulty] = [];
      }
      difficultyGroups[question.difficulty].push(question);
    });

    for (const [difficulty, percentage] of Object.entries(distribution)) {
      const difficultyQuestions = difficultyGroups[difficulty] || [];
      const selectedMarks = Math.floor(totalMarks * (percentage / 100));

      const selectedQuestions = this.selectQuestions(difficultyQuestions, selectedMarks);
      questionPaper.push(...selectedQuestions);
    }

    return questionPaper;
  }

  selectQuestions(questions, selectedMarks) {
    const selectedQuestions = [];
    let currentMarks = 0;

    questions.sort((a, b) => b.marks - a.marks); // Prioritize higher marks questions

    for (const question of questions) {
      if (currentMarks + question.marks <= selectedMarks) {
        selectedQuestions.push(question);
        currentMarks += question.marks;
      }
    }

    return selectedQuestions;
  }
}

module.exports = QuestionPaperGenerator;
