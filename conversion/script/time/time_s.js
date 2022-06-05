const input_second = document.querySelector("#input_second");
const second_minute = document.querySelector("#second_minute");
const second_hour = document.querySelector("#second_hour");
if (input_second instanceof HTMLInputElement) {
    input_second.addEventListener("change", s_handleMChange);
    input_second.addEventListener("change", m_handleHChange);
}
function s_handleMChange() {
    if (input_second instanceof HTMLInputElement) {
        if (second_minute instanceof HTMLElement) {
            second_minute.innerText = `분 변환 :  ${(parseInt(input_second.value) / 60).toFixed(2)}분`;
        }
    }
}
function m_handleHChange() {
    if (input_second instanceof HTMLInputElement) {
        if (second_hour instanceof HTMLElement) {
            second_hour.innerText = `시 변환 : ${(parseInt(input_second.value) / 3600).toFixed(2)}시`;
        }
    }
}
