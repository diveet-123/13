leftWristX = 0;
rightWristX = 0;
diffrence=0;

function preLoad()
{
}

function setup()
{
    video=createCapture(VIDEO)
    video.size(450 , 450)

    canvas=createCanvas(500,300);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}

function modelLoaded()
{
    console.log("poseNet is initialized!");
}

function gotResults(result)
{
    if (result.length > 0)
    {
        console.log(result)
        leftWristX = result[0].pose.leftWrist.x;
        rightWristX = result[0].pose.rightWrist.x;
        diffrence=floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background('peru');

    textSize(diffrence);
    fill('#ffdab9');
    text('Diveet',50,100);
}