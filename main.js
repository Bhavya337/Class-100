var SpeechRecognition = window.webkitSpeechRecognition;
var recoginition = new SpeechRecognition() ;
 
function start(){
    document.getElementById("textbox").innerHTML="";
    recoginition.start();
    console.log("we are in start");

}

recoginition.onresult=function(event){
    console.log(event);
  var content =event.results[0][0].transcript;
document.getElementById("textbox").innerHTML=content;
console.log(content);
  if (content=="take my selfie"){
    console.log("taking my selfie....");
    speak();
    }
}
function speak(){
  var synth=window.speechSynthesis;
  speak_data="taking your selfie in 5 seconds ";
  var speak_this=new SpeechSynthesisUtterance(speak_data);
  synth.speak(speak_this);
  Webcam.attach(camera);
  setTimeout(function()
  {take_snap_shot();
    save();
  },
  5000
    );



}
camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height: 250,
    image_format:'png',
    png_quality:90
   
});

function take_snap_shot(){
 Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='selfie_image' src='"+ data_uri+"'>";
//console.log("<img id='selfie_image' src='"+ data_uri+"'>");

 });
}

function save(){
link=document.getElementById("link");
image=document.getElementById("selfie_image").src;
link.href=image;
link.click();




}