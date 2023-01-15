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

// let result = 0;
// function add(x) {
//     result += x;
//     return result;
// }
// console.log("TASK 47");
// console.log(add(add(10)))// 20

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
// console.log("TASK 60")
//     (function (foo) {
//         arguments[0] = 42;
//         console.log(foo);
//     })(5)

//61 Что выведен данный код?

// var a = 2;
// console.log("TASK 61")
// console.log(~a)  // -3

//62 Что будет выведено в консоль ?

console.log(false == undefined, false == null, null == undefined);
console.log("TASK 62") // false, false, true  // ( null === undefined ); // false  При строгом равенстве === Эти значения различны, так как различны их типы.
                       // При нестрогом равенстве == Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.

//63 Каков будет результат выполнения кода?

function f(a, b, c) { }
var a = [, , ,]

console.log("TASK 63")
console.log(a.length, f.length)// 3, 3

//64 Какая опция позволяет установить hasName равным true, если вы не можете передать true в качестве аргумента?

function getName(name) {
    const hasName = !!name;  // использовать двойное логическое отрицание !!name 
    
}

//65 Что будет выведено в консоль?????????
console.log("TASK 65")
var a = 44;

(function () {
    var b = 44;
    a = '55';
    (function () {
        var c = 11;
        console.log((a + b) / c);   //     ( "55" + 44) / 11 =  504
    })();
})();

//66  Что будет выведено в консоль?

function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log("TASK 66")
let q = sum(5, -5, false, '-5', 5);
console.log(q);   // 0 - 55


//67 Что будет выведено в консоль?

var a = new Array(5).join('5');
console.log("TASK 67")
console.log(a); // 55555

//68 Что будет выведено в консоль?
console.log("TASK 68")
let str = "I love JavaScript";
console.log(str.substring(3, 3));// Пустая строка  //Метод substring() возвращает подстроку строки между двумя индексами, или от одного индекса и до конца строки.

//69 Чему будет равен результат выполнения кода?

let v = -1;
let e = 0.25;
console.log("TASK 69")
console.log(d == ~e ^ 0) // 0

/*70 Какие из вызов parseFloat() не возвратят число?
parseFloat()
parseFloat("27.2 m")
parseFloat("27,2")
parseFloat(".2")
parseFloat("56,")
*/

//71 Что будет выведено на экран?

var x;
x = 'x0ff' - 1;
if (x != x)
    console.log(true);
else
    console.log(x);

//72 Что будет выведено в консоль?

let w = null;
let u = undefined;
console.log("TASK 72")
console.log(w ?? u) // Оператор нулевого слияния ответ undefined  (w !== null && w !== undefined) ? w : u;

//73 Что будет выведено в консоль?
console.log("TASK 73")
console.log([..."JS"])// ['J', 'S']

//74 Что будет выведено в консоль?

let m = NaN;
let l = 1;
console.log("TASK 74")
console.log(m ?? l)// NaN

//75 Какой результаты будет выведен в консоль?

function ab(param) {
    let m = param;
    m = m + 10;
    return m + param;
}

function cd(param) {
    let n = param;
    n = 20;
    return param + n;
}
console.log("TASK 75")
console.log(ab(10), cd(10)); // 30, 30    m = 10 + 10 => return 20 + 10 

//76 Что будет выведено в консоль?
console.log("TASK 76")
console.log(
    (function () {
        var a = true + false; // undefined
        a;
    })()
)

//77 Чему будет равно значение выражения?
console.log("TASK 77")
console.log(null || "0" || undefined || false || NaN); // 0

//78 Что будет выведено в консоль?

for (var i = 0; i < 9; i += 2) {
    if (++i == 5)
        break;
    else
        continue
}
console.log("TASK 78")
console.log(i++) // 9

//79 Что будет записано в поле name после выполнения кода?
console.log("TASK 79")
const user = {
    name: "Вася"
};

user.name = "Петя"; // Петя 

//80 Чему равно значение переменной x?

let num = ~-1;
console.log("TASK 80")
console.log(num); // 1

//81 Что будет выведено на экран?

"use strict";
//a = null + undefined;
//alert(a); // Код содержит ошибку переменная а не обьявлена , если бы а была обьявлена let a = null + undefined было бы, NaN

//82 Что выведет код?
console.log("TASK 82")
console.log(+"Infinity"); // Infinity; 

//83 Что будет выведено на экран?

"use strict";
console.log("TASK 83")
console.log(typeof null)// object

//84 Чему будет равно значение переменной x?
console.log("TASK 84")
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
let xy = i;
console.log("TASK 84")
console.log(xy)// 10

//85 Чему будет рано значение выражения?
console.log("TASK 85")
console.log(true + false)// 1

//86 Чему выведет на экран данный код?
console.log("TASK 86")
// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {         // 10 раз число 10
//         console.log(i);
//     }, 100);
// }

//87 Что выведет данный код?
console.log("TASK 87")
if (function f() { }) {
    console.log(typeof f);   // function

}

//88 Чему равно значение выражения?

//[].push(1, 2).unshift(3).join() // Код содержит ошибку

/*89  Какой из этих вариантов задает массив из элементов "a" и "b"?

let a = [ "a", "b" ] // Этот вариант
let a = "a,b".join(",")
let a = ( "a", "b" )
let a = { "a", "b" }
let a =new array("a","b")

*/

//90 Что выведет код?
console.log("TASK 90")
// let array = [1, 2]
//     (function () {
//         console.log(array)
//     })()

//91 Что выведет код?
// console.log("TASK 91")
// const f = (a, b) => a + b;
// console.log(f)    // undefined

//92  Что выведет на экран следующий код?
console.log("TASK 92")
console.log(Math.ceil(Math.random())); // ответ 1  // Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1),
                                       // то есть, от 0 (включительно) до 1 (но не включая 1), Math.ceil()- округляет в большую сторону

//93 Какой результат будет выведен в консоль?

console.log("TASK 93")
console.log(0 / 0); // NaN

//94 Что будет выведено в консоль?
console.log("TASK 94")
let array1 = ['1', '2', '3'].map(parseInt);  //[1, NaN, NaN]
console.log(array1)

//95 Что будет выведено в консоль?

function sum1(a, b, c) {
    arguments[2] = 10;
    return a + b + c;
}
console.log("TASK 95")
console.log(sum1(1, 2, 3))//13   Объект arguments — это подобный массиву объект, который содержит аргументы, переданные в функцию.
                          // arguments[0] == a , arguments[1] == b, arguments[2] == c

//96 Какой результат будет выведен на экран?

var A = 1;
var B = ++A + A;
console.log("TASK 96")  //префиксная форма возвращает новое значение
console.log(B); //ответ 4  постфиксная форма возвращает старое значение   

//97 Какой результат будет выведен на экран?

var a1 = new Array();
a1['key'] = 'value';
console.log("TASK 97")
console.log(a1.length);// 0 

//98 Что будет выведено в консоль?

function Test(param) {
    this.var1 = param;
    var var2 = 'World'
}

var test = new Test('Hello');
console.log("TASK 98")
console.log(test.var1, test.var2);//  Hello undefined

//99 Что будет выведено на экран?

// var a1 = "wrong"
// function a() { return "1st"; }
// function a(val) { this.a1 = "right"; return "2nd"; }
// console.log(new a().a1); // right


//100 Что будет выведено в консоль? ??????????????//

let ar = [], br = [];
console.log("TASK 100")
console.log(ar == br, ar != br, !ar == br, !ar == !br); // false true true true

//101 Что выведет на экран следующий код?
console.log("TASK 101")
console.log(Math.floor(Math.random()));// 0

//102 Что будет выведено в консоль?

var a = 1;
function f() {
    console.log(a);
    var a = 5;
}
console.log("TASK 102")
f(); //  undefined 

//103 Какой результат будет выведен в консоль?
console.log("TASK 103")
var ar5 = [];
console.log(ar5 == ar5, ar5 != ar5);// true false

//104 Что будет выведено в консоль?

console.log("TASK 104")
class Something { }
const someObj = new Something();
console.log(typeof someObj == typeof Something)// false ( typeof someObj == object //  typeof Something  == function

//105  Что будет выведено в консоль?
console.log("TASK 105")
let an = isNaN("2014");
console.log(an);//false

//106  Что будет выведено в консоль?
console.log("TASK 106")
var n = 3;
var b = true;
n = n.toString(2) + Number(b) + n.toString() - 3 + !Number(b); // "11" + 1 + "3" - 3 + false
console.log(n); // 1110 

//107 Что будет выведено в консоль?
console.log("TASK 107")
console.log(null == undefined)// true

//108 Как сгенерировать случайное целое число от 1 до 10?
console.log("TASK 108")
console.log(Math.floor((Math.random() * 10) + 1))

//109 Что будет выведено в консоль?

let squares = [2, 4, 6,].map(x => x * x); // [4, 16, 36]
[a, b] = squares; // [a, b] = [4, 16, 36]
console.log("TASK 109")
console.log(a + b)// 20
 
//110 Что будет выведено в консоль? ?????????????????????

var ch1 = "b";
var ch2;
switch (ch1) {
    case 'a':
        ch2 = '1';
    case 'b':
        ch2 = '2';
    case 'c':
        ch2 = '3';
        break;
    default:
        ch2 = '4';
}
console.log("TASK 110")
console.log(ch2)// 3 

//111 Что будет выведено в консоль?

var a = [], // 
    b = 1, // 
    c = false, // 
    d1 = []; // 
console.log("TASK 111")
console.log(typeof (b == c), a == d1)//boolean false

//112 Какой из вариантов позволит трансформировать объект в JSON?

//113 Что выведет данный код?
console.log("TASK 113")
console.log(id);
var id = '2'; // undefined

//114 Что будет выведено в консоль?
console.log("TASK 114")
const obj1 = { a: 1 };

(function (obj1) {
    obj1 = { a: 2 };
})(obj1);

console.log(obj1.a);

(function (obj1) {
    obj1 = { a: 3 };
})(obj1);

console.log(obj1.a);// 1, 1

//115 Каким образом добавить новый элемент в массив?

// const a = [];
// a.push(element);

//116 Какой результаты будет выведен в консоль?

var obj = function () {
    this.name = "Alex";
    var that = {};
    this.name = "David";
    var name = this.name + " && " + that.name;
    return name;
}

var o = new obj();
console.log("TASK 116")
console.log(o.name); // David

//117 Что выведет следующий код?

//const list = [1, 2, 3].push(4);
console.log("TASK 117")
//console.log(list.push(5));//код содержит ошибку list.push is not a function

//118 Что будет выведено в консоль?

"use script"

const strs = ["I", " ", "am", " ", "Iron", " ", "Man"]
const result = strs.reduce((item, index) => item + index, "")
console.log(result)// I am Iron Man

//119 Что будет выведено в консоль?

// var a = 2;
// a = a << 2;
// console.log(a); // 8

//120 Что произойдет после выполнения кода?

var foo = function () {
    return {
        a: 1,
        b: 2
    }
}

//121 Каков будет результат выполнения следующего кода?

var a = 1;
var c = a++ + 1;
console.log("TASK 121")
console.log(a, c)

//122 Что будет выведено в консоль?

var str3;
let i1 = '0';
console.log("TASK 122")
console.log(str3 + i1);// undefined + '0' = undefined0

//123 Что будет выведено в консоль?

const list1 = [1 + 2, 1 ** 2, 1 / 2];
console.log("TASK 123")
console.log(list1)// [3, 1, 0.5] 1 ** 2 == 1

//124 Какой результат будет выведен в консоль?

const a5 = new Number(1) === 1;
console.log("TASK 124")
console.log(a5)//false

//125 Что будет выведено в консоль?
console.log("TASK 125")
console.log(typeof typeof null)// string

//126 Что будет выведено в консоль?
console.log("TASK 126")
console.log(typeof typeof undefined)// string

//127 Что выведет следующий код?

function sayHi(name) {
    return `Hi there, ${name}`
}
console.log("TASK 127")
console.log(sayHi())//Hi there, undefined

//128 Что выведен следующий код?
console.log("TASK 128")
console.log(1);
js: {
    console.log(2);
    break js;
    console.log(3);
}
console.log(4); // 1, 2, 4

//129 Сколько раз сработает вызов alert()?
console.log("TASK 129")
for (i = 5; i < 10; i++) {
    for (j = i; j < i + 1; j++) {
        console.log(j) // 5 раз  - 5,6,7,8,9
    }
}

//130 Что будет выведено в консоль?

let st = 'myjs';
console.log("TASK 130")
console.log(st.split(",", 6));['myjs']

//131 Что выведет следующий код?
//console.log("Hello!' +"_"+ "World!'); // ошибку

//132 Чему равно значение строки str?

var str6 = "мама";
for (var i = 0; i < str6.length; i++)
    if (!(i % 2))
        str6[i] = "п";//Код содержит ошибку

        
//133 Что будет выведено в консоль???????????????????????????????????????????????????????????????????
console.log("TASK 133")
a = false;
if (a == '0')
    console.log(1)
if (a === '0')
    console.log(2)//1

//134 Что будет выведено на экран?

// function a(value) {
//     return true - value;
// }

// var b = a('4') + a('-4') + a('-4') + a(4);
// console.log(b);// -3 + 5 + 5 - 3 == 4

//135 Что будет выведено в консоль?

const str4 = { job: "JS" }
console.log("TASK 135")
console.log(typeof str4);//object

//136 Что будет выведено в консоль?

// function a(value) {
//     return true + value;
// }

// var b = a('4') + a('-4') + a('-4') + a(4);
// console.log(b);//true4true-4true-45

//137 Что будет выведено в консоль?

// function a(value) {
//     return true * value;
// }

// var b = a('4') + a('-4') + a('-4') + a(4);
// console.log(b);// 4 - 4 - 4 + 4 == 0

//138 Чему будет равно значение переменной a после выполнения кода?
console.log("TASK 138")
var am = 5;
var am;
console.log(am)//5

//139 Чему равна длина arr.length массива arr?

var arr8 = [];
arr8[1] = 1;
arr8[3] = 33;
console.log("TASK 139")
console.log(arr8.length)//4

//140 Что будет выведено в консоль?

var str2 = "MyTestingString";
console.log("TASK 140")
console.log(str2.slice(2, 8), str2.substr(2, 8), str2.substring(2, 8)) // Testin, TestingS, Testing

//141 Что будет выведено в консоль
console.log("TASK 141")
const obj2 = new Object();
console.log(obj2.a); // undefined
obj2.a = 5;
console.log(obj2.a); // 5

//142 Чему выведет на экран данный код?
console.log("TASK 142")
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i); //Числа от 0 до 9
    }, 100);
}









 

























