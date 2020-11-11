function getArray5() {
    let arr = [];

    for (let i = 1; i < 10; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += String(i);
        }
        arr.push(str);
    }
    return arr;
}

export { getArray5 };