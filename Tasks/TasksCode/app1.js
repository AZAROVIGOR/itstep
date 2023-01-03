/*Создайте функцию, которая принимает целое число в качестве аргумента и возвращает 
«Четное» для четных чисел или «Нечетное» для нечетных чисел.
*/

function evenOrOdd(number) {
     number = Math.abs( Math.trunc(number));
    if (number % 2 == 0){
        console.log(`${number} - четное`);
    }
    else{
        console.log(`${number} - не четное`);
    }
};

evenOrOdd(-4.6);
//cod
// function evenOrOdd(number) {
//     if (number % 2 == 0) {
//         return "Even"
//     }
//     return "Odd"
// }

