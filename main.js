
Status = " ";


function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    Objectdetecter = ml5.objectDetector("cocossd", modelLoded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
} 

function modelLoded()
{
    console.log("model loaded!!");
    Status = true;
}

function draw()
{
    image(video, 0, 0, 480, 380);

}

