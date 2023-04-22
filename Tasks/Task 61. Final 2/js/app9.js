//9. Дано дата в формате "день.месяц.год". Вывести дату, которая будет через 10 дней.


function getDate(str) {
    let newDate = str.split(".").reverse().join(".");

    let addDays = new Date(newDate);
    addDays.setDate(addDays.getDate() + 10);

    return addDays.toLocaleDateString();
}

console.log(getDate("31.01.2011"));

