//14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.

const str = 'var_test_text';

const newStr = str.split("_")
    
    .map((item, index) =>{
   
    if(index != 0)
   
        return item[0].toUpperCase() + item.slice(1)
 
        return item
      

}).join("");

console.log(newStr);


