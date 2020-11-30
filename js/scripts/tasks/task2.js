function handleMove() {
  document.body.style.position = "relative";
  let child = null;
  document.addEventListener("click", function (click) {
    if (child == null) {
      child = document.createElement("div");
      child.innerHTML = "Hello";
      child.style.position = "absolute";
    }
    child.style.top = click.offsetY + "px";
    child.style.left = click.offsetX + "px";
    this.body.append(child);
  });
  return child;
};

export { handleMove };