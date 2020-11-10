function getArray() {
    let arr = [];
    while (1) {
        let txt = prompt("Input your number", "");
        if (txt === null) {
            break;
        } else {
            arr.push(txt);
        }
    }
    return arr;
}
export { getArray };