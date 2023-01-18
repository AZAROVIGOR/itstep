/*Напишите функцию для преобразования имени в инициалы. 
Это ката строго состоит из двух слов с одним пробелом между ними.
*/
function abbrevName(name) {
    let abb = name.toUpperCase().split(" ").map(item => 
        item[0]
    ).join(".");
   
    console.log(abb);
}
abbrevName("азаров ян")


function abbrevName(name){
let abb =  name.split(" ").map(item => item[0].toUpperCase()).join(".");
    console.log(abb);

}
abbrevName("азаров игорь");



let abbrev = name => name.toUpperCase().split(" ").map(item => item[0]).join(".");
let b = abbrev("азаров игорь")
console.log(b);