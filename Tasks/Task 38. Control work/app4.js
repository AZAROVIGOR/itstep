//4. Дан числовой массив.В массиве чисел найти два самых больших элемента, не используя функцию sort().

let array = [5, 54, 21, 14, 31, 46, 22];


let element = array.reduce((max, item) => {
    if(item > max)
    return item
    return max
})

let twoElement = array.filter(item => item < element).reduce((max, item) => {
    if(item > max)
    return item
    return max
})


console.log(element)
console.log(twoElement)