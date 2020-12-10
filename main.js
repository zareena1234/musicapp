song1="";
song2="";
rightwristx=0;
rightwristy=0;
leftwristx=0;
leftwristy=0;
scorerightwrist=0;
scoreleftwrist=0;
song1status="";
song2status="";
function preload()
{song1=loadSound("music.mp3");
song2=loadSound("music2.mp3");
}


function setup()
{canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("posenet has started");
}

function gotPoses(results)
{
if(results.length>0)
{
console.log(results);
scorerightwrist=results[0].pose.keypoints[10].score;
scoreleftwrist=results[0].pose.keypoints[10].score;
console.log("scorerightwrist= "+scorerightwrist+"scoreleftwrist= "+scoreleftwrist);



}





}
