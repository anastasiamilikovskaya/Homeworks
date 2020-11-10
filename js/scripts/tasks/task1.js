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

function getBoolean1() {
    let a = 1;
    return (a > 0) ? "True" : "False";
}

export { getNumber1, getBoolean1 };