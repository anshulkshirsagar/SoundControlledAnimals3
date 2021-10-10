function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/oiOWvuMVV/model.json', modelReady)
}
function modelReady(){
    classifier.classify(gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        randomNumber_r = Math.floor(Math.random()*255)+1;
        randomNumber_g = Math.floor(Math.random()*255)+1;
        randomNumber_b = Math.floor(Math.random()*255)+1;
        document.getElementById("result label").innerHTML = 'I can hear: ' + results[0].label;
        document.getElementById("result confidence").innerHTML = 'Accuracy: ' + (results[0].confidence*100).toFixed(2)+"%"
        document.getElementById("result label").style.color = "rgb("+randomNumber_r+" , "+randomNumber_g+" , "+randomNumber_b+")";
        document.getElementById("result confidence").style.color = "rgb("+randomNumber_r+" , "+randomNumber_g+" , "+randomNumber_b+")";
        animalPicture = document.getElementById("picture");

        if(results[0].label == "Background Noise"){
            animalPicture.src = 'background_noise.jpeg';
        }
        else if(results[0].label == "Meow"){
            animalPicture.src = 'cat.jpeg';
        }
        else if(results[0].label == "Bark"){
            animalPicture.src = 'dog.jpeg';
        }
        else if(results[0].label == "Moo"){
            animalPicture.src = 'cow.jpeg';
        }
        else{
            animalPicture.src = 'pig.jpeg';
        }
    }
}