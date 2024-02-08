'use strict'

//  в js бинарное представление чисел (0 1) из за этого баг с 0.1 + 0.2 === 0.3 false
// все числа по дэфолту - числа с плавающей точкой

console.log(10 === 10.0)

// конвертация в число
Number('10')
+'10'

Number.parseInt('11', 10)
Number.parseInt('11 sec', 10)  // 11
Number.parseInt('sec 11', 10)  // NaN

console.log(Number.isNaN('10asd'))
console.log(Number.isNaN(10 / 0))  // Infinity

console.log(Number.isFinite('10asd'))  // более правильная проверка на число
console.log(Number.isInteger('10'))  // true
console.log(Number.isInteger('10.4'))  // false
console.log('------>  =====> ',  );
