function Calculator(number1, number2) {
    this.sum = function () {
        return number1 + number2;
    }
    this.mul = function () {
        return number1 * number2;
    }
}

let calculator = new Calculator(10, 5);

export { calculator };