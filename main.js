var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
console.log("We are in the start function.");
    document.getElementById("text_box").innerHTML="";
recognition.start();

}

recognition.onresult=function run(event){
console.log("We are in the on result.");
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("text_box").innerHTML=content;
speak();
}

function speak(){
console.log("We are in the speak function.");
    var synth= window.speechSynthesis;

speak_data=document.getElementById("text_box").value;

var utterThis= new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);

Webcam.attach('#camera');
}

Webcam.set({

    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90

});

camera= document.getElementById("camera");



