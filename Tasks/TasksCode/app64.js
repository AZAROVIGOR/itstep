// отфильтровать false в массиве

const arr = ["correct", 0, false, 9, NaN, "", 7];

const notFalse = arr.filter(item => Boolean(item));
console.log(notFalse)