/*Учитывая набор чисел, верните добавку, обратную каждому из них. 
Каждое положительное становится отрицательным, а отрицательное становится положительным.
*/

// function invert(array) {
//    return array.map(item => item < 0 ? Math.abs(item) : item * -1 );
// }

function invert(array) {
    return array.map(e => e * -1);
}


let result = invert([1, -2, 3, -4, 5]);
console.log(result);


