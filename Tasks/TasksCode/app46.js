/*
Если Алекс набирает 10 и более обручей, возвращает строку «Отлично, теперь переходим к трюкам».
Если он не наберет 10 обручей, верните строку «Продолжай, пока не наберешь»
*/

const hoopCount = (n) => n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";

let hoop = hoopCount(11)
console.log(hoop);