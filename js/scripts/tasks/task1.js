function getNumber1() {
    let result = prompt("Input your number", "");
    if (result > 0) {
        return 1;
    } else if (result == 0) {
        return 0;
    } else {
        return -1;
    }
}

export { getNumber1 };