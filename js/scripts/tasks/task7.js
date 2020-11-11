function getStr() {
    let str = '';
    for (let i = 0; i <= 9; i++) {
        str += '-' + i;
    }
    str += '-'
    return str;
}

export { getStr };