/*quiz*/
const questions = [
    {
      question: "Which of these foods should you avoid if you have fibromyalgia?",
      answers: ["Fibers", "Alcohol", "Iron-rich foods", "Protein"],
      correct: "Alcohol",
    },
    {
      question:
        "Which of these definitions best match the meaning of Crohn disease?",
      answers: [
        "A chronic inflammation of the digestive tract causing pain, diarrhea, and weight loss",
        " A condition where the body lacks enough healthy red blood cells to carry oxygen",
        "Excessive body fat that increases the risk of health problems.",
        "A a disease where the body can't properly regulate blood sugar levels.",
      ],
      correct:
        "A chronic inflammation of the digestive tract causing pain, diarrhea, and weight loss",
    },
    {
      question:
        "Which nutrient is really beneficial for individuals who are 60 years and above?",
      answers: ["Fats", "Fiber", "Calcium", "Sodium"],
      correct: "Calcium",
    },
    {
      question: "Which of the following habits is good for your health?",
      answers: [
        "Skipping breakfast to reduce calorie intake",
        "Drinking water instead of sugary drinks",
        "Exercising only when feeling stressed",
        "Sleeping less to have more productive hours",
      ],
      correct: "Drinking water instead of sugary drinks",
    },
    {
      question: "Preserved and overprocessed foods are linked to what?",
      answers: ["Heart disease", "Typhoid", "Celiac Disease", "Cholera"],
      correct: "Heart disease",
    },
  ];
  // ===== DOM Elements: Storing references to HTML elements =====
  const questionElement = document.getElementById("question");
  const answerButtons = document.getElementById("answer-buttons");
  const scoreContainer = document.getElementById("score-container");
  const finalScore = document.getElementById("final-score");
  const restartBtn = document.getElementById("restart-btn");
  
  // ===== Quiz State Variables =====
  let currentQuestionIndex = 0; // Tracks which question is being shown
  let score = 0; // Tracks number of correct answers
  
  // ===== Start the Quiz =====
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreContainer.classList.add("hidden"); // Hide score section
    document.getElementById("quiz").classList.remove("hidden"); // Show quiz section
    showQuestion(); // Display first question
  }
  
  // ===== Display Current Question =====
  function showQuestion() {
    resetAnswers(); // Clear old answer buttons
    const currentQuestion = questions[currentQuestionIndex]; // Get current question
    questionElement.textContent = currentQuestion.question; // Set question text
  
    // Create a button for each answer choice
    currentQuestion.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.textContent = answer;
      button.classList.add("btn");
  
      // Mark the button if it's the correct answer
      if (answer === currentQuestion.correct) {
        button.dataset.correct = true;
      }
  
      // Add click event listener to check the answer
      button.addEventListener("click", selectAnswer);
      answerButtons.appendChild(button); // Add button to the page
    });
  }
  
  // ===== Remove Old Answer Buttons =====
  function resetAnswers() {
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }
  
  // ===== Handle Answer Selection =====
  function selectAnswer(e) {
    const selectedButton = e.target; // Get the clicked button
    const correct = selectedButton.dataset.correct === "true"; // Check if correct
  
    if (correct) {
      score++; // Increment score if correct
    }
  
    currentQuestionIndex++; // Move to the next question
  
    if (currentQuestionIndex < questions.length) {
      showQuestion(); // Show next question
    } else {
      endQuiz(); // If no more questions, show results
    }
  }
  
  // ===== End of Quiz: Display Score =====
  function endQuiz() {
    document.getElementById("quiz").classList.add("hidden"); // Hide quiz section
    scoreContainer.classList.remove("hidden"); // Show score section
    finalScore.textContent = `${score} out of ${questions.length}`; // Show score
  }
  
  // ===== Restart Button Event Listener =====
  restartBtn.addEventListener("click", startQuiz);
  
  // // ===== Initialize Quiz on Page Load =====
  startQuiz();
  
  
  