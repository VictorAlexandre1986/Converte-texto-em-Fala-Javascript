let vozSelect = document.querySelector('select')
const btnElement = document.querySelector('.btnConverte');
const textAreaElement = document.querySelector('textarea');

let speech = new SpeechSynthesisUtterance();

let vozes = [];

window.speechSynthesis.onvoiceschanged = () =>{
    vozes = window.speechSynthesis.getVoices();
    speech.voice = vozes[0];

    vozes.forEach((voice, i) =>(
        vozSelect.options[i] = new Option(voice.name, i)
    ));
}

vozSelect.addEventListener('change', ()=>{
    speech.voice = vozes[vozSelect.value];
})

btnElement.addEventListener('click',()=>{
    speech.text = textAreaElement.value;
    window.speechSynthesis.speak(speech);
}); 