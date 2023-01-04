/*
Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

Если функции передана допустимая строка PIN-кода, верните true, иначе верните false..*/



const validatePIN = (pin) => {
    if (pin.length !== 4 && pin.length !== 6) {
        return false;
    }
    for (let i = 0; i < pin.length; i++) {
        if (pin[i] < '0' || pin[i] > '9') {
            return false;
        }
    }
    return true
}    


let val = validatePIN("123a");
 console.log(val);


