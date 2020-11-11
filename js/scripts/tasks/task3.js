function getBoolean2() {
    let a = 5, b = 3;
    return (a > b && a === b) ? "True" : "False";
}

function getBoolean3() {
    return (true && 0 && "a" < "Z") ? "True" : "False";
}

function getBoolean4() {
    let a = 5, b = 3;
    return (a > b || true || "2" == 2 || false == "")? "True" : "False"; 
}

function getBoolean5() {
    let a = 5, b = 3;
    return (a < b && 0 == false) ? "True" : "False";
}

function getBoolean6() {
    return (!(2 == 2) || (true && "")) ? "True" : "False";
}

export { getBoolean2, getBoolean3, getBoolean4, getBoolean5, getBoolean6 }
