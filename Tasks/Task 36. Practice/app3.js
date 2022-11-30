//3. Дано слово. Вывести набор букв, из которых состоит это слово без повторений.

let word = "Мадагаскарм";


 let letters = word.toLowerCase().split('').filter((item, index) => {
 
   return word.indexOf(item) == index;// совпадение индекса искомого элемента будет совпадать с индексом поиска только для первого вхождения

 },0).join(",");



 console.log(letters);


