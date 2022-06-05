const input_gram = document.querySelector("#input_gram");
const h3_gramKilogram = document.querySelector("#h3_gramKilogram");
if (input_gram instanceof HTMLInputElement) {
    input_gram.addEventListener("change", gram_handleChange);
}
function gram_handleChange() {
    if (input_gram instanceof HTMLInputElement) {
        if (h3_gramKilogram instanceof HTMLElement) {
            h3_gramKilogram.innerText = `킬로그램 변환 : ${(parseInt(input_gram.value) / 1000).toFixed(2)}KG`;
        }
    }
}
