/*Завершите функцию, которая принимает строковый параметр и переворачивает каждое слово в строке. Все пробелы в строке должны быть сохранены.
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces" ==> "elbuod  secaps"
*/
const reverseWords = (str) => str.split(" ")
.map(item => item.split("").reverse().join(""))
.join(" ");


let rev = reverseWords("sihT si na !elpmaxe");
console.log(rev);

