function getDigitsSum(num) {
    let sum = 0;
    let str = String(num);
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    };
    return sum;
}

export { getDigitsSum };