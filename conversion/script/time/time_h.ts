const input_hour: HTMLInputElement | null = document.querySelector("#input_hour");
const hour_second: HTMLElement | null = document.querySelector("#hour_second");
const hour_minute: HTMLElement | null = document.querySelector("#hour_minute");

if (input_hour instanceof HTMLInputElement) {
  input_hour.addEventListener("change", hour_secondChange);
  input_hour.addEventListener("change", hour_minuteChange);
}

function hour_secondChange(): void {
  if (input_hour instanceof HTMLInputElement) {
    if (hour_second instanceof HTMLElement) {
      hour_second.innerText = `초 변환 : ${(parseInt(input_hour.value) * 3600).toFixed(2)}초`;
    }
  }
}

function hour_minuteChange(): void {
  if (input_hour instanceof HTMLInputElement) {
    if (hour_minute instanceof HTMLElement) {
      hour_minute.innerText = `분 변환 : ${(parseInt(input_hour.value) * 60).toFixed(2)}분`
    }
  }
}