prediction_1 = "";

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
});
Webcam.attach('#camera');
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("results").innerHTML = "<img id='capture_image' src='" + data_uri + "'/>";
    });
}
console.log("ml5 version", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qsU6kc5Lq/model.json", modelLoaded);

function modelLoaded() {
    console.log("model Loaded");
}

function speak()
{ var synth=window.speechSynthesis;
  speak_data_1="The First Prediction Is "+prediction_1;
   var utterThis=new SpeechSynthesisUtterance(speak_data_1);
   synth.speak(utterThis);
}