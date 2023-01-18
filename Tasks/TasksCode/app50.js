/*
Примечание: эта ката вдохновлена ​​​​преобразованием числа в строку! Попробуйте и это.
Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этого вы знаете?
*/

const stringToNumber = function (str) {
   return +str
}


let string = stringToNumber("1234")
console.log(string, typeof string)