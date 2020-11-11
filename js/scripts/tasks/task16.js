function calculate(arr) {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        a += arr[i];
        if (a > 10) {
            return i + 1;
        }
    }
    return a;
}
let arr = [1, 1, 3, 3, 8, 6];


export { calculate, arr };