const input_km = document.querySelector("#input_km");
const h3_kilometerCmCon = document.querySelector("#h3_kilometerCmCon");
const h3_kilometerMeterCon = document.querySelector("#h3_kilometerMeterCon");
if (input_km instanceof HTMLInputElement) {
    input_km.addEventListener("change", km_handleCmChange);
    input_km.addEventListener("change", km_handleMeterChange);
}
function km_handleCmChange() {
    if (input_km instanceof HTMLInputElement) {
        if (h3_kilometerCmCon instanceof HTMLElement) {
            h3_kilometerCmCon.innerText = `센티미터 변환 : ${(parseInt(input_km.value) * 100000).toFixed(2)}CM`;
        }
    }
}
function km_handleMeterChange() {
    if (input_km instanceof HTMLInputElement) {
        if (h3_kilometerMeterCon instanceof HTMLElement) {
            h3_kilometerMeterCon.innerText = `미터 변환 : ${(parseInt(input_km.value) * 1000).toFixed(2)}M`;
        }
    }
}
