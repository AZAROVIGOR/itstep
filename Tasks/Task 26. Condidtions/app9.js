/*Дан номер дня недели и время в часах и минутах по отдельности. Определить, рабочее 
это время или нет, если время считается рабочим с 1 по 5 день с 8.00 по 17.00.*/

var dayWeek = 5;
var timeHour = 8;
var timeMin = 00;

if(dayWeek >=1 && dayWeek <= 5 && timeHour >= 8 && timeHour < 17 ){
    console.log("Время рабочее");
}

else if (timeHour < 8 || timeHour >= 17 && timeMin >=00 && timeMin < 60) {
    console.log("Время не рабочее");
}

else if (dayWeek >= 6 && dayWeek <= 7 ){
    console.log("Выходной");
}








