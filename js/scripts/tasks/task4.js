function changeString1() {
    let str = 'I learn javascript!';
    return str.indexOf('learn');
}

function changeString2() {
    let str = 'I learn javascript!';
    return str.length;
}

function changeString3() {
    let str = 'I learn javascript!';
    return str.replace('javascript', 'html');
}

export { changeString1, changeString2, changeString3 };