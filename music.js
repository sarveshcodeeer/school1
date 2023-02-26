song = "" ; 
rwy = "" ; 
rwx = "" ; 
score1 ="" ; 
video = "" ; 
pes = "" ; 
function preload() {

song = loadSound("mmmm.mp3") ; 

}

function setup() {

    
    video = createCapture(VIDEO) ; 
    video.size( 380 , 380)
    video.hide() ;
    pes = ml5.poseNet(video , modelLoaded) ; 
    pes.on( 'pose' , gotposes)
    
    canvas = createCanvas(380 , 380) ;
    canvas.center() ;
    }

    function draw() {

image(video , 0 , 0 , 380 , 380)

fill("red") ; 
stroke("blue") ; 

if(score1 > 0.2 ) {

    circle(rwx , rwy , 20) ; 
    num = Number(rwy) ; 
    num1 = floor(num) ; 
    volume = num1/500 ; 
   song.setVolume(volume) ;
    document.getElementById("hid").innerHTML = "The volume is " + volume.toFixed(2) ; 
}

    }

    function play() {

        song.play() ; 
        song.setVolume(1) ;
        song.rate(1)
        }

    function modelLoaded() {

console.log("model has loaded commander")


    }

    function gotposes(results) {

        if(results.length>0){
            console.log(results) ; 
            score1 = results[0].pose.keypoints[10].score  ;

        rwx = results[0].pose.rightWrist.x ; 
        rwy = results[0].pose.rightWrist.y ; 
        
        }


    }

    function re() {


window.location = "index.html" ;


    }