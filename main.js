https://teachablemachine.withgoogle.com/models/O_imcKQxw/

function start(){
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/O_imcKQxw/model.json',modelReady);

}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else{
        console.log(results);
        r = Math.floor(Math.random() * 255) + 1;
        g = Math.floor(Math.random() * 255) + 1;
        b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("rl").innerHTML='I CAN HEAR- '+results[0].label;
        document.getElementById("rc").innerHTML='ACCURACY- '+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("rl").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("rc").style.color="rgb("+r+","+g+","+b+")";

        i1 = document.getElementById('a1');
        i2 = document.getElementById('a2');
        i3 = document.getElementById('a3');
        i4 = document.getElementById('a4');

        if (results[0].label == "Clapping") {
            i1.src= 'aliens-01.gif';
            i2.src= 'aliens-02.png';
            i3.src= 'aliens-03.png';
            i4.src= 'aliens-04.png';
        } else if (results[0].label == "Knocking") {
            i1.src= 'aliens-01.png';
            i2.src= 'aliens-02.gif';
            i3.src= 'aliens-03.png';
            i4.src= 'aliens-04.png';
        } else if (results[0].label == "Tapping") {
            i1.src= 'aliens-01.png';
            i2.src= 'aliens-02.png';
            i3.src= 'aliens-03.gif';
            i4.src= 'aliens-04.png';
        } else {
            i1.src= 'aliens-01.png';
            i2.src= 'aliens-02.png';
            i3.src= 'aliens-03.png';
            i4.src= 'aliens-04.gif';
        }
}}