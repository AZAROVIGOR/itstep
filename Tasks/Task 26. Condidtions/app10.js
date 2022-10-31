/*Дано число грибов. Вывести в консоль число и слово "грибы" с соответствующим окончанием 
(например, "17 грибов", "1 гриб", "2 гриба" и т.д.) */

var numMushrooms = 1523;
var a = "гриб"
var b = "гриба"
var с = "грибов"

if (numMushrooms % 100 > 4 && numMushrooms % 100 <= 20 ){
    console.log(`${numMushrooms} ${с}`);
}

  else if(numMushrooms % 10 == 1 && numMushrooms != 11 ){
    console.log(`${numMushrooms} ${a}`);
  }

 else if(numMushrooms % 10 >=2 && numMushrooms % 10 <=4){
     console.log(`${numMushrooms} ${b}`);
  }


