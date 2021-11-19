oo = document.getElementById("ob").value;
Status = " ";
object = [ ];


function setup()
{
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture();
    video.hide();
}

function draw()
{
    image(video, 0, 0, 480, 380);
    if(Status != " ")
    {
        Objectdetection.detect(video, gotresult);
        for(i=0;i<object.length;i++)
        {
            document.getElementById("status").innerHTML = "Status = object detected";

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill()
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            if(object[i].label == document.getElementById("ob").value )
            {
                document.getElementById("number_of_Object").innerHTML = document.getElementById("ob").value + " is found";
            }
        }
    }
}

function gotresult(error, result)
{
    if(error)
    {
        console.log(error);
    }
    else{
        console.log(result);
        object = result;
    }
}

function start()
{
    Objectdetection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting objects";
}

function modelLoaded()
{
    console.log("model loaded!!");
    Status = true;
}