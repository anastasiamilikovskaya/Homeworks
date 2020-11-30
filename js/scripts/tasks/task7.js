function getNumbers() {
  var number = document.querySelector(".number");
  number.addEventListener("keyup", function (e) {
    if (
      !(
        (e.keyCode >= 48 && e.keyCode <= 57) ||
        (e.keyCode >= 96 && e.keyCode <= 105)
      )
    ) {
      this.value = "";
    }
  });
}

export { getNumbers };