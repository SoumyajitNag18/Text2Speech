let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('select');

//For getting the voice
window.speechSynthesis.onvoiceschanged = () =>{
    voices = window.speechSynthesis.getVoices();
    speech.voice=voices[0];
    voices.forEach((voice,i) => (voiceSelect.options[i] = new Option(voice.name,i))); 
}
 //Change the voice
voiceSelect.addEventListener('change',() =>{
    speech.voice = voices[voiceSelect.value ];
});

//For the drop down content in the select
document.querySelector('button').addEventListener('click',() => {
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});