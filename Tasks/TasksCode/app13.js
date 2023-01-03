/*Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
Если ваше имя начинается с буквы «R» или строчной «r», вы играете на банджо!
*/

function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === "r"){
        return `${name} plays banjo `
    }
    else{
        return `${name} does not play banjo`
    }
}


let a = areYouPlayingBanjo("Ringo");

console.log(a);