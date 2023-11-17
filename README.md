# Question-Paper-Generator-application

Overview
This Node.js application is a Question Paper Generator designed to store and generate question papers based on specified criteria. The application uses modular design principles to keep the code organized and extensible.

Project Structure
/question-paper-generator
  /models
    question.js
    questionStore.js
  questionPaperGenerator.js
  main.js
  package.json

  models/question.js: Defines the Question class to represent individual questions.
models/questionStore.js: Defines the QuestionStore class to store and retrieve questions.
questionPaperGenerator.js: Implements the QuestionPaperGenerator class responsible for generating question papers based on difficulty distribution.
main.js: The main file where sample questions are created, stored, and used to generate a question paper.
package.json: Node.js project configuration file.


Clone the repository:
git clone <repository-url>
cd question-paper-generator

Install dependencies:
npm install

Run the application:
node main.js
Usage
Define sample questions in the main.js file using the Question class.
Create a QuestionStore and add questions to it.
Use the QuestionPaperGenerator to generate a question paper based on specified criteria (total marks and difficulty distribution).


Extensibility
The application is designed to be extensible for future requirements. To accommodate new features or criteria, you can:
Add new attributes to the Question class.
Extend the QuestionStore class for additional functionality.
Modify the QuestionPaperGenerator to handle new criteria for generating question papers.

