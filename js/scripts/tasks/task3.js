function getDropdown() {
  let item = null;
  dropdown.addEventListener("click", function (event) {
    if (item == null) {
      item = document.createElement("div");
      item.style.position = "absolute";
      item.style.left = event.target.offsetLeft + "px";
      dropdown.after(item);
      createContextMenu(item);
    }
  });

  function createContextMenu(parent) {
    for (let i = 1; i < 4; i++) {
      let item = document.createElement("div");
      item.innerHTML = i;
      item.addEventListener("click", function (event) {
        event.target.classList.toggle("color");
      });
      parent.append(item);
    }
  }
  return parent;
}

export { getDropdown };