noseX=0;
noseY=0;
rightWristx=0;
leftWristx=0;
diffrence=0;
function setup(){
canvas = createCanvas(500,500);
canvas.center();
video = createCapture(VIDEO);
video.size(400,400);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose", gotPoses);}

function modelLoaded(){
    console.log("Model is loaded");

}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        rightWristx=results[0].pose.rightWrist.x;
        leftWristx=results[0].pose.leftWrist.x;
        diffrence=floor(leftWristx-rightWristx);
    }

}

function draw(){
fill("#BE93D4");
stroke("#BE93D4");
background("gray");
square(noseX,noseY,diffrence);
document.getElementById("square_side").innerHTML = "Side of the square is " + diffrence + "px";
}
