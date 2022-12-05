//8. Дано число. Получить новое число, состоящее из цифр данного числа, расставленных в порядке убывания.

let N = 10;

let array = [];

for(let i = 0; i <= N; i++){
    array.push(i);
}

let number = array.sort((a, b) => b - a).toString().split(",").join("")

console.log(+number);

