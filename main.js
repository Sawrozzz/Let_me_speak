const Btn = document.querySelector("#btn")
const Text = document.querySelector("#text")
Btn.addEventListener("click", clickonplay);

function clickonplay (){
    const speech = new SpeechSynthesisUtterance(Text.value)
    speechSynthesis.speak(speech);
}