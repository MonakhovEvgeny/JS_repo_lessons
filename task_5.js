function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let a = getRandomIntInclusive(0, 10);
let b = getRandomIntInclusive(0, 10);
console.log(`a = ${a}    b = ${b}`)

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function multiplication(a, b) {
    return a * b;
}

console.log(`сумма - ${plus(a, b)}`)
console.log(`разность - ${minus(a, b)} (a - b)`)
console.log(`деление - ${division(a, b)}`)
console.log(`произведение - ${multiplication(a, b)}`)