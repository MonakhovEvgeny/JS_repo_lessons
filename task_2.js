"use strict";
const basket = [
    ['Виски', 1500, 5],
    ['Коньяк', 1000, 3],
    ['Вино', 800, 7]
];

function countBasketPrice(basket) {
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        totalPrice += basket[i][1] * basket[i][2];
    }
    return totalPrice;
}

console.log('стоимость корзины -', countBasketPrice(basket) + ' руб');