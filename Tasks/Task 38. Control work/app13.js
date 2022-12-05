//13. Дано предложение. Вывести слова в предложение в порядке убывания.

let sentence = "JavaScript это мультипарадигменный язык программирования."



let newSentence = sentence.split(" ").sort((a, b) => b.length - a.length).join(" ")



console.log(newSentence);
