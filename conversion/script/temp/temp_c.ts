const input_celsius: HTMLInputElement | null = document.querySelector("#input_celsius");
const celsius_fahrenheit: HTMLElement | null = document.querySelector("#celsius_fahrenheit");
const celsius_kelvin: HTMLElement | null = document.querySelector("#celsius_kelvin");

if (input_celsius instanceof HTMLInputElement) {
  input_celsius.addEventListener("change", celsius_fahrenheitChange);
  input_celsius.addEventListener("change", celsius_kelvinChange);
}

function celsius_fahrenheitChange(): void {
  if (input_celsius instanceof HTMLInputElement) {
    if (celsius_fahrenheit instanceof HTMLElement) {
      celsius_fahrenheit.innerText = `화씨온도 변환 : ${((parseInt(input_celsius.value) * 1.8) + 32).toFixed(2)}°F`
    }
  }
}
function celsius_kelvinChange(): void {
  if (input_celsius instanceof HTMLInputElement) {
    if (celsius_kelvin instanceof HTMLElement) {
      celsius_kelvin.innerText = `절대온도 변환 : ${(parseInt(input_celsius.value) + 273.15).toFixed(2)}K`
    }
  }
}