// single chart pronouns
var id;
var kind;

var random;
var entry = [];

var secondEntry = [];
var secondEntryRandom;
var secondEntryRootLength;
var secondEntryRoot;

var thirdEntry = [];
var thirdEntryRandom;
var thirdEntryRootLength;
var thirdEntryRoot;

var fourthEntry = [];
var fourthEntryRandom;
var fourthEntryRootLength;
var fourthEntryRoot;

function getId(btn) {
  id = btn.id;
  var article = document.getElementById(id);
  kind = btn.dataset.kind;
}

var correctColor = 'rgba(152, 217, 159, 0.75)';
var incorrectColor = 'rgba(222, 126, 136, 0.75)';
var blankColor = 'rgba(255,255,255,255)';

function submitChart(){
  var input = [];
  var answer = [];
  var length;
  switch (id) {
    case "threeChart":
      length = 30;
      break;
    case "oneChart":
      length = 10;
      break;
    case "verbChart":
      length = 18;

      var firstEntry = ["puto", "pronuntio", "probo", "paro", "nuntio", "nego", "neco", "navigo", "narro", "muto", "libero", "laudo", "laboro", "invito", "exspecto", "erro", "educo", "desidero", "demonstro", "delecto", "creo", "conservo", "cogito", "ceno", "careo", "appello", "amo"];

      secondEntry = ["putare", "pronuntiare", "probare", "parare", "nuntiare", "negare", "necare", "navigare", "narrare", "mutare", "liberare", "laudare", "laborare", "invitare", "exscpectare", "errare", "educare", "desiderare", "demonstrare", "delectare", "creare", "conservare", "cogitare", "cenare", "carare", "appellare", "amare"];
        verbSecondEntryRoot();
      thirdEntry = ["putavi", "pronuntiavi", "probavi", "paravi", "nuntiavi", "negavi", "necavi", "navigavi", "narravi", "mutavi", "liberavi", "laudavi", "laboravi", "invitavi", "exspectavi", "erravi", "educavi", "desideravi", "demonstravi", "delectavi", "creavi", "conservavi", "cogitavi", "cenavi", "carui", "appellavi", "amavi"];
        verbThirdEntryRoot();
      fourthEntry = ["putatum", "pronuntiatum", "probatum", "paratum", "nuntiatum", "negatum", "necatum", "nevigatum", "narratum", "mutatum", "liberatum", "laudatum", "laboratum", "invitatum", "exspectatum", "erratum", "educatum", "desideratum", "demonstratum", "delectatum", "creatum", "conservatum", "cogitatum", "cenatum", "cariturum", "appellatum", "amatum"];
        verbFourthEntryRoot();

      var endingsOf1st2ndDecsActImps = ["irregular", "s", "t", "mus", "tis", "nt", "bam", "bas", "bat", "bamus", "batis", "bant", "bo", "bis", "bit", "bimus", "bitis", "bunt"];
      var endingsOf1st2ndDecsActPerf = ["irregular", "isti", "it", "imus", "istis", "erunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erint"];
      var endingsOf1st2ndDecsPassImp = ["irregular", "ris", "tur", "mur", "mini", "ntur", "bar", "baris", "batur", "bamur", "bamini", "bantur", "bor", "beris", "bitur", "bimur", "bimini", "buntur"];
      var endingsOfPassPerf = ["sum", "es", "est", "sumus", "estis", "sunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erunt"];

       for (var i = 0; i < 4; i++) {
         var aspectAndVoice = ["actImp", "actPerf", "passImp", "passPerf"];
         var currentAspectAndVoice = aspectAndVoice[i];
         for (var h = 0; h < length; h++) {
            //make a list of the user's answers
            var currentID = id + currentAspectAndVoice + h;
            var inputElement = document.getElementById(currentID);
            input.push(document.getElementById(currentID).value);
//--------------
            //make a list of the correct answers
            if (kind == "firststandsecondndverbs"){

              if (i == 0){ // creating answer list for first chart, the active imperfects
                if (h == 0){
                  if (firstEntry[random] == input[h] || firstEntry[random] + " " == input[h]){
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                } else {
                  if (secondEntryRoot + endingsOf1st2ndDecsActImps[h] == input[h] || secondEntryRoot + endingsOf1st2ndDecsActImps[h] + " " == input[h]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                }

              } else if (i == 1){
                if (h == 0) {
                  if (thirdEntryRandom == input[h + 18]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                } else {
                  if (thirdEntryRoot + endingsOf1st2ndDecsActPerf[h] == input[h + 18] || thirdEntryRoot + endingsOf1st2ndDecsActPerf[h] + " " == input[h + 18]){
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                }
              } else if (i == 2) {
                if (h == 0) {
                  if (firstEntry[random] + "r" == input[h + 36] || firstEntry[random] + "r" + " " == input[h + 36]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                } else if (h < 18) {
                  if (secondEntryRoot + endingsOf1st2ndDecsPassImp[h] == input[h + 36] || secondEntryRoot + endingsOf1st2ndDecsPassImp[h] + " " == input[h + 36]){
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                }
              } else {
                if (h < 3) {
                  if (fourthEntryRoot + "us " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "um " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "us " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "um " + endingsOfPassPerf[h] + " " == input[h + 54]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                } else if (h < 6) {
                  if (fourthEntryRoot + "i " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "ae " + endingsOfPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "a " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "i " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "ae " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] + " " == input[h + 54]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                }
                } else if (h < 9) {
                  if (fourthEntryRoot + "us " + endingsOfPassPerf[h] == input [h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "um " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "us " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "um " + endingsOfPassPerf[h] + " " == input[h + 54]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                } else if (h < 12) {
                  if (fourthEntryRoot + "i " + endingsOfPassPerf[h] == input [h + 54] || fourthEntryRoot + "ae " + endingsOfPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "a " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "i " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "ae " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] + " " == input[h + 54]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                }
                } else if (h < 15) {
                  if (fourthEntryRoot + "us " + endingsOfPassPerf[h] == input [h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "um " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "us " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "um " + endingsOfPassPerf[h] + " " == input[h + 54]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                } else if (h < 18) {
                  if (fourthEntryRoot + "i " + endingsOfPassPerf[h] == input [h + 54] || fourthEntryRoot + "ae " + endingsOfPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "a " + endingsOfPassPerf[h] == input[h + 54] || fourthEntryRoot + "i " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "ae " + endingsOfPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsOfPassPerf[h] + " " == input[h + 54]) {
                    inputElement.style.backgroundColor = correctColor;
                  } else {
                    inputElement.style.backgroundColor = incorrectColor;
                  }
                }
              }
              }
          }
      }
      break;
    case "participleChart":
      length = 4;
      break;
    case "participleChartEnglish":
      length = 8;
      break;
    case "infinitiveChart":
      length = 6;
      break;
    case "infinitiveChartEnglish":
      length = 12;
      break;
    }

}
function refreshChart(){
  switch (id) {
    case "threeChart":
      length = 30;
      break;
    case "oneChart":
      length = 10;
      break;
    case "verbChart":
      length = 18;
      for (var i = 0; i < 4; i++) {
        var aspectAndVoice = ["actImp", "actPerf", "passImp", "passPerf"];
        var currentAspectAndVoice = aspectAndVoice[i];
        for (var h = 0; h < length; h++){
          var currentID = id + currentAspectAndVoice + h;
          var inputElement = document.getElementById(currentID);
          inputElement.style.backgroundColor = blankColor;
          if (kind = "firststandsecondndverbs") {
            entry = ["puto, putare, putavi, putatum", "pronuntio, pronuntiare, pronuntiavi, pronuntiatum", "probo, probare, probavi, probatum", "paro, parare, paravi, paratum", "nuntio, nuntiare, nuntiavi, nuntiatum", "nego, negare, negavi, negatum", "neco, necare, necavi, necatum", "navigo, navigare, navigavi, navigatum", "narro, narrare, narravi, narratum", "muto, mutare, mutavi, mutatum", "libero, liberare, liberavi, liberatum", "laudo, laudare, laudavi, laudatum", "laboro, laborare, laboravi, laboratum", "invito, invitare, invitavi, invitatum", "exspecto, exscpectare, exspectavi, exspectatum", "erro, errare, erravi, erratum", "educo, educare, educavi, educatum", "desidero, desiderare, desideravi, desideratum", "demonstro, demonstrare, demonstravi, demonstratum", "delecto, delectare, delectavi, delectatum", "creo, creare, creavi, creatum", "conservo, conservare, conservavi, conservatum", "cogito, cogitare, cogitavi, cogitatum", "ceno, cenare, cenavi, cenatum", "careo, carere, carui, cariturum", "appello, appellare, appellavi, appellatum", "amo, amare, amavi, amatum"];

            random = Math.floor(Math.random() * entry.length);
          }
          document.getElementById("instructions").innerHTML = "Conjugate: " + entry[random];
        }
      }
      break;
    case "participleChart":
      length = 4;
      break;
    case "participleChartEnglish":
      length = 8;
      break;
    case "infinitiveChart":
      length = 6;
      break;
    case "infinitiveChartEnglish":
      length = 12;
      break;
    }
}



function verbSecondEntryRoot(){
  secondEntryRandom = secondEntry[random];
  secondEntryRootLength = secondEntryRandom.length - 2;
  secondEntryRoot = secondEntryRandom.slice(0, secondEntryRootLength);
}

function verbThirdEntryRoot() {
  thirdEntryRandom = thirdEntry[random];
  thirdEntryRootLength = thirdEntryRandom.length - 1;
  thirdEntryRoot = thirdEntryRandom.slice(0, thirdEntryRootLength);
}

function verbFourthEntryRoot() {
  fourthEntryRandom = fourthEntry[random];
  fourthEntryRootLength = fourthEntryRandom.length - 2;
  fourthEntryRoot = fourthEntryRandom.slice(0, fourthEntryRootLength);
}
