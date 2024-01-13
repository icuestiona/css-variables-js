const inputs = document.querySelectorAll(".controls input");

inputs.forEach((input) => {
  input.addEventListener("input", updateVariables);
});

function updateVariables() {
  document.documentElement.style.setProperty(
    `--${this.id}`,
    this.value + (this.dataset.sizing || "")
  );
}
