function checkNumber() {
    let num = prompt("Input your number");
    if (num > 0 && num < 5) {
        return "Верно";
    } else {
        return "Неверно";
    }
}

export { checkNumber };