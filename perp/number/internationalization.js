
const options = {
    style: 'currency',
    currency: 'USD',
    useGrouping: false
}
const options1 = {
    style: 'currency',
    currency: 'RUB'
}

const options2 = {
    style: 'decimal',
    
}

const options3 = {
    style: 'percent',
}

const options4 = {
    style: 'unit',
    unit: 'celsius'
}

console.log( new Intl.NumberFormat('en-US', options).format(230000))
console.log( new Intl.NumberFormat('ru-RU', options1).format(230000))
console.log( new Intl.NumberFormat('ru-RU', options2).format(1000))
console.log( new Intl.NumberFormat('ru-RU', options3).format(1000))
console.log( new Intl.NumberFormat('ru-RU', options4).format(25))


const converter = (summ, initialCurrency, convertCurrency) => {

    const currencies = [
        {name: 'USD', mult: 1},
        {name: 'RUB', mult: 1 / 60},
        {name: 'EUR', mult: 1.1}
    ]

    const initial = currencies.find((el) => el.name === initialCurrency)
    if (!initial) return null

    const convert = currencies.find((el) => el.name === convertCurrency)
    if (!convert) return null

    return Intl
        .NumberFormat('ru-RU', {style: 'currency',  currency: convert.name})
        .format(summ * initial.mult / convert.mult)
}

console.log(converter (10000, 'RUB', 'USD'))
console.log(converter(10000, 'RUB', 'EUR'))
console.log(converter(100, 'USD', 'RUB') )


const user = {
    name: 'Ivan',
    birthday: '12-02-2023'
}

function checkBirthday(user) {
    const today = new Date()
    const todayStamp = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    
    const userStamp = new Date(user.birthday).getTime()
    console.log(userStamp)
    return todayStamp === userStamp
}

console.log(' ----->>> ', new Date(user.birthday))