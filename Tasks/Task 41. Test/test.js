// 1. Чему будет рано значение переменной a после выполнения кода ?

var a = 5;
//let a;
console.log("TASK 1")
console.log(a)  // ошибка т,к переменная а уже существует

// *** 2. Какое значение будет выведено на экран после выполнения кода ?

function count() {
    for (var i = 0; i < 3; i++) {
        var j = i * 2;
    }
    return i + j;

}

console.log("TASK 2")
console.log(count())   // 6 (не  верно) , правильно 7

//3. Что будет выведено в консоль ?
console.log("TASK 3")
console.log(+false, +null, +undefined); // 0.0.NAN


//4. Что выведет этот код ?


var obj = {
    "0": 1,
    0: 2
    
};
console.log("TASK 4")
console.log(obj["0"] + obj[0]); // 4  имена свойств д.быть строками, числовой ключ object key преобразуется в строковый, но так как в объектах ключи уникальные, остается лишь последний из одинаковых

//5.*** Что выведет этот код ?

    a = 2, с = 0;
var b = a + a * a / с;
console.log("TASK 5")
console.log(b); // NAN   !!!правильно infinity


//6. file.js содержит следующий код:

//alert(1);
//Что будет выведено при подключении следующей конструкции ?
    // <script src="file.js">
    //     alert(2);
    // </script>

//7.  После выполнения этого кода – в каких объектах из списка содержится свойство name?

function User() { }
var vasya = new User();
vasya.__proto__.name = "Vasya";

//8.*** Какое из следующих выражений вернет false?

console.log("TASK 8")
console.log(undefined == 0) // false
console.log('' == false)
console.log(null >= 0)
console.log(null == undefined) 
console.log('2' > 1) 

//9.  Сколько раз будет показано сообщение тик и стоп после запуска скрипта?

// var timerId = setInterval(function () {
//     console.log("тик");
// }, 2000);

// setTimeout(function () {
//     clearInterval(timerId);
//     console.log('стоп');
// }, 6000);

//10. Чему равно 0 || 1 && 2 || 3 ?
console.log("TASK 10")
console.log(0 || 1 && 2 || 3 );// 2


//11.  Чему равно значение x ?

var x = "a" * 2;
if (x === NaN)
    x = 1;
else
    x = x * x;
console.log("TASK 11")
console.log(x);// 1   правильно NAN

//12.***   Какой из следующих логических операторов при сравнении null c 0 возвращает true?

console.log("TASK 12")
console.log(null >= 0) // yes
console.log(null > 0)
console.log(null == 0) //yes -- не верно будет false
console.log(null < 0)
console.log(null === 0)

//13. Чему равно значение переменной a?

var a = null == undefined;

console.log("TASK 13")
console.log(a)// true

//14.  Чему будет равно значение переменной a после выполнения кода ?

// let a = 5;
//var a;
//console.log("TASK 14")
//console.log(a)// код содержит ошибку т,к переменная а уже существует

//15.***  Чему равно значение переменной x?

var x = "1";
if ("0")
    x++;
    
else
    x += 3;

console.log("TASK 15")    
console.log(x)  // 1  правильно 2

//16.***  Какой будет результат выполнения функции ?

//     (function () {
//         return typeof arguments;
//     })()

// console.log("TASK 16");
// console.log();

//17 Чему равно значение выражения ? typeof {} + " " + typeof function(){};
console.log("TASK 17"); 
console.log(typeof {} + " " + typeof function () { }); //object function

//18***    Что будет выведено в консоль ?

 //let b = 3

function F() {
    var a = 1;
    if (a == 1) {
        var b = 2;
    }
    return b;
}
console.log("TASK 18");
console.log(F()) // 2


/*19.  Какая из следующих переменных названы неверно с точки зрения синтаксиса ?

-  1a  // не верно 
-  _$
-  _a
-  $a
-  $_
*/

//20.  Чему равно значение переменно z ?

var x = 1;
if (x) {
    let y = 3;
}
else {
    let y = 2;
}
//let z = x + y;

console.log("TASK 20");
//console.log(z); //Код содержит ошибку  y is not defined

//21.  var n = [4,6,19,34,32];
var n = [4, 6, 19, 34, 32];
console.log("TASK 21");
console.log(n.sort()) // [19,32,34,4,6]

//22.***  Что будет выведено в консоль браузера ?

//     function a() {
//         console.log(this)
//     }

// a.call(null)
// console.log(a.call(null));

//23*** Что будет выведено в консоль ?
    console.log("TASK 23");
    console.log(+function (val) { return val; });

//24  Какое количество раз выполнится цикл ?

for (var i = 0; i < 10; i++) {
    ++i;
    console.log(i)//  5раз
} 

//25.   Что будет выведено в консоль ?

const myObj = {
    name: "student"
}
console.log("TASK 25");
console.log(myObj.hasOwnProperty('name'));//true

//26.***    Что будет выведено в консоль ?

var a = Array();
a[a.length] = 0;

console.log("TASK 26");
console.log(a.length)

//27.   Результат выполнения кода ?

    function sum(a, b = a) {
        console.log(a + b)
    }
console.log("TASK 27");
sum(10);




