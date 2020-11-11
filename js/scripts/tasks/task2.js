function getSeason() {
    let num = parseInt(prompt("Введите число от 1 до 4"));
    let result;
    switch (num) {
        case 1:
            result = "Зима";
            break;
        case 2:
            result = "Весна";
            break;
        case 3:
            result = "Лето";
            break;
        case 4:
            result = "Осень"
    }
    return result;
}

export { getSeason };