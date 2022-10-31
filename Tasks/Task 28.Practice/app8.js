//Дан день, месяц и год (3 числа). Определить, является ли дата корректной.

var day = 31;
var month = 1;
var year = 2023;



if (month == 4 || month == 6 || month == 10 || month == 11 && day > 0 && day <= 30 && day  && year <= 9999) {
    console.log("Коректная дата");
}



else if (month == 2 && day > 0 && day <= 29 && (year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)){
     console.log("Коректная дата");
 }
 else if(month == 2 && day > 0 && day <=28 && year <=9999){
     console.log("Коректная дата");
 }

else if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12 && day > 0 && day <= 31 && year <= 9999) {
      console.log("Коректная дата");
 }

else{
    console.log("Дата не коректная");
}