/*Дан список целых чисел, определить, является ли сумма его элементов четной или нечетной.

Дайте ответ в виде строки, соответствующей «нечетному» или «четному».

Если входной массив пуст, рассматривайте его как: [0] (массив с нулем).
*/

function oddOrEven(array) {
    let number = array.reduce((sum, item) => sum + item, 0);
    if (number % 2 == 0) return "even"
    return "odd"
}

//const oddOrEven = a => a.reduce((sum, item) => sum + item, 0) % 2 == 0 ? "even" : "odd";

let x = oddOrEven([]);


console.log(oddOrEven([0, 1, 5]));







  