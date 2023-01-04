/*Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. 
По сути, переставьте цифры, чтобы получить максимально возможное число.*/

function descendingOrder(n) {
    let num = String(n).split("").sort((a, b) => b - a).join("");


    return +num
}



let num = descendingOrder(1021);
console.log(typeof num);
    
toString