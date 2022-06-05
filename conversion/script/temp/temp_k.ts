const input_kelvin: HTMLInputElement | null = document.querySelector("#input_kelvin");
const kelvin_celsius: HTMLElement | null = document.querySelector("#kelvin_celsius");
const kelvin_fahrenheit: HTMLElement | null = document.querySelector("#kelvin_fahrenheit");

if (input_kelvin instanceof HTMLInputElement) {
  input_kelvin.addEventListener("change", kelvin_celsiusChange);
  input_kelvin.addEventListener("change", kelvin_fahrenheitChange);
}

function kelvin_celsiusChange(): void {
  if (input_kelvin instanceof HTMLInputElement) {
    if (kelvin_celsius instanceof HTMLElement) {
      kelvin_celsius.innerText = `섭씨온도 변환 : ${((parseInt(input_kelvin.value) - 273.15)).toFixed(2)}°C`
    }
  }
}
function kelvin_fahrenheitChange(): void {
  if (input_kelvin instanceof HTMLInputElement) {
    if (kelvin_fahrenheit instanceof HTMLElement) {
      kelvin_fahrenheit.innerText = `화씨온도 변환 : ${((parseInt(input_kelvin.value) - 273.15) * 1.8 + 32).toFixed(2)}°F`
    }
  }
}