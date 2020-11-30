/*<input type=”text”><button id=”btn”>Click</button>
● добавить обработчик на кнопку, при нажатии на которую будет в консоль
выводиться текст с поля */

function getValue() {
    let inp = document.querySelector("input");
    let val = inp.value;
    return console.log(val);;
}

export { getValue };