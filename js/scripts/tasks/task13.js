function getArray4() {
    let arr = [1, 2, 3, 4, 5];
    arr.splice(2, 2, 10, 11);
    return arr;
}

export { getArray4 };