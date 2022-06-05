const input_celsius = document.querySelector("#input_celsius");
const celsius_fahrenheit = document.querySelector("#celsius_fahrenheit");
const celsius_kelvin = document.querySelector("#celsius_kelvin");
if (input_celsius instanceof HTMLInputElement) {
    input_celsius.addEventListener("change", celsius_fahrenheitChange);
    input_celsius.addEventListener("change", celsius_kelvinChange);
}
function celsius_fahrenheitChange() {
    if (input_celsius instanceof HTMLInputElement) {
        if (celsius_fahrenheit instanceof HTMLElement) {
            celsius_fahrenheit.innerText = `화씨온도 변환 : ${((parseInt(input_celsius.value) * 1.8) + 32).toFixed(2)}°F`;
        }
    }
}
function celsius_kelvinChange() {
    if (input_celsius instanceof HTMLInputElement) {
        if (celsius_kelvin instanceof HTMLElement) {
            celsius_kelvin.innerText = `절대온도 변환 : ${(parseInt(input_celsius.value) + 273.15).toFixed(2)}K`;
        }
    }
}
