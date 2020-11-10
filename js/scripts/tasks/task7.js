function getLongerWord2() {
    let str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit Illo impedit';
    let arr = str.split(" ");
    let longest = 0;
    let word = null;
    arr.forEach(function (str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}

export { getLongerWord2 };