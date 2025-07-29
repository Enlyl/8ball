const answers = [
  "Конечно, если не подорвёшься на мине.",
  "Забудь. Даже Чарли бы так не поступил.",
  "Спроси позже — сейчас обстрел, мать его!",
  "Так точно, командир!",
  "Пиздец как возможно.",
  "Ты серьёзно? Даже мой мёртвый напарник в '69 знал ответ.",
  "Если «да» — значит, кто-то точно умрёт.",
  "Это ловушка, Джонни.",
  "Знаки указывают на 'иди нахуй'.",
  "Абсолютно. Как вертолёт 'Хьюи' над дельтой Меконга.",
  "Ты уже в говне по уши — действуй.",
  "С таким вопросом тебя бы и в патруль не взяли.",
  "Жди. Или готовь мешки для трупов.",
  "Ответ неизвестен, база молчит.",
  "Я тебя умоляю… даже Лэнс из взвода бы лучше спросил.",
  "Скорее всего, сдохнешь. Но дерзай.",
  "Да, если снайпер промажет.",
  "Никак нет. Это самоубийство.",
  "Положительно, как взрыв гранаты в сортире.",
  "Ты уже сделал свой выбор — просто не осознал, как глубоко ты в дерьме."
];

const helicopterSound = new Audio("helicopter.m4a");

function getAnswer() {
  const ball = document.getElementById("eightBall");
  const answerBox = document.getElementById("answer");

  // Сброс текста и прозрачность
  answerBox.textContent = "";
  answerBox.style.opacity = 0;

  // Запуск звука
  helicopterSound.currentTime = 0;
  helicopterSound.play();

  // Трясём шар
  ball.classList.add("shake");

  // Показываем ответ с задержкой
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * answers.length);
    answerBox.textContent = answers[randomIndex];
    answerBox.style.opacity = 1;
    ball.classList.remove("shake");
  }, 1500);
}
