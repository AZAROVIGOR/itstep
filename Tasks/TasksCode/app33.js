/*На этот раз ни истории, ни теории. В приведенных ниже примерах показано, как написать функцию 

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

*/

function accum(s) {
   return [...s].map((item, index) => (item.toUpperCase() + item.toLowerCase().repeat(index))).join("-");
}  


let a = accum("abcd");
console.log(a);

//console.log("b" + "b");

let b = "abcde"

console.log(repeat(a))