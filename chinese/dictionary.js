let chineseWord = ".chine-word";
let russianTranslation = ".rus-word";
let wordList = [];
const initialDictionary = [
    { chinese: "你好", russian: "Привет" },
    { chinese: "谢谢", russian: "Спасибо" },
    { chinese: "再见", russian: "До свидания" },
    { chinese: "我爱你", russian: "Я тебя люблю" }
  ];
  
  // Запускаем инициализацию словаря после загрузки страницы.
  document.addEventListener('DOMContentLoaded', function() {
    initializeDictionary(initialDictionary);
  });

  function getRandomWord() {
    if (wordList.length === 0) {
      return null; 
    }
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  }