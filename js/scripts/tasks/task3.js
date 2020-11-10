function getLongerWord1() {
    let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit Illo impedit"
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            console.log(arr[i]);
        }
    }
    return arr;
}
export { getLongerWord1 };