let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");

let tafelinputoefenObj = document.getElementById("inputTafelOefen");
let opgaveoutputObj = document.getElementById("outputOpgave");
let feedbackoutputObj = document.getElementById("outputFeedback");

function showTafel() {
    let tafel = tafelinputObj.value
    //let teller = 1;
    let output = "";
    let uitkomst = 0;
    for (let teller = 1; teller < 11; teller++ ) {
        uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    // while (teller < 11) {
    //     uitkomst = teller * tafel;
    //     output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    //     teller++;
    // }
    tafeloutputObj.innerHTML = output;
}
function showOpgave(){
    //alert("Hij doet het " + tafelinputoefenObj.value);
    opgaveoutputObj.innerHTML = "3 x " + tafelinputoefenObj.value + " = " + "<input type='number' id='inputAntwoord' class='form-control'>";
}