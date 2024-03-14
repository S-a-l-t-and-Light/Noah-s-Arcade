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
}

window.onload = function() {
    displayQuestion();
};
