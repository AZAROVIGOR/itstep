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
console.log(a.length)// 1

//27.   Результат выполнения кода ?

    function sum(a, b = a) {
        console.log(a + b)
    }
console.log("TASK 27");
sum(10);  // 20

//28.  Что будет выведено на экран?
console.log("TASK 28");
console.log('0xFF     ' - '1'); //254

//29 Результат выполнения кода?
console.log("TASK 29");
console.log(true + "test");// truetest

//30  Результат выполнения кода?

var a = 12;
(function run() {
    console.log("a = ", a);
    var b = 500
})()
console.log("TASK 30");
console.log("a = ", a);//a =  12
console.log("b = ", b); //b = Infinity

//31 Чему будет равно значение x[0] и x===y после исполнения данного кода?

var x = [];
var y = x;
y[0] = 7;
console.log("TASK 31");
console.log(x[0]);// 7
console.log(x === y); // true
console.log( y); // true
console.log( x); // true

//32 Что будет выведено в консоль?
console.log("TASK 32");
var a;
switch (a) {
    case 0:
        console.log(0); break;
    case null:
        console.log(null); break;
    case undefined:
        console.log(undefined); break;
    default:
        console.log("something else");//something else
}

//33 Что будет выведено в консоль?


let s = "Hello"
s[4] = ""
console.log("TASK 33");
console.log(s); //Hello

//34 Какой код выведет список свойств объекта в консоль?


var student = {
    name: "Mark",
    age: 25
}
console.log("TASK 34");
for (let i in student) {
    console.log(student[i])
}

//35*** Какой будет результат выполнения кода?

var a = 3;

switch (a) {
    default:
        a += 4;
    case 1:
        a += 2;
        break;
    case 2:
        a += 3;
        break;
}
console.log("TASK 35");
console.log(a)

//36 Что выведет данный код в консоль?
console.log("TASK 36");
console.log(checkValue(a));
var a = 1;
function checkValue(value) {
    if (value) {
        return +!!a;
    } else {
        return !!a;
    }
}

//37 Какой будет результат выполнения кода?

console.log("TASK 37");
const g = parseInt("7*6", 10)
console.log(g);// число 7  Вторым параметром можно указать систему счисления числа, и функция вернет число, 
                //переведенное из указанной системы счисления в десятичную.

//38 Какой результат будет выведен в консоль?

function Test() { }

var test1 = new Test()
Test.prototype.member = "World";
var test2 = new Test();

console.log("TASK 38");
console.log(test1.member, test2.member)// World World

//39 Какого ключевого слово не хватает в функции, перед переменно privet, чтобы код выводил в консоль "Hello!"?

function say() {
    var privet = "Hello!";
        priver;
}
console.log("TASK 39");
console.log(say)

//40 Что будет выведено в консоль?

var obj = { a: 2 };
function f(obj) {
    obj = { a: 3 };
}
f(obj);
console.log("TASK 40");
console.log(obj.a)// 2

//41 Какая функция в JS округляет число к наибольшему целому?

// Math.ceil

//42 Чему должен быть равен Х в строке 2, чтобы для переменной answer было присвоено значение true?

var a = [8, 16, 24, 32, 40, 58];
var answer = a[x] % 8 !== 0;
console.log("TASK 42");
console.log(answer) // x == 5

//43    Что будет выведено в консоль в обоих случаях?

var r = ['a', 'l', 'p', 'h'];
r.length = 10;
console.log("TASK 43");
console.log(r.length);
delete r[0];
console.log(r.length); // 10 и 10

//44 Каков результат выполнения следующего кода?

var nums = [1, 2, 3, 4];
nums.pop()
nums.push(5);
console.log("TASK 44");
console.log(nums) //1,2,3,5

//45 Какой из вариантов будет выводить "Wake up" каждые 10 минут?

//setTimeout(console.log("Wake up!"), 60000)

//46 Что вернет функция после выполнения?

Total = 3;

function whatIsReturned() {
    var total = 1;
    var TOTAL = 2;

    return total;
}
console.log("TASK 46");
let d = whatIsReturned()
console.log(d)// 1

//47 Что будет выведено в консоль?

result = 0;
function add(x) {
    result += x;
    return result;
}
console.log("TASK 47");
console.log(add(add(10)))// 20

//48  Какой результат будет выведен в консоль?

class SomeThing { }
console.log("TASK 48");
console.log(typeof SomeThing)//function

//49 Что будет выведено на экран?

let p = 0;
while (++p < 5)
    console.log("TASK 49");
    console.log(p);// от 1 до 4

//50 Какой из методов объекта Date вернет текущее время прошедшее с 1/1/1970 в миллисекундах?


//51 Что будет выведено на экран?

let k = 0;
while (k++ < 5)
    console.log("TASK 51");
    console.log(k);  // от 1 до 5

//52  Что будет выведено в консоль?

function a() {
    return ("works")
}

//var b = a("not");
console.log("TASK 52");
console.log(b)    

//53 Каким будет результат выполнения следующего кода?
console.log("TASK 53");
console.log(parseInt(1 / 0, 19))


//54   Каким будет результат выполнения следующего кода?
console.log("TASK 54");
console.log(null + true + 0) // 1   приводится к строке

//55 Что будет выведено на экран?
console.log("TASK 55");
const arr = [3, 4, 5]
for (let item in arr) {
    console.log(item)
}

for (let item of arr) {
    console.log(item)
}                           // 0 1 2 3 4 5

//56  Что будет выведено в консоль?
console.log("TASK 56");
function f(x, y, z) {
    x = 5;
    arguments[2] = 10;
    console.log(x + y + z)
}

f(-1, 0, 2)

//57  Что будет выведено в консоль?

const set = new Set([1, 1, 2, 3, 4]);
console.log("TASK 57");//{1,2,3,4}
console.log(set)

//58  Чему будет равно значение следующего выражения в JS?
console.log("TASK 58")
console.log([] + {})  //[object Object]

//59  Чему будет равно значение выражения?
console.log("TASK 59")
console.log([] + [])//пустая строка

//60 Что будет выведено в консоль?

    (function (foo) {
        arguments[0] = 42;
        console.log(foo);
    })(5)

//61 Что выведен данный код?

var a = 2;
console.log("TASK 59")
console.log(~a)
    

















