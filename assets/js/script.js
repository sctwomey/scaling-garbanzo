// Setting main elements of the quiz.
const startQuizContainerEl = document.getElementById("start-quiz-container");
const questionsContainerEl = document.getElementById("questions-container");
const endQuizContainerEl = document.getElementById("end-quiz-container");
const quizScoreContainerEl = document.getElementById("quiz-score-banner");
const highScoresContainerEl = document.getElementById("high-scores-container");
const seeHighScoresEl = document.getElementById("see-high-scores");
const listHighScoresEl = document.getElementById("list-high-scores");
const correctAnswersEl = document.getElementById("correct-answers");
const wrongAnswersEl = document.getElementById("wrong-answers");
const userInitials = document.getElementById("user-initials-input");
const startQuizButtonEl = document.querySelector("#start-quiz");
const goBackButtonEl = document.querySelector("#go-back-button");
const clearScoresButtonEl = document.querySelector("#clear-high-scores-button");

// Setting the questions and answers for the quiz.
const quizQuestionsEl = document.getElementById("questions");
const answerButtonsEl = document.getElementById("answer-buttons");
const quizTimerEl = document.querySelector("#quiz-timer");

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

// Setting the quiz scoring elements and timer.
let userScore = 0;
let quizCompleted;

let timeRemaining;
quizTimerEl.innerText = 0;

// Checks to determine if the quiz is completed. The timer starts at 60 seconds. 
let timerSetting = function () {

    timeRemaining = 60;

    let timerTest = setInterval(function () {
        quizTimerEl.innerText = timeRemaining;
        timeRemaining--;

        if (quizCompleted) {
            clearInterval(timerTest);
        };

        if (timeRemaining < 0) {
            showScore();
            quizTimerEl.innerText = 0;
            clearInterval(timerTest);
        };

    }, 1000);
};

// Sets the "Go Back" button if it is clicked from the "High Scores" page.
let showStartPage = function () {

    highScoresContainerEl.classList.add("hide");
    highScoresContainerEl.classList.remove("show");
    startQuizContainerEl.classList.remove("hide");
    startQuizContainerEl.classList.add("show");
    quizScoreContainerEl.removeChild(quizScoreContainerEl.lastChild);
    questionsIndex = 0;
    quizCompleted = "";
    quizTimerEl.textContent = 0;
    userScore = 0;

    if (correctAnswersEl.className = "show") {
        correctAnswersEl.classList.remove("show");
        correctAnswersEl.classList.add("hide");
    };

    if (wrongAnswersEl.className = "show") {
        wrongAnswersEl.classList.remove("show");
        wrongAnswersEl.classList.add("hide");
    };
};

// Sets everything to start the quiz dynamically such as the classes for showing and hiding the "Start" page and Quiz questions. Also, randomizes the questions.
let startQuiz = function () {

    startQuizContainerEl.classList.add('hide');
    startQuizContainerEl.classList.remove('show');
    questionsContainerEl.classList.remove('hide');
    questionsContainerEl.classList.add('show');

    randomQuestionsArray = quizQuestions;

    // Fisher Yates shuffle for randomizing the questions.
    for (i = randomQuestionsArray.length - 1; i > 0; i--) {

        j = Math.floor(Math.random() * i);
        k = randomQuestionsArray[i];

        randomQuestionsArray[i] = randomQuestionsArray[j];
        randomQuestionsArray[j] = k;
    };

    timerSetting();
    setQuizQuestion();
};

// Sets the next question for the quiz.
let setQuizQuestion = function () {

    // Removes the answer buttons dynamically.
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);

    };

    showQuizQuestion(randomQuestionsArray[questionsIndex]);

};

// Sets the question information and answer buttons for the quiz.
let showQuizQuestion = function (questionIndex) {

    quizQuestionsEl.innerText = questionIndex.question;

    for (let i = 0; i < questionIndex.userSelections.length; i++) {

        let answerButton = document.createElement('button');

        answerButton.innerText = questionIndex.userSelections[i].userSelection;
        answerButton.classList.add('btn');
        answerButton.classList.add('answerbtn');
        answerButton.addEventListener("click", checkUserAnswer);
        answerButtonsEl.appendChild(answerButton);
    };
};

// Determines whether the answer is right or wrong.    
let checkUserAnswer = function (answerEvent) {

    let userAnswer = answerEvent.target;

    if (randomQuestionsArray[questionsIndex].answer === userAnswer.innerText) {
        correctAnswer();
        userScore += 10;
    } else {
        wrongAnswer();
        timeRemaining -= 10;
    };

    questionsIndex++; // Index for moving to the next question.

    if (randomQuestionsArray.length > questionsIndex) {

        setQuizQuestion();

    } else {
        quizCompleted = "true";
        showScore();
    };

};

// Sets the "Correct!" banner under the answers, if the answer chosen is correct.
let correctAnswer = function () {
    if (correctAnswersEl.className = "hide") {

        correctAnswersEl.classList.remove("hide");
        correctAnswersEl.classList.add("banner");
        wrongAnswersEl.classList.remove("banner");
        wrongAnswersEl.classList.add("hide");

    };
};

// Sets the "Wrong!" banner under the answers, if the answer chosen is wrong.
let wrongAnswer = function () {
    if (wrongAnswersEl.className = "hide") {

        wrongAnswersEl.classList.remove("hide");
        wrongAnswersEl.classList.add("banner");
        correctAnswersEl.classList.remove("banner");
        correctAnswersEl.classList.add("hide");

    };
};

// Setting the initial array for saving high scores.
let userHighScores = [];

// Sets the total score on the page.
let showScore = function () {

    let showScore = document.createElement("p");

    questionsContainerEl.classList.add("hide");
    endQuizContainerEl.classList.remove("hide");
    endQuizContainerEl.classList.add("show");

    correctAnswersEl.classList.remove("show");
    correctAnswersEl.classList.add("hide");

    wrongAnswersEl.classList.remove("show");
    wrongAnswersEl.classList.add("hide");

    showScore.innerText = ("Your quiz score is a " + userScore + "!");
    quizScoreContainerEl.appendChild(showScore);

};

// Sets the generation of high scores.
let generateHighScore = function (scoreEvent) {

    scoreEvent.preventDefault();

    let uInitials = document.querySelector("#initials").value;

    if (!uInitials) {
        alert("Please enter your intials in the 'Enter Intials' box!");
        return;
    };

    userInitials.reset();

    let highScore = {
        uInitials: uInitials,
        userScore: userScore
    };

    userHighScores.push(highScore);
    userHighScores.sort(function (a, b) {
        return (b.userScore - a.userScore);
    });

    while (listHighScoresEl.firstChild) {
        listHighScoresEl.removeChild(listHighScoresEl.firstChild);
    };

    for (let i = 0; i < userHighScores.length; i++) {
        let highQuizScores = document.createElement("li");
        highQuizScores.ClassName = "high-score";
        highQuizScores.innerHTML = userHighScores[i].uInitials + " - " + userHighScores[i].userScore;
        listHighScoresEl.appendChild(highQuizScores);
    };

    // This saves the user's high scores to the local storage in the browser.
    localStorage.setItem("HighScores", JSON.stringify(userHighScores));

    showHighScores();

};

// Sets the scores when the webpage loads.
let sendHighScore = function () {

    let sentHighScores = localStorage.getItem("HighScores")

    if (!sentHighScores) {
        return;
    };

    sentHighScores = JSON.parse(sentHighScores);

    sentHighScores.sort(function (a, b) {
        return (b.userScore - a.userScore);
    });

    for (let i = 0; i < sentHighScores.length; i++) {
        let quizHighScores = document.createElement("li");
        quizHighScores.ClassName = "high-score";
        quizHighScores.innerText = sentHighScores[i].initials + " - " + sentHighScores[i].userScore;
        listHighScoresEl.appendChild(quizHighScores);

        userHighScores.push(sentHighScores[i]);

    };
};

// Sets the showing of High Scores on the webpage when the link is clicked, and when a user enters his/her intiials.
let showHighScores = function () {

    highScoresContainerEl.classList.remove("hide");
    highScoresContainerEl.classList.add("show");
    quizCompleted = "true";

    if (endQuizContainerEl.className = "show") {
        endQuizContainerEl.classList.remove("show");
        endQuizContainerEl.classList.add("hide");
    };

    if (startQuizContainerEl.className = "show") {
        startQuizContainerEl.classList.remove("show");
        startQuizContainerEl.classList.add("hide");
    };

    if (questionsContainerEl.className = "show") {
        questionsContainerEl.classList.remove("show");
        questionsContainerEl.classList.add("hide");
    };

    if (correctAnswersEl.className = "show") {
        correctAnswersEl.classList.remove("show");
        correctAnswersEl.classList.add("hide");
    };

    if (wrongAnswersEl.className = "show") {
        wrongAnswersEl.classList.remove("show");
        wrongAnswersEl.classList.add("hide");
    };

};

// Sets the clearing of any High Scores in the local storage in the browser.
let clearUserScores = function () {

    userHighScores = [];

    while (listHighScoresEl.firstChild) {
        listHighScoresEl.removeChild(listHighScoresEl.firstChild);
    };

    localStorage.clear(userHighScores);

};

sendHighScore();

// When the "Start Quiz" button is clicked, the quiz begins.
startQuizButtonEl.addEventListener("click", startQuiz);

// When the "Go Back" button is clicked, the user returns to the start page.
goBackButtonEl.addEventListener("click", showStartPage);

// When the High Scores button is clicked, the user is shown the high scores in list form.
seeHighScoresEl.addEventListener("click", showHighScores);

// When the "Submit" button is clicked, the user's initials and score are saved in the local storage and displayed on the page in list form.
userInitials.addEventListener("submit", generateHighScore);

// When the "Clear High Scores" button is clicked, the information in the local storage is deleted.
clearScoresButtonEl.addEventListener("click", clearUserScores);
