const API_URL = 'https://opentdb.com/api.php';
const triviaForm = $('#trivia-form');
const triviaContainer = $('#trivia-container');
const loadingContainer = $('#loading');
let questions = [];




const fetchTriviaQuestions = async (category, difficulty) => {
    let categoryId;
    switch (category) {
        case 'disney':
            categoryId = 32; // Category ID for Entertainment: Cartoon & Animations (Disney)
            break;
        case 'film':
            categoryId = 11; // Category ID for Entertainment: Film
            break;
        case 'countries':
            categoryId = 22; // Category ID for Geography: Countries
            break;
        default:
            categoryId = ''; // Default empty string
            break;
    }

    try {
        const response = await fetch(`${API_URL}?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`);
        const data = await response.json();
        questions = data.results;
        displayTriviaQuestions();
    } catch (error) {
        console.error('Error fetching trivia questions:', error);
    }
};

const displayTriviaQuestions = () => {
    triviaContainer.empty();
    questions.forEach((question, index) => {
        const questionElement = $('<div>').addClass('question');
        questionElement.html(`
            <h3>Question ${index + 1}:</h3>
            <p>${question.question}</p>
            <form id="answer-form-${index}">
                ${question.incorrect_answers.map(answer => `
                    <input type="radio" id="answer-${answer}" name="answers-${index}" value="${answer}">
                    <label for="answer-${answer}">${answer}</label><br>
                `).join('')}
                <input type="radio" id="answer-${question.correct_answer}" name="answers-${index}" value="${question.correct_answer}">
                <label for="answer-${question.correct_answer}">${question.correct_answer}</label><br>
            </form>
        `);
        triviaContainer.append(questionElement);
    });

    // Add the Submit Answers button after displaying all questions
    triviaContainer.append('<button id="submit-answers" type="button">Submit Answers</button>');

    // Attach event listener to the Submit Answers button
    $('#submit-answers').click(submitAnswers);
};

const submitAnswers = () => {
    // Logic to collect and evaluate answers
    // This function will handle the submission of all answers at once
    const submitAnswers = () => {
        // Initialize variables to keep track of correct answers and total questions
        let correctAnswers = 0;
        const totalQuestions = questions.length;
    
        // Loop through each question
        questions.forEach((question, index) => {
            // Get the selected answer for the current question
            const selectedAnswer = $(`input[name=answers-${index}]:checked`).val();
    
            // Check if the selected answer matches the correct answer
            if (selectedAnswer === question.correct_answer) {
                correctAnswers++; // Increment correct answers count
            }
        });
    
        // Calculate the user's score
        const score = Math.round((correctAnswers / totalQuestions) * 100);
    
        // Display the user's score
        alert(`You answered ${correctAnswers} out of ${totalQuestions} questions correctly.\nYour score: ${score}%`);
    };
    
};


triviaForm.on('submit', async event => {
    event.preventDefault();
    const category = $('#category').val();
    const difficulty = $('#difficulty').val();

    // Hide loading animation when the form is submitted
    $('#loading').hide();

    // Fetch trivia questions after hiding the loading animation
    await fetchTriviaQuestions(category, difficulty);
});

// Event listener for submitting answers
triviaContainer.on('click', '.submit-answer', function() {
    const questionIndex = $(this).data('question-index');
    const selectedAnswer = $(`input[name="answers-${questionIndex}"]:checked`).val();
    // Process the selected answer here (e.g., compare with correct answer, update score, etc.)
    console.log(`Question ${questionIndex + 1}: Selected answer - ${selectedAnswer}`);
});


$(document).ready(function() {
    $('.start').click(function() {
        $('#loading').hide();
        $('.main').show();
    });
});







