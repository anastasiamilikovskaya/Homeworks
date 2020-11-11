function getArr2() {
    let arr = [1, -1, 2, -2, 3, -3];
    function isPositive(num) {
        if (num >= 0) {
            return true;
        } else {
            return false;
        }
    }
    let newArr = [];
    for (var i = 0; i <= arr.length; i++) {
        if (isPositive(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

export { getArr2 };