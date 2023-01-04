/*
Вы отдыхали с друзьями далеко от дома, но когда пришло время возвращаться, вы понимаете, что топливо на исходе, 
а ближайшая заправка находится в 50 милях от вас! Вы знаете, что в среднем ваш автомобиль расходует около 25 миль на галлон. 
Осталось 2 галлона.
Учитывая эти факторы, напишите функцию, которая говорит вам, можно ли добраться до насоса или нет.

Функция должна возвращаться true, если это возможно, а falseесли нет.
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return mpg * fuelLeft >= distanceToPump ? true : false
};

let fuel = zeroFuel(100,50,1);
console.log(fuel);