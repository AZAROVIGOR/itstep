/*Завершите решение так, чтобы оно возвращало true, если первый переданный аргумент (строка) заканчивается вторым аргументом (тоже строкой).
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


function solution(str, ending) {
    let result = str.substring(str.length - ending.length);
    return ending == result
}

let a = solution('abcde', 'abc');
console.log(a);

// function solution(str, ending) {
//     return str.endsWith(ending);
// }

