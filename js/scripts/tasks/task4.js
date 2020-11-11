function getLetter() {
    let a = parseInt(prompt("Input your number", ""));
    switch (a) {
        case 1:
            return "a";
            break;
        case 2:
            return "b";
            break;
        case 3:
            return "c";
            break;

        default:
            return "z";
            break;
    }
}

export { getLetter };