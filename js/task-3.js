const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
    const trimmedValue = event.target.value.trim();
    if (trimmedValue === "") {
        output.textContent = "Anonymous";
      } else {
        output.textContent = trimmedValue;
      }
});
