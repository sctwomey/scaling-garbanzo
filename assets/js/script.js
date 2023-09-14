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

let quizQuestions = [
    {
        question: 'Inside which HTML element do we put the JavaScript file?',
        answer: '<script>',
        userSelections: [{ userSelection: '<js>' }, { userSelection: '<script>' }, { userSelection: '<javascript>' }, { userSelection: '<scripting>' }]
    },
    {
        question: 'How do you write an "if" statement in JavaScript?',
        answer: 'if (i == 5)',
        userSelections: [{ userSelection: 'if (i == 5)' }, { userSelection: 'if i = 5' }, { userSelection: 'if i == 5 then' }, { userSelection: 'if i = 5' }]
    },
    {
        question: 'What is the correct way to write a JavaScript array?',
        answer: 'let colors = ["red", "green", "blue"];',
        userSelections: [{ userSelection: 'let colors = ("red" - "green" - "blue");' }, { userSelection: 'let colors = "red",  "green",  "blue";' }, { userSelection: 'let colors = ["red", "green", "blue"];' }, { userSelection: 'let colors = 1("red"), 2("green"), 3("blue");' }]
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer (whole number)?',
        answer: 'Math.round(7.25)',
        userSelections: [{ userSelection: 'Math.rnd(7.25)' }, { userSelection: 'rnd(7.25)' }, { userSelection: 'round(7.25)' }, { userSelection: 'Math.round(7.25)' }]
    },
    {
        question: 'How do you find the number with the highest value of x and y?',
        answer: 'Math.max(x, y)',
        userSelections: [{ userSelection: 'top(x, y)' }, { userSelection: 'Math.max(x, y)' }, { userSelection: 'Math.ceil(x, y)' }, { userSelection: 'ceil(x, y)' }]
    },
    {
        question: 'JavaScript is the same as Java.',
        answer: 'False',
        userSelections: [{ userSelection: 'True' }, { userSelection: 'False' }]
    },
    {
        question: 'Which event occurs when the user "clicks" on an HTML element?',
        answer: 'onclick',
        userSelections: [{ userSelection: 'onmouseclick' }, { userSelection: 'onmouseover' }, { userSelection: 'onclick' }, { userSelection: 'onchange' }]
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answer: 'alert("Hello World");',
        userSelections: [{ userSelection: 'alert("Hello World");' }, { userSelection: 'msg("Hello World");' }, { userSelection: 'msgBox("Hello World");' }, { userSelection: 'alertBox("Hello World");' }]
    },
    {
        question: 'The external JavaScript file must contain the <script> tag.',
        answer: 'False',
        userSelections: [{ userSelection: 'True' }, { userSelection: 'False' }]
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answer: '<script src="xxx.js">',
        userSelections: [{ userSelection: '<script href="xxx.js">' }, { userSelection: '<script name="xxx.js">' }, { userSelection: '<script ref="xxx.js">' }, { userSelection: '<script src="xxx.js">' }]
    }
];

