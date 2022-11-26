//4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = "я учу javascript!";

let substrMethod = str.substr(2,3);
let substrMethod1 = str.substr(6, 10);

console.log(substrMethod, substrMethod1);


let substringMethod = str.substring(2, 5);
let substringMethod1 = str.substring(6, 16);

console.log(substringMethod,substringMethod1);


let sliseMethod = str.slice(2, 5);
let sliseMethod1 = str.slice(6, 16);

console.log(sliseMethod,sliseMethod1);




