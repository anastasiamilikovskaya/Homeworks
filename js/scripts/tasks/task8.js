function getSquares() {
    let arr = [8, 6, 12, 10];
    let squares = arr.map(function (number) {
        let result;
        return result = number * number;
    })
    return squares;
}

export { getSquares };