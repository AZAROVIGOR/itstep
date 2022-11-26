

const str = "функция, вызываемая для каждого элемента массива";

const newStr = str.split(" ")
.map((item) => item[0].toUpperCase() + item.slice("1"))
.join(" ");

console.log(newStr);