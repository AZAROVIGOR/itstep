//Вычислить: (1+2)*(1+2+3)*...*(1+2+...+10).

var s = 1;
var sum = 1;
for(let i = 1; i <= 10; i++){

    sum *= s
    s += i + 1;
    
    
    
    console.log(s);
    
}
console.log(s);
console.log(sum);
//(1 + 2) * (1 + 2 + 3) * (1 + 2 + 3 + 4)  = 180