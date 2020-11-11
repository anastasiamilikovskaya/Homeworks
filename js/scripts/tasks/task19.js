function getArray6() {
    let arr = [4, 7, 9, 3];
    for (let i = 0; i < arr.length / 2; i++) {
        let swap = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = swap;
    }
    return arr;
}

export { getArray6 };