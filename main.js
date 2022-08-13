lipsX = 0;
lipsY = 0;

function preload(){
   pink_lips = loadImage(" https://i.postimg.cc/PxFvYgkv/l1.png");
}

function setup() {
    canvas = createCanvas(350, 300);
    canvas.position(450, 200);
    
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotposes);
    }

    function modelLoaded(){
      console.log("model is ready");
    }
    
   function gotposes(result){ 
     if(result.length > 0){
        console.log(result);

       lipsX = result[0].pose.nose.x;
       lipsY = result[0].pose.nose.y;
     }
    }

    function draw() {
    image(video, 0, 0, 350, 300);
    image(pink_lips, lipsX-170, lipsY-70, 35, 35);
    }
     function takesnapshot(){
        save("mysnap.png");
     }
    
    
     