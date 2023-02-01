/*чтобы каждая строчная буква становилась прописной, а каждая прописная буква становилась строчной. Например:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
*/

// const toAlternatingCase = (str) => {
//    return  this.split("").map(item => {
//     return item.toUpperCase() ? item.toLowerCase() : item.toUpperCase();
//    }).join("")
// }
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()).join('');
}
const getString = toAlternatingCase("hello WORLD");
console.log(getString);


return Math.abs



