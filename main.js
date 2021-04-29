status = "";
searchString = "";

function setup(){
    canvas = createCanvas(400, 300);
    canvas.position(435, 220);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 400, 300);
}
function start(){
    ObjectDetector = ml5.ObjectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
    searchString = document.getElementById("object_name").value;
}
function modelLoaded(){
    console.log("Model has been initialized.");
    status = true;
}