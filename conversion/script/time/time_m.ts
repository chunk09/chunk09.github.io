const input_minute: HTMLInputElement | null = document.querySelector("#input_minute");
const minute_second: HTMLElement | null = document.querySelector("#minute_second");
const minute_hour: HTMLElement | null = document.querySelector("#minute_hour");

if (input_minute instanceof HTMLInputElement) {
  input_minute.addEventListener("change", minute_secondChange);
  input_minute.addEventListener("change", minute_hourChange);
}

function minute_secondChange(): void {
  if (input_minute instanceof HTMLInputElement) {
    if (minute_second instanceof HTMLElement) {
      minute_second.innerText = `초 변환 : ${(parseInt(input_minute.value) * 60).toFixed(2)}초`;
    }
  }
}
function minute_hourChange(): void {
  if (input_minute instanceof HTMLInputElement) {
    if (minute_hour instanceof HTMLElement) {
      minute_hour.innerText = `시 변환 : ${(parseInt(input_minute.value) / 60).toFixed(2)}시`;
    }
  }
}