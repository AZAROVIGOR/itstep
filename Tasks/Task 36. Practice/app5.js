//5. Дано предложение. Проверить, есть ли в этом предложение заданное слово.

const str = "Функция, вызываемая для каждого элемента массива arr."

let findeWord = "каждого";

const newStr = str.toLowerCase().split(" ").includes(findeWord.toLowerCase());

console.log(newStr)