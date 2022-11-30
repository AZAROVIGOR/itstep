//2. Вывести последнее слово в предложении.

const str = "Функция, вызываемая для каждого элемента массива arr."

const newStr = str.split(" ");

console.log(newStr.at(-1));