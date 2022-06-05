const input_kelvin = document.querySelector("#input_kelvin");
const kelvin_celsius = document.querySelector("#kelvin_celsius");
const kelvin_fahrenheit = document.querySelector("#kelvin_fahrenheit");
if (input_kelvin instanceof HTMLInputElement) {
    input_kelvin.addEventListener("change", kelvin_celsiusChange);
    input_kelvin.addEventListener("change", kelvin_fahrenheitChange);
}
function kelvin_celsiusChange() {
    if (input_kelvin instanceof HTMLInputElement) {
        if (kelvin_celsius instanceof HTMLElement) {
            kelvin_celsius.innerText = `섭씨온도 변환 : ${((parseInt(input_kelvin.value) - 273.15)).toFixed(2)}°C`;
        }
    }
}
function kelvin_fahrenheitChange() {
    if (input_kelvin instanceof HTMLInputElement) {
        if (kelvin_fahrenheit instanceof HTMLElement) {
            kelvin_fahrenheit.innerText = `화씨온도 변환 : ${((parseInt(input_kelvin.value) - 273.15) * 1.8 + 32).toFixed(2)}°F`;
        }
    }
}
