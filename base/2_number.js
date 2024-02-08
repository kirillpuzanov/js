// ! Number ограничивается диапазоном от 2в53 степени до 2в-53 степени

// ?  e добавляется к числу и заменяет указанное количество нулей
// let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
// 7.3e9  ==  7.3 миллиардов
// let ms = 1e-6; // 0.000001  e-6:  деление на 1 с указанным количеством нулей

Math.floor	Math.ceil	Math.round	Math.trunc
3.1     	 3	         4	         3	         3
3.6     	 3	         4	         4	         3
-1.1	       -2      	 -1      	 -1	        -1
-1.6	       -2	        -1  	         -2  	        -1
// ! Math.trunc (не поддерживается в Internet Explorer) Производит удаление дробной части без округления

// ! alert( 0.1 + 0.2 ); // 0.30000000000000004  при работе с дробными числами использовать методы округления

// ?  ( возвр. boolean) isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
// ?  ( возвр. boolean) isNaN(value) преобразует значение в число и проверяет является ли оно NaN

// ? Если строка не является в точности числом, то для преобразования ее в число используют
//  parseInt (возвращает целое число)
//  parseFloat (возвращает  число с плавающей точкой)
console.log( parseInt('100px')); // 100


// ? parseInt(str, radix) второй необязательный аргумент определяет систему исчесления

       // Популярные методы:
       +str ;
       Number(str);
       parseInt(str)
       parseFloat(str)
       (4.25).toFixed(1)  // '4.2' оставляет указанное число символов после запятой !!!! возвращает строку
       (4.25).toString()  // '4.25' переводит число в строку

a = 1 + 2, 3 + 4;
alert(a); // 3



alert( Number.isFinite(123) ); // true
alert( Number.isFinite(Infinity) ); // false
alert( Number.isFinite(2 / 0) ); // false

// Обратите внимание на разный результат:
alert( Number.isFinite("123") ); // false, так как "123" является строкой, а не числом
alert( isFinite("123") ); // true, так как isFinite сначала преобразует строку "123" в число 123

alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, вернётся только целая часть
alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке
