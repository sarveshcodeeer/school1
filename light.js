function st() {

    navigator.mediaDevices.getUserMedia({audio:true})
    
    }
    
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PQzgs6Dp9/model.json" , modelReady );
    
    function modelReady() {
    
        console.log("model has loaded commander")
    classifier.classify(gotResult)
    }
    
    function gotResult(error,results) {
    
    
    if(error){
    console.log(error)
    
    }
    else{
    console.log(results)
    
    if(results[0].label=="clap") {
        document.getElementById("im").src = "Capture1.PNG" ; 
    }
    
    if(results[0].label=="snap"){
        document.getElementById("im").src = "Capture.PNG" ; 
    }

    }}

    function re(){

window.location = "index.html" ; 


    }

   



    