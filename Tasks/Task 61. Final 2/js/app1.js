//1. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.

function getNumberRevers(num) {
    return +(String(num).split("").reverse().join(""));
}

console.log(getNumberRevers(12345))