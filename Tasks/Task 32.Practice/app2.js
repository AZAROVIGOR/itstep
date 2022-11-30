//2. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

function result(x, y, z){

    return (x - y) / z;
}

let a = result(20, 8, 4);

console.log(a);

let res = (a, b, c) => (a - b)/c;

let b = res(20, 8, 4);
console.log(b);