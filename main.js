function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    soundModel = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/vm5k-_qRB/model.json", modelReady);
}

function modelReady() {
    soundModel.classify(getSound);

}

function getSound(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);

        document.getElementById("result").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = (result[0].confidence * 100).toFixed(2) + "%";



        sound_result = result[0].label;
        if (sound_result == "Woof") {
            document.getElementById("animal_pic").src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*"
        } else if (sound_result == "Meow") {
            document.getElementById("animal_pic").src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*"
        }  else {
            document.getElementById("animal_pic").src= "https://www.francescolejones.com/wp-content/uploads/2016/03/ear.jpg"
        }

       
    }

}