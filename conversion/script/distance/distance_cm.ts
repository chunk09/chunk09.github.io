const input_cm: HTMLInputElement | null = document.querySelector("#input_cm");
const h3_cmMeterCon: HTMLElement | null = document.querySelector("#h3_cmMeterCon");
const h3_cmKilometerCon: HTMLElement | null = document.querySelector("#h3_cmKilometerCon");

if (input_cm instanceof HTMLInputElement) {
  input_cm.addEventListener("change", cm_handleMeterChange);
  input_cm.addEventListener("change", cm_handleKilometerChange);
}

function cm_handleMeterChange(): void {
  if (input_cm instanceof HTMLInputElement) {
    if (h3_cmMeterCon instanceof HTMLElement) {
      h3_cmMeterCon.innerHTML = `미터 변환 : ${(parseInt(input_cm.value) / 100).toFixed(2)}M`
    }
  }
}

function cm_handleKilometerChange(): void {
  if (input_cm instanceof HTMLInputElement) {
    if (h3_cmKilometerCon instanceof HTMLElement) {
      h3_cmKilometerCon.innerText = `킬로미터 변환 : ${(parseInt(input_cm.value) / 100000).toFixed(2)}KM`;
    }
  }
}