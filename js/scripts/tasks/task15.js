function arrayFill(elem, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(elem);
    }
    return arr;
}

export { arrayFill };