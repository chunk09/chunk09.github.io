const input_kilogram: HTMLInputElement | null = document.querySelector("#input_kilogram");
const h3_kilogramGram: HTMLElement | null = document.querySelector("#h3_kilogramGram");

if (input_kilogram instanceof HTMLInputElement) {
  input_kilogram.addEventListener("change", kg_handleChange);
}

function kg_handleChange(): void {
  if (input_kilogram instanceof HTMLInputElement) {
    if (h3_kilogramGram instanceof HTMLElement) {
      h3_kilogramGram.innerText = `그램 변환 : ${(parseInt(input_kilogram.value) * 1000).toFixed(2)}G`;
    }
  }
}