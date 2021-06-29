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

if(content=="take my selfie"){
speak();
}

}

function speak(){
console.log("We are in the speak function.");
    var synth= window.speechSynthesis;

speak_data="Taking your selfie in 5 seconds.";

var utterThis= new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);

Webcam.attach('#camera');
setTimeout(function(){

    take_snapshot();
    save();
},5000);

}

Webcam.set({

    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90

});

camera= document.getElementById("camera");

function take_snapshot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">';
    });

}

function save(){

    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}