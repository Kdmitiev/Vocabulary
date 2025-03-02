const dictionary = {
  "Привет": "你好",
  "Мир": "世界",
  "Солнце": "太阳",
  "Дом": "家",
  "Книга": "书",
  "Ручка": "笔",
  "Стол": "桌子",
  "Стул": "椅子",
  "Телефон": "电话",
  "Компьютер": "电脑"
};

document.addEventListener("DOMContentLoaded", function() {
  const rusWordButton = document.querySelector(".rus-word");
  const chineWordButton = document.querySelector(".chine-word");
  let currentRusWord = ""; // Переменная для хранения текущего русского слова

  rusWordButton.addEventListener("click", function() {
      const rusWords = Object.keys(dictionary);
      const randomIndex = Math.floor(Math.random() * rusWords.length);
      currentRusWord = rusWords[randomIndex];
      rusWordButton.textContent = currentRusWord; // Выводим русское слово на кнопку
  });

  chineWordButton.addEventListener("click", function() {
      if (currentRusWord) {
          const chineWord = dictionary[currentRusWord];
          if (chineWord) {
              chineWordButton.textContent = chineWord; // Выводим китайский перевод на кнопку
          } 
      } 
  });
});