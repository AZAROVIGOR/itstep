/*22. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти. */

let array = [1, 5, 3, 0, 4, 5, 6];

let count = 0;

array.reduce((sum, item) => {
    if(sum > 10){
        return sum
    }
    count ++
    return sum + item
},0)

console.log(count);