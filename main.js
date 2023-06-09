var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    if(Content== "selfie" )
    {
        console.log("taking selfie in 5 seconds");
        speak();
    }
    document.getElementById("textbox").innerHTML = Content;
    }

function speak()
{
    var snyth = window.speechSynthesis;
    speak_data = "taking selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    snyth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function() {
        take_snapshot(); 
        save();      
    }, 5000);
}

 camera = document.getElementById("camera");
 Webcam.set({
    width:320,
    height: 240,
    image_format:'png',
    png_quality:100
 });

 function take_snapshot()
 {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
    });
 }

 function save()
 {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
 }