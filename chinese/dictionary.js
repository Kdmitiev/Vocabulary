const dictionary = {
  
  "Мир": "世界",
  "Солнце": "太阳",
  "Дом": "家",
  "Книга": "书",
  "Ручка": "笔",
  "Стол": "桌子",
  "Стул": "椅子",
  "Телефон": "电话",
  "Компьютер": "电脑",
  "Привет": "你好",
"Спасибо": "谢谢",
"Пожалуйста": "不客气",
"Извините": "对不起",
"Да": "是",
"Нет": "不是",
"Хорошо": "好",
"Плохо": "不好",

"Друг": "朋友",

"Семья": "家庭",

"Мама": "妈妈",

"Папа": "爸爸",

"Брат": "哥哥",

"Сестра": "妹妹",

"Дом": "家",

"Работа": "工作",

"Школа": "学校",

"Учитель": "老师",

"Студент": "学生",

"Книга": "书",

"Ручка": "笔",

"Стол": "桌子",

"Стул": "椅子",

"Еда": "食物",

"Вода": "水",

"Чай": "茶",

"Кофе": "咖啡",

"Молоко": "牛奶",

"Хлеб": "面包",

"Рис": "米饭",

"Мясо": "肉",

"Рыба": "鱼",

"Овощи": "蔬菜",

"Фрукты": "水果",

"Яблоко": "苹果",

"Банан": "香蕉",

"Апельсин": "橙子",

"Время": "时间",

"Час": "小时",

"Минута": "分钟",

"Секунда": "秒",

"День": "天",

"Неделя": "星期",

"Месяц": "月",

"Год": "年",

"Сегодня": "今天",

"Вчера": "昨天",

"Завтра": "明天",

"Утро": "早上",

"День": "下午",

"Вечер": "晚上",

"Ночь": "晚上",

"Погода": "天气",

"Солнце": "太阳",

"Луна": "月亮",

"Звезда": "星星",

"Дождь": "雨",

"Снег": "雪",

"Ветер": "风",

"Облако": "云",

"Гора": "山",

"Река": "河",

"Озеро": "湖",

"Море": "海",

"Лес": "森林",

"Цветок": "花",

"Дерево": "树",

"Животное": "动物",

"Собака": "狗",

"Кот": "猫",

"Птица": "鸟",

"Рыба": "鱼",

"Лошадь": "马",

"Корова": "牛",

"Овца": "羊",

"Свинья": "猪",

"Змея": "蛇",

"Медведь": "熊",

"Тигр": "老虎",

"Лев": "狮子",

"Слон": "大象",

"Обезьяна": "猴子",

"Кролик": "兔子",

"Лиса": "狐狸",

"Волк": "狼",

"Цвет": "颜色",

"Красный": "红色",

"Синий": "蓝色",

"Зеленый": "绿色",

"Желтый": "黄色",

"Белый": "白色",

"Черный": "黑色",

"Серый": "灰色",

"Розовый": "粉色",

"Оранжевый": "橙色",

"Фиолетовый": "紫色",

"Коричневый": "棕色",

"Большой": "大",

"Маленький": "小",

"Новый": "新"
  

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