var random;
var randomNumber;
var kind;
var kindList = ["meansInstrument", "accompaniment", "manner", "placeWhere", "seperation", "personalAgent", "cardinalNumber", "time"];
var answer;

function newSentence() {

random = randomNum();

// assigns the number to a kind of ablative to make my life easier
for (var i = 0; i < kindList.length; i++) {
 if (random == i){
   kind = kindList[i];
   // kind = "meansInstrument";
 }
}
alert("(the correct answer is): " + kind);

switch (kind) {
  case "meansInstrument":
    var verbList = ["necavit", "necat", "necaverunt", "necant", "scripsit", "scripsierunt", "scribit", "scribunt"];
    var ablList = ["manu", "ferro", "hasta", "libro", "pecunia", "manibus", "ferris", "hastis", "libris", "pecuniis"];
    var verbNum = randomNum();
    var ablNum = randomNum();
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    break;
  case "accompaniment":

    break;
  case "manner":

    break;
  case "placeWhere":

    break;
  case "seperation":

    break;
  case "personalAgent":

    break;
  case "cardinalNumber":

    break;
  case "time":

    break;
  default:

}

}

/* --------------- submit button -------------- */

function submit() {

  for (var i = 0; i < kindList.length; i++) {
    if (document.getElementById(kindList[i]).checked == true){
      answer = kindList[i];
      alert("the user's inputted answer is: " + answer);
      if (answer == kindList[random]){
        // document.getElementById("response").value = "Correct!";
        alert("correct!");
      } else {
        // document.getElementById("response").value = "Incorrect!";
        alert("incorrect :[");
      }
    }
  }

}

function randomNum(){
  randomNumber = Math.floor(Math.random() * kindList.length);

  return randomNumber;
}






// the end :)
