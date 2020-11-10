function checkIfNumber() {
    let arr = [1, 5, 10, 15, 20, 25];
    let txt = parseInt(prompt('Input your number'));
    let message;
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(txt)) {
            message = "Your number is in the array"
        } else {
            message = "Your number is not in the array"
        }
    }
    return message;
}

export { checkIfNumber };