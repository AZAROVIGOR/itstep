//Дано 3 числа. Вывести максимальное из 3 чисел.
var a = 44;
var b = 86;
var c = 110;
if(a >= b && a >= c){
    console.log(a);
}

else if(b >= a && b >= c){
    console.log(b);
}

else if(c >= a && c >= b){
    console.log(c);
}