function getBoolean1() {
    let a = 6, b = 3;
    return a > b;
}
console.log(getBoolean1());

function getBoolean2() {
    let a = 3, b = 3;
    return a == b;
}
console.log(getBoolean2());

function getBoolean3() {
    let a = 3, b = 6;
    return a != b;
}
console.log(getBoolean3());

function getBoolean4() {
    let a = 1, b = "";
    return a === b;
}
console.log(getBoolean4());

function getBoolean5() {
    let a = "B", b = "A";
    return a > b;
}
console.log(getBoolean5());

function getBoolean6() {
    let a = "a", b = "Z";
    return a > b;
}
console.log(getBoolean6());

function getBoolean7() {
    let a = false; b = 0;
    return a>=b;
}
console.log(getBoolean7());

function getBoolean8() {
    return ("2" === 2) ? "Ok" : "Not"
}
console.log(getBoolean8());