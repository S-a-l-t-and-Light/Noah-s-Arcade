const questions = [
    {
        question: "How many of each kind of clean animal did Noah take on the ark?",
        options: ['2', '7', '10', '12'],
        answer: '7'
    },
    {
        question: "What did God use as a sign of His promise not to flood the earth again?",
        options: ['Sun', 'Olive branch', 'Rainbow', 'Dove'],
        answer: 'Rainbow'
    }
];

let currentQuestionIndex = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsUl = document.getElementById('options');
    optionsUl.innerHTML = '';
    question.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.onclick = () => checkAnswer(option);
        optionsUl.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    if(selectedOption === question.answer) {
        alert('Correct!');
    } else {
        alert('Try again!');
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert('Well done! You have completed the quiz.');
        currentQuestionIndex = 0; // Reset for replay
        displayQuestion(); // Start over
    }
    
}
function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const feedbackElement = document.getElementById('feedback');
    if (selectedOption === question.answer) {
        feedbackElement.textContent = 'Correct! 🎉';
        feedbackElement.className = 'feedback correct'; // Add class for styling
        score++;
    } else {
        feedbackElement.textContent = 'Try again! ❌';
        feedbackElement.className = 'feedback incorrect'; // Add class for styling
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.innerHTML = `Well done! You have completed the quiz. Your score is ${score}/${questions.length}. <br> Refresh the page to try again.`; // Modify this line
        feedbackElement.className = 'feedback'; // Reset class
        // Optionally, hide the next button since the quiz is over
        document.getElementById('next-button').style.display = 'none';
        currentQuestionIndex = 0; // Reset for replay (or you could set up a restart function)
        score = 0; // Reset score
        // Optionally, you can automatically restart the quiz or add a restart button.
    }
    const quizLevels = [
    { // Level 1
        questions: [
            {
                question: "How many days did God take to create the world?",
                options: ['6', '7', '10', '12'],
                answer: '6'
            },
            {
                question: "What was the first thing God created?",
                options: ['Light', 'Stars', 'Animals', 'Man'],
                answer: 'Light'
            }
            // Add more questions as needed
        ]
    },
    { // Level 2
        questions: [
            {
                question: "Who was the oldest man to live in the Bible?",
                options: ['Methuselah', 'Noah', 'Adam', 'Enoch'],
                answer: 'Methuselah'
            },
            {
                question: "Who did God ask to build an ark?",
                options: ['Moses', 'Abraham', 'Noah', 'Jacob'],
                answer: 'Noah'
            }
            // Add more questions as needed
        ]
    }
    // Add more levels as needed
];

}

window.onload = function() {
    displayQuestion();
};
