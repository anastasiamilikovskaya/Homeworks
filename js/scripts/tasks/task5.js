function randomNumber(number) {
    let arr = [];
    arr.length = number;
    for(let i = 0; i < arr.length; i++){     
        arr[i] = Math.floor (Math.random() * 100);
    }   
    return arr;
}

export { randomNumber };