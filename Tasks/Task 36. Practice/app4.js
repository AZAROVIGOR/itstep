//4. Даны 2 слова. Проверить, состоят ли они из одних и тех же букв.


let a = "рост";
let b = "сорт";


let a1 = a.toLowerCase().split("").sort().join('');
let b2 = b.toLowerCase().split("").sort().join('');

console.log(a1 == b2);