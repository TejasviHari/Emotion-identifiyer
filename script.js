Webcam.set({
    width:300,
    height:300, 
     image_format:'png',
     png_quality:90
});

camera=document.getElementById("webcam");

Webcam.attach("#webcam");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("emotion-pic").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UWcSDfbhj/model.json',modelLoaded);
function modelLoaded(){
    console.log("Model loaded!!")
}