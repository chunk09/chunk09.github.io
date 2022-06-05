const input_m: HTMLInputElement | null = document.querySelector("#input_m");
const h3_meterCmCon: HTMLElement | null = document.querySelector("#h3_meterCmCon");
const h3_meterKilometerCon: HTMLElement | null = document.querySelector("#h3_meterKilometerCon");

if (input_m instanceof HTMLInputElement) {
  input_m.addEventListener("change", meter_handleCmChange);
  input_m.addEventListener("change", meter_handleKilometerChange);
}

function meter_handleCmChange(): void {
  if (input_m instanceof HTMLInputElement) {
    if (h3_meterCmCon instanceof HTMLElement) {
      h3_meterCmCon.innerText = `센티미터 변환 ${(parseInt(input_m.value) * 100).toFixed(2)}CM`;
    }
  }
}
function meter_handleKilometerChange(): void {
  if (input_m instanceof HTMLInputElement) {
    if (h3_meterKilometerCon instanceof HTMLElement) {
      h3_meterKilometerCon.innerText = `킬로미터 변환 : ${(parseInt(input_m.value) / 1000).toFixed(2)}KM`;
    }
  }
}