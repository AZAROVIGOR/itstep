// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function dayWeek(day){

    if(day == 1){
        return "Понедельник"
    }
    else if(day == 2){
        return "Вторник"
    }
    else if (day == 3) {
        return "Среда"
    }
    else if (day == 4) {
        return "Четверг"
    }
    else if (day == 5) {
        return "Пятница"
    }
    else if (day == 6) {
        return "ВСуббота"
    }
    else if (day == 7) {
        return "Воскресенье"
    }
    else   {
        return "Число введено некорректно !!!"
    }
}

let a = dayWeek(7);

console.log(a);