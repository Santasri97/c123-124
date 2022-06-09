function setup() {
    video = createCapture(VIDEO);
    video.size(560 ,700);
    video.position(250 ,100)

    canvas = createCanvas(560 ,480);
    canvas.position(1000 ,200);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background ("white")
}

function modelloaded() {
    console.log("PoseNet has been Initialized !");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}