function getRandom() {
    let arr = [];
    arr.length = 10;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
}

export { getRandom };
