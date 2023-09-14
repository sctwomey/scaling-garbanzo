// Setting main elements of the quiz.
let startQuizContainerEl = document.getElementById("start-quiz-container");
let questionsContainerEl = document.getElementById("questions-container");
let endQuizContainerEl = document.getElementById("end-quiz-container");
let quizScoreContainerEl = document.getElementById("quiz-score-banner");
let highScoresContainerEl = document.getElementById("high-scores-container");
let seeHighScoresEl = document.getElementById("see-high-scores");
let listHighScoresEl = document.getElementById("list-high-scores");
let correctAnswersEl = document.getElementById("correct-answers");
let wrongAnswersEl = document.getElementById("wrong-answers");
let userInitials = document.getElementById("initials-input");
let btnStartQuizEl = document.querySelector("#start-quiz");
let btnGoBackEl = document.querySelector("#go-back");
let btnClearScoresEl = document.querySelector("#clear-high-scores");

// Setting the questions and answers for the quiz.
let quizQuestionsEl = document.getElementById("questions");
let answerButtonsEl = document.getElementById("answer-buttons");
let quizTimerEl = document.querySelector("#quiz-timer");

// Sets the questions for the quiz from the question and answers array.
let randomQuestionsArray = [];
let questionsIndex = 0;