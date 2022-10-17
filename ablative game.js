var random;
var randomNumber;
var verbList = [];
var ablList = [];
var verbNum;
var ablNum;
var kind;
var kindList = ["meansInstrument", "accompaniment", "manner", "placeWhere", "seperation", "personalAgent", "cardinalNumber", "time"];
var answer;

function newSentence() {

document.getElementById("response").style.display = "none";

random = randomNum(kindList.length);

// assigns the number to a kind of ablative to make my life easier
for (var i = 0; i < kindList.length; i++) {
 if (random == i){
   kind = kindList[i];
   // kind = "cardinalNumber";
 }
}
// alert("(the correct answer is): " + kind);

switch (kind) {
  case "meansInstrument":
    verbList = ["necavit", "necat", "necaverunt", "necant", "scripsit", "scripserunt", "scribit", "scribunt"];
    ablList = ["manu", "ferro", "hasta", "libro", "pecunia", "manibus", "ferris", "hastis", "libris", "pecuniis"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    break;
  case "accompaniment":
    verbList = ["scripsit", "scripserunt", "scribit", "scribunt", "ambulant", "ambulat", "ambulant", "ambulabit", "ambulabant", "navigat", "navigant", "navigabant", "navigavit"];
    ablList = ["cum amico", "cum amica", "cum amicis", "cum amicibus", "cum matere", "cum patre", "cum uxore", "cum Cicero", "cum poeta"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    document.getElementById("directObject").innerText = "";
    break;
  case "manner":
    verbList = ["scripsit", "scripserunt", "scribit", "scribunt"];
    ablList = ["cum cura", "cum celere", "cum amore", "cum voluptate", "cum spe"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    document.getElementById("directObject").innerText = "id";
    break;
  case "placeWhere":
    verbList = ["ambulant", "ambulat", "ambulant", "ambulabit", "ambulabant", "currint", "currit", "currebat", "currenbant", "iacebam", "iacet", "iacent", "iacebant", "iacebit", "iacebunt"];
    ablList = ["in urbe", "sub caelo", "in casa", "in Asia", "sub mare"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    document.getElementById("directObject").innerText = "";
    break;
  case "seperation":
    verbList = ["prohibuit", "prohibet", "prohibent", "prohibuerunt"];
    ablList = ["ab urbe", "ab amora", "ex urbe"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    document.getElementById("directObject").innerText = "eos";
    break;
  case "personalAgent":
    verbList = ["scriptus est", "scripta est", "scripti sunt", "scriptae sunt", "scribetur", "scribentur", "necatus est", "necata est", "necati sunt", "necatae sunt", "necatur", "necantur", "educatus est", "educati sunt", "educata est", "educatae sunt", "educatur", "educantur", "amatus est", "amata est", "amati sunt", "amatae sunt"];
    ablList = ["ab amico", "ab amica", "ab amicis", "a nauta", "a nautis", "ab eo", "ab eis", "a Troia", "ab puella", "ab puellis"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    document.getElementById("directObject").innerText = "";
    break;
  case "cardinalNumber":
    verbList = ["dicedit", "discedunt", "discedebat", "discedebant", "amat", "amant", "amavit", "amaverunt", "scripsit", "scripserunt", "scribit", "scribunt"];
    ablList = ["ex nautis", "ex filiis", "ex versu"];
    var numberList = ["Tres", "Quinque", "Sex", "Triginta", "Undeviginti"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    var numNum = randomNum(numberList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    document.getElementById("directObject").innerText = "";
    document.getElementById("subject").innerText = numberList[numNum];
    break;
  case "time":
    verbList = ["ambulant", "ambulat", "ambulant", "ambulabit", "ambulabant", "navigat", "navigant", "navigabit", "navigabunt"];
    ablList = ["eo tempore", "una hora", "noce", "die", "anno"];
    verbNum = randomNum(verbList.length);
    ablNum = randomNum(ablList.length);
    document.getElementById("underlined").innerText = ablList[ablNum];
    document.getElementById("verb").innerText = verbList[verbNum];
    document.getElementById("directObject").innerText = "";
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
        document.getElementById("response").innerText = "Correct!";
        // alert("correct!");
      } else {
        document.getElementById("response").innerText = "Incorrect :(";
        // alert("incorrect :[");
      }
    }
  }

  // makes the correct/incorrect visible
  x = document.getElementById("response");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

}

function randomNum(list){
  randomNumber = Math.floor(Math.random() * list);

  return randomNumber;
}




// the end :)
