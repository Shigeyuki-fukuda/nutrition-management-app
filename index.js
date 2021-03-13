"use strict";
var Score = /** @class */ (function () {
    function Score() {
    }
    return Score;
}());
var Food = /** @class */ (function () {
    function Food(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    Food.prototype.clickEventHandler = function () {
        console.log(this.element.classList);
        this.element.classList.toggle('bg-gray-300');
        console.log(this.element.classList);
    };
    return Food;
}());
var Foods = /** @class */ (function () {
    function Foods() {
        this.elements = document.querySelectorAll('.food');
        this.elements.forEach(function (element) {
            new Food(element);
        });
    }
    return Foods;
}());
var foods = new Foods();
console.log(foods);
