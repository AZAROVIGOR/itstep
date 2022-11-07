


let a = [0, 1, 2, 3, 4, 5, 8];
//console.log(a[4]);

let b = Array(0, 1, 2, 3, 4, 5); // b = [0,1,2,3,4,5]
//console.log(b[4]);

b[6] = 8; // b = [0,1,2,3,4,5,8]
//console.log(b);
let c = [];
c[78] = "abc";
c[79] = 34;
c[80] = false;
c[44] = [];
//console.log(c);
//console.log(c[0], c[44]);

//console.log(a.length, b.length, c.length, c[0]);
x = c[7] + a[0];

console.log(x);
