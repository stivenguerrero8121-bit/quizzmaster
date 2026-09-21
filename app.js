
const categories = [
  {name:"Todas", icon:"✦"},
  {name:"Ciencia", icon:"⚗"},
  {name:"Historia", icon:"⌛"},
  {name:"Geografía", icon:"⌖"},
  {name:"Deportes", icon:"⚽"},
  {name:"Música", icon:"♫"},
  {name:"Cine y televisión", icon:"▶"},
  {name:"Tecnología", icon:"⌘"},
  {name:"Cultura general", icon:"◎"}
];

const state = {
  selectedCategory: "Todas",
  selectedQuestions: [],
  currentIndex: 0,
  score: 0,
  correct: 0,
  streak: 0,
  maxStreak: 0,
  answered: false,
  timeLeft: 15,
  timerId: null,
  questionStartedAt: null
};

const $ = (id) => document.getElementById(id);

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  $(`${name}-screen`).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function getAvailableQuestions() {
  if (state.selectedCategory === "Todas") return window.QUIZZMASTER_QUESTIONS;
  return window.QUIZZMASTER_QUESTIONS.filter(q => q.categoria === state.selectedCategory);
}

function buildGameQuestions() {
  const available = getAvailableQuestions();
  if (available.length < 10) {
    alert(`No hay suficientes preguntas en "${state.selectedCategory}" para una partida de 10 preguntas.`);
    return false;
  }

  const selected = shuffle(available).slice(0, 10);
  const uniqueIds = new Set(selected.map(q => q.id));

  if (selected.length !== 10 || uniqueIds.size !== 10) {
    throw new Error("No se pudo crear una partida con 10 preguntas únicas.");
  }

  state.selectedQuestions = selected;
  return true;
}

function startGame(category) {
  stopTimer();
  state.selectedCategory = category;
  state.currentIndex = 0;
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  state.maxStreak = 0;
  state.answered = false;

  if (!buildGameQuestions()) return;
  showScreen("game");
  renderQuestion();
}

function renderQuestion() {
  const q = state.selectedQuestions[state.currentIndex];
  state.answered = false;
  state.timeLeft = 15;
  state.questionStartedAt = performance.now();

  $("progress-label").textContent = `Pregunta ${state.currentIndex + 1} de 10`;
  $("progress-bar").style.width = `${((state.currentIndex + 1) / 10) * 100}%`;
  $("score").textContent = state.score;
  $("streak").textContent = state.streak;
  $("question-category").textContent = q.categoria;
  $("category-label").textContent = state.selectedCategory === "Todas" ? "Todas las categorías" : q.categoria;
  $("question-difficulty").textContent = q.dificultad;
  $("question-text").textContent = q.pregunta;
  $("timer").textContent = state.timeLeft;
  $("timer").classList.remove("warning");

  const answers = $("answers");
  answers.innerHTML = "";

  shuffle(q.opciones).forEach(option => {
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = option;
    button.dataset.answer = option;
    button.addEventListener("click", () => handleAnswer(option, button));
    answers.appendChild(button);
  });

  $("feedback").classList.add("hidden");
  startTimer();
}

function startTimer() {
  stopTimer();
  state.timerId = setInterval(() => {
    state.timeLeft -= 1;
    $("timer").textContent = state.timeLeft;
    if (state.timeLeft <= 5) $("timer").classList.add("warning");
    if (state.timeLeft <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function stopTimer() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function handleAnswer(answer, clickedButton) {
  if (state.answered) return;
  state.answered = true;
  stopTimer();

  const q = state.selectedQuestions[state.currentIndex];
  const isCorrect = answer === q.respuestaCorrecta;
  const buttons = [...document.querySelectorAll(".answer-btn")];

  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === q.respuestaCorrecta) {
      btn.classList.add("correct", "reveal");
    }
  });

  if (!isCorrect) clickedButton.classList.add("incorrect");

  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;
    state.maxStreak = Math.max(state.maxStreak, state.streak);

    const bonus = Math.max(0, Math.round((state.timeLeft / 15) * 50));
    const earned = 100 + bonus;
    state.score += earned;
    showFeedback(true, earned, q.explicacion);
  } else {
    state.streak = 0;
    showFeedback(false, 0, q.explicacion);
  }

  $("score").textContent = state.score;
  $("streak").textContent = state.streak;
}

function handleTimeout() {
  if (state.answered) return;
  state.answered = true;

  const q = state.selectedQuestions[state.currentIndex];
  state.streak = 0;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.answer === q.respuestaCorrecta) {
      btn.classList.add("correct", "reveal");
    }
  });

  $("streak").textContent = state.streak;
  showFeedback(false, 0, `Se agotó el tiempo. La respuesta correcta era "${q.respuestaCorrecta}". ${q.explicacion}`);
}

function showFeedback(isCorrect, points, explanation) {
  $("feedback-symbol").textContent = isCorrect ? "✓" : "!";
  $("feedback-symbol").style.background = isCorrect ? "#eaf9f2" : "#fff0f2";
  $("feedback-symbol").style.color = isCorrect ? "#1d9d72" : "#d84a5a";
  const title = $("feedback-title");
  title.textContent = isCorrect ? "¡Correcto!" : "Respuesta incorrecta";
  title.className = isCorrect ? "correct-text" : "incorrect-text";
  $("points-earned").textContent = `+${points}`;
  $("feedback-text").textContent = explanation;
  $("feedback").classList.remove("hidden");
}

function nextQuestion() {
  if (!state.answered) return;
  if (state.currentIndex >= 9) {
    stopTimer();
    showResults();
    return;
  }
  state.currentIndex += 1;
  renderQuestion();
}

function showResults() {
  stopTimer();
  $("final-score").textContent = state.score;
  $("final-correct").textContent = `${state.correct}/10`;
  $("final-percent").textContent = `${Math.round((state.correct / 10) * 100)}%`;
  $("final-streak").textContent = state.maxStreak;
  showScreen("results");
}

function renderCategories() {
  const grid = $("category-grid");
  grid.innerHTML = "";
  categories.forEach(cat => {
    const count = cat.name === "Todas"
      ? window.QUIZZMASTER_QUESTIONS.length
      : window.QUIZZMASTER_QUESTIONS.filter(q => q.categoria === cat.name).length;

    const button = document.createElement("button");
    button.className = "category-btn";
    button.type = "button";
    button.innerHTML = `<div class="category-icon">${cat.icon}</div><div class="category-name">${cat.name}</div><div class="category-count">${count} preguntas disponibles</div>`;
    button.addEventListener("click", () => startGame(cat.name));
    grid.appendChild(button);
  });
}

function goHome() {
  if (state.selectedQuestions.length && !state.answered && state.currentIndex < 10) {
    const shouldLeave = window.confirm("¿Quieres salir de la partida? Perderás el progreso actual.");
    if (!shouldLeave) return;
  }
  stopTimer();
  state.selectedQuestions = [];
  showScreen("home");
}

$("play-btn").addEventListener("click", () => startGame("Todas"));
$("category-btn").addEventListener("click", () => {
  renderCategories();
  showScreen("category");
});
$("next-btn").addEventListener("click", nextQuestion);
$("replay-btn").addEventListener("click", () => startGame(state.selectedCategory));
$("home-btn").addEventListener("click", goHome);

document.querySelectorAll("[data-back='home']").forEach(btn => btn.addEventListener("click", goHome));

renderCategories();
