//Учитывая случайное неотрицательное число, вы должны вернуть цифры этого числа в массиве в обратном порядке.

function digitize(n) {
    return String(n).split("").map(item => +item).reverse();
}


let arr = digitize(35231)
console.log(arr);

