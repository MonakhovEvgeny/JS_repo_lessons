"use strict";
const alcoholMarket = {

    basket: [
        ['Виски', 1500, 5],
        ['Коньяк', 1000, 3],
        ['Вино', 800, 7]
    ],
    countBasketPrice: function () {
        let totalPrice = 0;
        for (let i = 0; i < this.basket.length; i++) {
            totalPrice += this.basket[i][1] * this.basket[i][2];
        }
        return totalPrice;
    }
}

console.log('стоимость корзины -', alcoholMarket.countBasketPrice(this.basket) + ' руб');
