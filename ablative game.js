var random;
var kind;
var kindList = ["meansInstrument", "accompaniment", "manner", "placeWhere", "seperation", "personalAgent", "cardinalNumber", "time"];

function newSentence() {
random = Math.floor(Math.random() * kindList.length);
alert(random);

// assigns the number to a kind of ablative to make my life easier
for (var i = 0; i < kindList.length; i++) {
 if (random == i){
   kind = kindList[i];
 }
}
alert(kind);

// switch (expression) {
//   case expression:
//
//     break;
//   default:
//
// }

}

function submit() {


}
