function getSum() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            sum += arr[i][j];
        }
    }
    return sum;
}
export { getSum };