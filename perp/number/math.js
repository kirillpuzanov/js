'use strict'

console.log(Math.sqrt(36)) // кв корень
console.log(Math.cbrt(9))  // куб корень


console.log(Math.sign(-9))  // возвращает -1 / 1 в зависимости от знака
console.log(Math.abs(-100))  // число по модулю


console.log('-->', Math.max(1, 5, -100, '90', 'asd'))  // NaN поиск максимального числа
console.log('-->', Math.max(1, 5, -100, '90' ))  // 90 поиск максимального числа - умеет преобразовать строки в числа
console.log('-->', Math.max(1, 5, -100, '90', true ))  // 90 поиск максимального числа - умеет преобразовать строки в числа
console.log('-->', Math.min(1, 5, -100, '90', true ))  

const arr = [1, 2, 5, 6] // в обход массива
console.log('-->', Math.min(...arr )) 


console.log('-->', Math.random())  



16 ** 2 // возведение в степпень 


Math.round  // ближайшее целое по мат правилам
Math.ceil   // до большего
Math.floor  // до нижнего
Math.trunc  // просто обрежет дробную часть
1.9942545.toFixed(1)  // вернет строку!! оставить count знаков после запятой с округлением


const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}