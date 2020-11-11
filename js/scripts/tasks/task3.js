function cutString1() {
    let str = 'aaa bbb ccc';
    let result;
    return result = str.substr(4, 3);
}

function cutString2() {
    let str = 'aaa bbb ccc';
    let result;
    return result = str.substring(4, 7);
}


function cutString3() {
    let str = 'aaa bbb ccc';
    let result;
    return result = str.slice(4, 7);
}

export { cutString1, cutString2, cutString3 };