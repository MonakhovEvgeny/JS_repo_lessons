function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = getRandomIntInclusive(-10, 10);
let b = getRandomIntInclusive(-10, 10);
console.log(a, b)

if (a >= 0 && b >= 0) {
    if (a > b)
        console.log(`a = ${a} b = ${b} их разность составляет ${a - b}`)
    else if (b > a)
        console.log(`a = ${a} b = ${b} их разность составляет ${b - a}`)
    else
        console.log(`a = ${a} b = ${b} их разность составляет 0`)
}
if (a < 0 && b < 0)
    console.log(`a = ${a} b = ${b} их произведение составляет ${b * a}`)
if (a >= 0 && b < 0)
    console.log(`a = ${a} b = ${b} их сумма составляет ${b + a}`)
if (a < 0 && b >= 0)
    console.log(`a = ${a} b = ${b} их сумма составляет ${b + a}`)
