// Убрать повторяющиеся  элементы  массива;


// includes - проверяет наличие
// indexOf - находит индекс элемента в массиве
// [1, 3, 4, 6, 2, 2, 1, 3] => [1, 3, 4, 6, 2] - удалить повторы


let array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

let newArray = [];

array.forEach((item) => {           // перебирает все элементы массива
    if(!array.includes(item))       // проверяет наличие 
    array.push(item);               // добавляет элемент в  массив
})


array.filter((item, index) => {
    return array.indexOf(item) == index;
})
