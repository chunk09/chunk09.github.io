const input_fahrenheit: HTMLInputElement | null = document.querySelector("#input_fahrenheit");
const fahrenheit_celsius: HTMLElement | null = document.querySelector("#fahrenheit_celsius");
const fahrenheit_kelvin: HTMLElement | null = document.querySelector("#fahrenheit_kelvin");

if (input_fahrenheit instanceof HTMLInputElement) {
  input_fahrenheit.addEventListener("change", fahrenheit_celsiusChange);
  input_fahrenheit.addEventListener("change", fahrenheit_kelvinChange);
}

function fahrenheit_celsiusChange(): void {
  if (input_fahrenheit instanceof HTMLInputElement) {
    if (fahrenheit_celsius instanceof HTMLElement) {
      fahrenheit_celsius.innerText = `섭씨온도 변환 : ${((parseInt(input_fahrenheit.value) - 32) / 1.8).toFixed(2)}°C`
    }
  }
}

function fahrenheit_kelvinChange(): void {
  if (input_fahrenheit instanceof HTMLInputElement) {
    if (fahrenheit_kelvin instanceof HTMLElement) {
      fahrenheit_kelvin.innerText = `절대온도 변환 : ${(((parseInt(input_fahrenheit.value) - 32) / 1.8) + 273.15).toFixed(2)}K`
    }
  }
}