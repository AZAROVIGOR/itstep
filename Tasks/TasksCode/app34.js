/*
Есть массив с некоторыми числами. Все числа равны, кроме одного. Попробуйте найти!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/













let arr = [1, 1, 1, 2, 1, 1];

console.log(Array.from (new Set(arr)))