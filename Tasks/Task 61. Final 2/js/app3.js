/*
3. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые меньше медианы среди  всех элементов массива. 
выбрать среднее значение массива сортруем по возрастанию => длинну пополам 
*/

function findValues(arr){
    return arr.sort((a,b) => a - b).slice(0, arr.length / 2);
}

console.log(findValues([1, 3, 6, 4, 3, 3, 5, 6]));