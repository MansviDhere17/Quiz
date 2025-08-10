<<<<<<< HEAD
const questionsData = {
  easy: [
    { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { q: "What color is the sky?", options: ["Blue", "Green", "Red", "Pink"], answer: "Blue" },
    { q: "Which is a fruit?", options: ["Carrot", "Apple", "Potato", "Spinach"], answer: "Apple" },
    { q: "What is the capital of France?", options: ["Rome", "London", "Paris", "Berlin"], answer: "Paris" },
    { q: "How many days are in a week?", options: ["5", "6", "7", "8"], answer: "7" }
  ],
  medium: [
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
    { q: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Austen", "Tolkien"], answer: "Shakespeare" },
    { q: "What is the boiling point of water?", options: ["100°C", "90°C", "50°C", "150°C"], answer: "100°C" },
    { q: "Largest mammal in the world?", options: ["Elephant", "Blue Whale", "Shark", "Giraffe"], answer: "Blue Whale" },
    { q: "What is 15 ÷ 3?", options: ["3", "5", "6", "4"], answer: "5" }
  ],
  hard: [
    { q: "E = mc² was proposed by?", options: ["Newton", "Einstein", "Tesla", "Bohr"], answer: "Einstein" },
    { q: "What is the square root of 256?", options: ["12", "14", "16", "18"], answer: "16" },
    { q: "Chemical symbol for Gold?", options: ["Au", "Ag", "Gd", "Go"], answer: "Au" },
    { q: "Who painted the Mona Lisa?", options: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"], answer: "Da Vinci" },
    { q: "Fastest land animal?", options: ["Cheetah", "Horse", "Falcon", "Tiger"], answer: "Cheetah" }
  ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Start quiz
function startQuiz(level) {
  currentQuestions = shuffleArray([...questionsData[level]]).slice(0, 5);
  currentIndex = 0;
  score = 0;
  document.getElementById("home").classList.add("hide");
  document.getElementById("score-container").classList.add("hide");
  document.getElementById("question-container").classList.remove("hide");
  showQuestion();
}

// Show question
function showQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("question").textContent = q.q;
  document.getElementById("progress").textContent = `Question ${currentIndex + 1}/5`;
  const optionBtns = document.querySelectorAll(".option");
  q.options = shuffleArray(q.options);
  optionBtns.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.classList.remove("correct", "incorrect");
    btn.disabled = false;
  });
  document.getElementById("next-btn").disabled = true;
}

// Option select
function selectOption(btn) {
  const correct = currentQuestions[currentIndex].answer;
  const options = document.querySelectorAll(".option");
  options.forEach(o => {
    o.disabled = true;
    if (o.textContent === correct) {
      o.classList.add("correct");
    }
  });
  if (btn.textContent === correct) score++;
  else btn.classList.add("incorrect");
  document.getElementById("next-btn").disabled = false;
}

// Next question
function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Show score
function showScore() {
  const scoreEl = document.getElementById("score");
  scoreEl.textContent = score;
  scoreEl.className = score <= 2 ? "score-low" : score === 3 ? "score-mid" : "score-high";
  document.getElementById("question-container").classList.add("hide");
  document.getElementById("score-container").classList.remove("hide");
}

// Restart
function restartQuiz() {
  document.getElementById("home").classList.remove("hide");
  document.getElementById("score-container").classList.add("hide");
}

// Back
function goBack() {
  document.getElementById("home").classList.remove("hide");
  document.getElementById("question-container").classList.add("hide");
  document.getElementById("score-container").classList.add("hide");
}

// Shuffle
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
// 📝 Fun Facts Array
const funFacts = [
  "Bananas are berries, but strawberries aren’t!",
  "Honey never spoils — archaeologists have found edible honey in ancient tombs.",
  "Octopuses have three hearts and blue blood.",
  "Sharks existed before trees.",
  "A day on Venus is longer than a year on Venus.",
  "Wombat poop is cube-shaped.",
  "Sloths can hold their breath longer than dolphins."
];

// Show score + fun fact
function showScore() {
  const scoreEl = document.getElementById("score");
  scoreEl.textContent = score;
  scoreEl.className = score <= 2 ? "score-low" : score === 3 ? "score-mid" : "score-high";
  
  // Random fun fact
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  document.getElementById("fun-fact").textContent = fact;

  document.getElementById("question-container").classList.add("hide");
  document.getElementById("score-container").classList.remove("hide");
}
=======
const questionsData = {
  easy: [
    { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
    { q: "What color is the sky?", options: ["Blue", "Green", "Red", "Pink"], answer: "Blue" },
    { q: "Which is a fruit?", options: ["Carrot", "Apple", "Potato", "Spinach"], answer: "Apple" },
    { q: "What is the capital of France?", options: ["Rome", "London", "Paris", "Berlin"], answer: "Paris" },
    { q: "How many days are in a week?", options: ["5", "6", "7", "8"], answer: "7" }
  ],
  medium: [
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
    { q: "Who wrote 'Romeo and Juliet'?", options: ["Shakespeare", "Dickens", "Austen", "Tolkien"], answer: "Shakespeare" },
    { q: "What is the boiling point of water?", options: ["100°C", "90°C", "50°C", "150°C"], answer: "100°C" },
    { q: "Largest mammal in the world?", options: ["Elephant", "Blue Whale", "Shark", "Giraffe"], answer: "Blue Whale" },
    { q: "What is 15 ÷ 3?", options: ["3", "5", "6", "4"], answer: "5" }
  ],
  hard: [
    { q: "E = mc² was proposed by?", options: ["Newton", "Einstein", "Tesla", "Bohr"], answer: "Einstein" },
    { q: "What is the square root of 256?", options: ["12", "14", "16", "18"], answer: "16" },
    { q: "Chemical symbol for Gold?", options: ["Au", "Ag", "Gd", "Go"], answer: "Au" },
    { q: "Who painted the Mona Lisa?", options: ["Picasso", "Da Vinci", "Van Gogh", "Michelangelo"], answer: "Da Vinci" },
    { q: "Fastest land animal?", options: ["Cheetah", "Horse", "Falcon", "Tiger"], answer: "Cheetah" }
  ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Start quiz
function startQuiz(level) {
  currentQuestions = shuffleArray([...questionsData[level]]).slice(0, 5);
  currentIndex = 0;
  score = 0;
  document.getElementById("home").classList.add("hide");
  document.getElementById("score-container").classList.add("hide");
  document.getElementById("question-container").classList.remove("hide");
  showQuestion();
}

// Show question
function showQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("question").textContent = q.q;
  document.getElementById("progress").textContent = `Question ${currentIndex + 1}/5`;
  const optionBtns = document.querySelectorAll(".option");
  q.options = shuffleArray(q.options);
  optionBtns.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.classList.remove("correct", "incorrect");
    btn.disabled = false;
  });
  document.getElementById("next-btn").disabled = true;
}

// Option select
function selectOption(btn) {
  const correct = currentQuestions[currentIndex].answer;
  const options = document.querySelectorAll(".option");
  options.forEach(o => {
    o.disabled = true;
    if (o.textContent === correct) {
      o.classList.add("correct");
    }
  });
  if (btn.textContent === correct) score++;
  else btn.classList.add("incorrect");
  document.getElementById("next-btn").disabled = false;
}

// Next question
function nextQuestion() {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Show score
function showScore() {
  const scoreEl = document.getElementById("score");
  scoreEl.textContent = score;
  scoreEl.className = score <= 2 ? "score-low" : score === 3 ? "score-mid" : "score-high";
  document.getElementById("question-container").classList.add("hide");
  document.getElementById("score-container").classList.remove("hide");
}

// Restart
function restartQuiz() {
  document.getElementById("home").classList.remove("hide");
  document.getElementById("score-container").classList.add("hide");
}

// Back
function goBack() {
  document.getElementById("home").classList.remove("hide");
  document.getElementById("question-container").classList.add("hide");
  document.getElementById("score-container").classList.add("hide");
}

// Shuffle
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
// 📝 Fun Facts Array
const funFacts = [
  "Bananas are berries, but strawberries aren’t!",
  "Honey never spoils — archaeologists have found edible honey in ancient tombs.",
  "Octopuses have three hearts and blue blood.",
  "Sharks existed before trees.",
  "A day on Venus is longer than a year on Venus.",
  "Wombat poop is cube-shaped.",
  "Sloths can hold their breath longer than dolphins."
];

// Show score + fun fact
function showScore() {
  const scoreEl = document.getElementById("score");
  scoreEl.textContent = score;
  scoreEl.className = score <= 2 ? "score-low" : score === 3 ? "score-mid" : "score-high";
  
  // Random fun fact
  const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
  document.getElementById("fun-fact").textContent = fact;

  document.getElementById("question-container").classList.add("hide");
  document.getElementById("score-container").classList.remove("hide");
}
>>>>>>> fabf851 (Committing)
