//4. Дано слово на русском языке. Посчитать количество слогов в слове.

function getSyllables(str) {

    let vowels = "а,е,ё,и,о,у,ы,э,ю,я";

    let arr = str.split("").filter(item => vowels.includes(item)).length;

    return arr
}

console.log(getSyllables("гиппопотомомонстросесквиппедалиофобия"))


