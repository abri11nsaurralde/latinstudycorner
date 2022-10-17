var id;
var kind;

var random;

// triple chart pronouns
var quiQuaeQuodEntry = [];


// noun variables
var nounEntry = [];
var nounFirstEntry = [];
var nounSecondEntry = [];
var nounEntryRandom;
var nounEntryRootLength;
var nounEntryRoot;

var nounEndingsFeminine = [];
var nounEndingsMasculine = [];
var nounEndingsNeuter = [];
var entry = [];
var gender = [];

var firstDeclensionEntry = []

// verb variables

var firstEntry = [];

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

var endingsActImps = [];
var endingsActPerf = [];
var endingsPassImp = [];
var endingsPassPerf = [];

var inputElement;
var input = [];
var answer = [];
var length;

// gets the kind of page the button belongs to; ex: kind="verbChart"
function getId(btn) {
  id = btn.dataset.chart;
  var article = document.getElementById(id);
  kind = btn.dataset.kind;
}

var correctColor = 'rgba(152, 217, 159, 0.75)';
var incorrectColor = 'rgba(222, 126, 136, 0.75)';
var blankColor = 'rgba(255,255,255,255)';

function submitChart(){
  switch (id) {
    case "threeChart":
      length = 30;
      input = [];
      if (kind == "quiQuaeQuod") {
        quiQuaeQuodEntry = ["qui", "quem", "quo", "cui", "cuius", "qui", "quos", "quibus", "quibus", "quorum", "quae", "quam", "qua", "cui", "cuius", "qua", "quas", "quibus", "quibus", "quarum", "quod", "quod", "qui", "cui", "cuius", "quae", "quae", "quibus", "quibus", "quorum"];
      }

      //make this more verstitile

      for (var i = 0; i < length; i++) {
        var currentID = id + i;
        var inputElement = document.getElementById(currentID);
        input.push(document.getElementById(currentID).value);

        if (kind == "quiQuaeQuod"){
          if (quiQuaeQuodEntry[i] == input[i]) {
            inputElement.style.backgroundColor = correctColor;
          } else {
            inputElement.style.backgroundColor = incorrectColor;
          }
        }
      }
      break;
    case "personalChart":
    length = 50;
    input = [];
    personalEntry = ["is", "eum", "eo", "ei", "eius", "ei/ii", "eos", "eis", "eis", "eorum", "ea", "eam", "ea", "ei", "eius", "eae", "eas", "eis", "eis", "earum", "id", "id", "eo", "ei", "eius", "ea", "ea", "eis", "eis", "earum", "quae", "quae", "quibus", "quibus", "quorum"];

    for (var i = 0; i < length; i++) {
      var currentID = id + i;
      var inputElement = document.getElementById(currentID);
      input.push(document.getElementById(currentID).value);

      if (kind == "personal"){
        if (personal[i] == input[i]) {
          inputElement.style.backgroundColor = correctColor;
        } else {
          inputElement.style.backgroundColor = incorrectColor;
        }
      }
    }
      break;
    case "oneChart":
      length = 10;
      input = [];

      if (kind == "firstDeclension") {
        nounSecondEntry = ["vitae", "victoriae", "philiosophiae", "patriae", "memoriae", "linguae", "Italiae", "feminae", "culpae", "cenae"];
        declensionRemoveTwo();
        nounEndingsFeminine = ["a", "am", "a", "ae", "ae", "ae", "as", "is", "is", "arum"];

      } else if (kind == "secondDeclension"){
        nounFirstEntry = ["vir", "puer", "oculus", "numerus", "morbus", "ludus", "liber", "equus", "deus", "amicus", "verbum", "signum", "forum", "exitium", "donum", "consilium", "caelum", "principium", "ferrum", "basium"];
        nounSecondEntry = ["viri", "pueri", "oculi", "numeri", "morbi", "ludi", "liberi", "equi", "dei", "amici", "verbi", "signi", "fori", "exitii", "doni", "consilii", "cauli", "principii", "ferri", "basii"];

        nounEndingsMasculine = ["irregular", "um", "o", "o", "i", "i", "os", "is", "is", "orum"];
        nounEndingsNeuter = ["um", "um", "o", "o", "i", "a", "a", "is", "is", "orum"];
        declensionRemoveOne();
      } else if (kind == "thirdDeclension"){
        nounFirstEntry = ["timor", "pater", "labor", "homo", "auditor", "voluptas", "uxor", "soror", "aetas", "ratio", "vulnus", "tempus", "scelus", "nomen", "flumen"];
        nounSecondEntry = ["timoris", "patris", "laboris", "hominis", "auditoris", "voluptatis", "uxoris", "sororis", "aetatis", "rationis", "vulneris", "temporis", "sceleris", "nominis", "fluminis"];
        declensionRemoveTwo();

        nounEndingsMasculine = ["irregular", "em", "e", "i", "is", "es", "es", "ibus", "ibus", "um"];
        nounEndingsNeuter = ["irregular", "irregular", "e", "i", "is", "a", "a", "ibus", "ibus", "um"];
      } else if (kind == "fourthDeclension") {
        nounSecondEntry = ["manus", "versus", "sensus", "senatus", "metus", "fructus", "genus", "cornus"];
        declensionRemoveTwo();

        nounEndingsMasculine = ["us", "um", "u", "ui", "us", "us", "us", "ibus", "ibus", "uum"];
        nounEndingsNeuter = ["u", "u", "u", "ui", "us", "ua", "ua", "ibus", "ibus", "uum"];
      } else if (kind == "fifthDeclension"){
        nounSecondEntry = ["spei", "rei", "fidei", "diei"];
        declensionRemoveTwo();

        nounEndingsFeminine = ["es", "em", "e", "ei", "ei", "es", "es", "ebus", "ebus", "erum"];
      }

      for (var i = 0; i < length; i++) {
        var currentID = id + i;
        var inputElement = document.getElementById(currentID);
        input.push(document.getElementById(currentID).value);
        var currentHandID = id + "Hand" + i;

        // checks the typing chart, but only if thats the mode the user has selected
      if (document.getElementById("submit").innerText == "Submit") { //checks if typing mode is on based on if the submit button says "submit" or "show chart"
          if (kind == "firstDeclension") {
            if (nounEntryRoot + nounEndingsFeminine[i] == input[i]) {
              inputElement.style.backgroundColor = correctColor;
            } else {
              inputElement.style.backgroundColor = incorrectColor;
            }
          } else if (kind == "secondDeclension"){
            if (gender[random] == "masculine"){
              if (i == 0){
                if (nounFirstEntry[random] == input[i] || nounFirstEntry[random] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              } else {
                if (nounEntryRoot + nounEndingsMasculine[i] == input[i] || nounEntryRoot + nounEndingsMasculine[i] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              }
            } else if (gender[random] == "neuter") {
              if (i < 2){
                if (nounFirstEntry[random] == input[i] || nounFirstEntry[random] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              } else {
                if (nounEntryRoot + nounEndingsNeuter[i] == input[i] || nounEntryRoot + nounEndingsNeuter[i] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              }
            }
          } else if (kind == "thirdDeclension"){
            if (gender[random] == "masculine" || gender[random] == "feminine"){
              if (i == 0){
                if (nounFirstEntry[random] == input[i] || nounFirstEntry[random] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              } else {
                if (nounEntryRoot + nounEndingsMasculine[i] == input[i] || nounEntryRoot + nounEndingsMasculine[i] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              }
            } else if (gender[random] == "neuter") {
              if (i < 2){
                if (nounFirstEntry[random] == input[i] || nounFirstEntry[random] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              } else {
                if (nounEntryRoot + nounEndingsNeuter[i] == input[i] || nounEntryRoot + nounEndingsNeuter[i] + " " == input[i]) {
                  inputElement.style.backgroundColor = correctColor;
                } else {
                  inputElement.style.backgroundColor = incorrectColor;
                }
              }
            }
          } else if (kind == "fourthDeclension") {
            if (gender[random] == "masculine") {
              if (nounEntryRoot + nounEndingsMasculine[i] == input[i] || nounEntryRoot + nounEndingsMasculine[i] + " " == input[i]) {
                inputElement.style.backgroundColor = correctColor;
              } else {
                inputElement.style.backgroundColor = incorrectColor;
              }
            } else if (gender[random] == "neuter"){
              if (nounEntryRoot + nounEndingsNeuter[i] == input[i] || nounEntryRoot + nounEndingsNeuter[i] + " " == input[i]) {
                inputElement.style.backgroundColor = correctColor;
              } else {
                inputElement.style.backgroundColor = incorrectColor;
              }
            }
          } else if (kind == "fifthDeclension"){
          if (nounEntryRoot + nounEndingsFeminine[i] == input[i]) {
            inputElement.style.backgroundColor = correctColor;
          } else {
            inputElement.style.backgroundColor = incorrectColor;
          }
        }
        }

// --------------

      //fill in the handwriting charts
      var handwritingFillIn = [];
      if (kind == "firstDeclension") {
        document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsFeminine[i];

      } else if (kind == "secondDeclension"){
        if (gender[random] == "masculine"){
          if (i == 0){
            document.getElementById(currentHandID).innerText = nounFirstEntry[random];
          } else {
            document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsMasculine[i];
          }
        } else if (gender[random] == "neuter") {
          if (i < 2){
            document.getElementById(currentHandID).innerText = nounFirstEntry[random];
          } else {
            document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsNeuter[i];
          }
        }
      } else if (kind == "thirdDeclension"){
        if (gender[random] == "masculine" || gender[random] == "feminine"){
          if (i == 0) {
            document.getElementById(currentHandID).innerText = nounFirstEntry[random];
          } else {
            document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsMasculine[i];
          }
        } else if (gender[random] == "neuter") {
          if (i < 2){
            document.getElementById(currentHandID).innerText = nounFirstEntry[random];
          } else {
            document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsNeuter[i] == input[i];
          }
        }
      } else if (kind == "fourthDeclension") {
        if (gender[random] == "masculine") {
          document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsMasculine[i];
        } else if (gender[random] == "neuter"){
          document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsNeuter[i];
        }
      } else if (kind == "fifthDeclension"){
        document.getElementById(currentHandID).innerText = nounEntryRoot + nounEndingsFeminine[i];
    }

      }
      break;
    case "verbChart":
      length = 18;
      input = [];

      if (kind == "firststandsecondndverbs"){
        firstEntry = ["puto", "pronuntio", "probo", "paro", "nuntio", "nego", "neco", "navigo", "narro", "muto", "libero", "laudo", "laboro", "invito", "exspecto", "erro", "educo", "desidero", "demonstro", "delecto", "creo", "conservo", "cogito", "ceno", "careo", "appello", "amo", "video", "valeo", "teneo", "rideo", "remaneo", "prohibeo", "moveo", "moneo", "misceo", "maneo", "iubeo", "habeo", "doceo", "deleo", "debeo", "contineo", "careo"];
        secondEntry = ["putare", "pronuntiare", "probare", "parare", "nuntiare", "negare", "necare", "navigare", "narrare", "mutare", "liberare", "laudare", "laborare", "invitare", "exscpectare", "errare", "educare", "desiderare", "demonstrare", "delectare", "creare", "conservare", "cogitare", "cenare", "carare", "appellare", "amare", "videre", "valere", "tenere", "ridere", "remanere", "prohibere", "movere", "monere", "miscere", "manere", "iubere", "habere", "docere", "delere", "debere", "continere", "carere"];
          verbSecondEntryRoot();
        thirdEntry = ["putavi", "pronuntiavi", "probavi", "paravi", "nuntiavi", "negavi", "necavi", "navigavi", "narravi", "mutavi", "liberavi", "laudavi", "laboravi", "invitavi", "exspectavi", "erravi", "educavi", "desideravi", "demonstravi", "delectavi", "creavi", "conservavi", "cogitavi", "cenavi", "carui", "appellavi", "amavi", "vidi", "valui", "tenui", "risi", "remansi", "prohibui", "movi", "monui", "miscui", "mansi", "iussi", "habui", "docui", "delevi", "debui", "continui", "carui"];
          verbThirdEntryRoot();
        fourthEntry = ["putatum", "pronuntiatum", "probatum", "paratum", "nuntiatum", "negatum", "necatum", "nevigatum", "narratum", "mutatum", "liberatum", "laudatum", "laboratum", "invitatum", "exspectatum", "erratum", "educatum", "desideratum", "demonstratum", "delectatum", "creatum", "conservatum", "cogitatum", "cenatum", "cariturum", "appellatum", "amatum", "visum", "valiturum", "tentum", "risum", "remansum", "prohibitum", "motum", "monitum", "mixtum", "mansum", "iussum", "habitum", "doctum", "deletum", "debtium", "contentum", "cariturum"];
          verbFourthEntryRoot();

        endingsActImps = ["irregular", "s", "t", "mus", "tis", "nt", "bam", "bas", "bat", "bamus", "batis", "bant", "bo", "bis", "bit", "bimus", "bitis", "bunt"];
        endingsActPerf = ["irregular", "isti", "it", "imus", "istis", "erunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erint"];
        endingsPassImp = ["irregular", "ris", "tur", "mur", "mini", "ntur", "bar", "baris", "batur", "bamur", "bamini", "bantur", "bor", "beris", "bitur", "bimur", "bimini", "buntur"];
        endingsPassPerf = ["sum", "es", "est", "sumus", "estis", "sunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erunt"];
      } else if (kind == "thirdConjugationVerbs"){
        firstEntry = ["vivo", "vinco", "traho", "tollo", "tango", "scribo", "reverto", "relinquo", "rego", "quaero", "premo", "pono", "peto", "pello", "ostendo", "opprimo", "neglego", "mitto", "lego", "iungo", "intellego", "gero", "fluo", "expello", "duco", "discedo", "diligo", "dico", "defendo", "curro", "credo", "committo", "cerno", "cado", "averto", "amitto", "alo", "ago", "admitto"];
        secondEntry = ["vivere", "vincere", "trahere", "tollere", "tangere", "scribere", "revertere", "relinquere", "regere", "quaerere", "premere", "ponere", "petere", "pellere", "ostendere", "opprimere", "neglegere", "mittere", "legere", "iungere", "intellegere", "nerere", "fluere", "expellere", "ducere", "discedere", "diligere", "dicere", "defendere", "currere", "credere", "committere", "cernere", "cadere", "avertere", "amittere", "alere", "agere", "admittere"];
          thirdAndFourthVerbSecondEntryRoot();
        thirdEntry = ["vixi", "vici", "traxi", "sustuli", "tetigi", "scripsi", "reverti", "reliqui", "rexi", "quaesivi", "pressi", "posui", "petivi", "pepuli", "ostendi", "oppressi", "neglexi", "misi", "legi", "iunxi", "intellevi", "gessi", "fluxi", "expuli", "duxi", "discessi", "dilexi", "dixi", "defendi", "cucurri", "credidi", "commisi", "crevi", "cedidi", "averti", "amisi", "alui", "egi", "admisi"];
          verbThirdEntryRoot();
        fourthEntry = ["victum", "victum", "tractum", "sublatum", "tactum", "scriptum", "reversum", "reictum", "rectum", "quaesitum", "pressum", "positum", "petitum", "pulsum", "ostentum", "oppressum", "neglectum", "missum", "lectum", "iunctum", "intellectum", "gestum", "fluxum", "expulsum", "ductum", "discessum", "dilectum", "dictum", "defensum", "cursum", "creditum", "commissum", "cretum", "casurum", "aversum", "amissum", "altum", "actum", "admissum"];
          verbFourthEntryRoot();

        endingsActImps = ["irregular", "is", "it", "imus", "itis", "unt", "ebam", "ebas", "ebat", "ebamus", "ebatis", "ebant", "am", "es", "et", "emus", "etis", "ent"];
        endingsActPerf = ["irregular", "isti", "it", "imus", "istis", "erunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erint"];
        endingsPassImp = ["irregular", "eris", "itur", "imur", "imini", "untur", "ebar", "ebaris", "ebatur", "ebamur", "ebamini", "ebantur", "ar", "eris", "etur", "emur", "emini", "entur"];
        endingsPassPerf = ["sum", "es", "est", "sumus", "estis", "sunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erunt"];
      } else if (kind == "fourthAndThirdIoConjugationVerbs") {
        firstEntry = ["suscipio", "recipio", "rapio", "patefacio", "incipio", "iacio", "fugio", "facio", "excipio", "eripio", "cupio", "capio", "accipio", "venio", "sentio", "scio", "nescio", "invenio", "audio"];
        secondEntry = ["suscipere", "recipere", "rapere", "patefacere", "incipere", "iacere", "fugere", "facere", "excipere", "eripere", "cupere", "capere", "accipere", "venire", "sentire", "scire", "nescire", "invenire", "audire"];
          fourthAndThirdIoVerbSecondEntryRoot ();
        thirdEntry = ["suscepi", "recepi", "rapui", "patefeci", "incepi", "ieci", "fugi", "feci", "excepi", "eripui", "cupivi", "cepi", "accepi", "veni", "sensi", "scivi", "nescivi", "inveni", "audivi"];
          verbThirdEntryRoot();
        fourthEntry = ["susceptum", "receptum", "raptum", "patefactum", "inceptum", "iactum", "fugiturum", "factum", "exceptum", "ereptum", "cupitum", "capitum", "acceptum", "ventum", "sensum", "scitum", "nescitum", "inventum", "auditum"];
          verbFourthEntryRoot();

        endingsActImps = ["irregular", "is", "it", "imus", "itis", "iunt", "iebam", "iebas", "iebat", "iebamus", "iebatis", "iebant", "iam", "ies", "iet", "iemus", "ietis", "ient"];
        endingsActPerf = ["irregular", "isti", "it", "imus", "istis", "erunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erint"];
        endingsPassImp = ["irregular", "ieris", "itur", "imur", "imini", "iuntur", "iebar", "iebaris", "iebatur", "iebamur", "iebamini", "iebantur", "iar", "ieris", "ietur", "iemur", "iemini", "ientur"];
        endingsPassPerf = ["sum", "es", "est", "sumus", "estis", "sunt", "eram", "eras", "erat", "eramus", "eratis", "erant", "ero", "eris", "erit", "erimus", "eritis", "erunt"];
      }

       for (var i = 0; i < 4; i++) {
         var aspectAndVoice = ["actImp", "actPerf", "passImp", "passPerf"];
         var currentAspectAndVoice = aspectAndVoice[i];

         for (var h = 0; h < length; h++) {
            //make a list of the user's answers

            var currentID = id + currentAspectAndVoice + h;
            var inputElement = document.getElementById(currentID);
            input.push(document.getElementById(currentID).value);
            var currentHandID = id + currentAspectAndVoice + "Hand" + h;

            // checks the typing chart, but only if thats the mode the user has selected
            if (document.getElementById("submit").innerText == "Submit") { //checks if typing mode is on based on if the submit button says "submit" or "show chart"
              if (i == 0){ // creating answer list for first chart, the active imperfects
                 if (h == 0){
                   if (firstEntry[random] == input[h] || firstEntry[random] + " " == input[h]){
                     inputElement.style.backgroundColor = correctColor;

                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                   }
                 } else {
                   if (secondEntryRoot + endingsActImps[h] == input[h] || secondEntryRoot + endingsActImps[h] + " " == input[h]) {
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
                   if (thirdEntryRoot + endingsActPerf[h] == input[h + 18] || thirdEntryRoot + endingsActPerf[h] + " " == input[h + 18]){
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
                   if (secondEntryRoot + endingsPassImp[h] == input[h + 36] || secondEntryRoot + endingsPassImp[h] + " " == input[h + 36]){
                     inputElement.style.backgroundColor = correctColor;
                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                   }
                 }
               } else {
                 if (h < 3) {
                   if (fourthEntryRoot + "us " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "um " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "us " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "um " + endingsPassPerf[h] + " " == input[h + 54]) {
                     inputElement.style.backgroundColor = correctColor;
                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                   }
                 } else if (h < 6) {
                   if (fourthEntryRoot + "i " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "ae " + endingsPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "a " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "i " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "ae " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] + " " == input[h + 54]) {
                     inputElement.style.backgroundColor = correctColor;
                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                 }
                 } else if (h < 9) {
                   if (fourthEntryRoot + "us " + endingsPassPerf[h] == input [h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "um " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "us " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "um " + endingsPassPerf[h] + " " == input[h + 54]) {
                     inputElement.style.backgroundColor = correctColor;
                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                   }
                 } else if (h < 12) {
                   if (fourthEntryRoot + "i " + endingsPassPerf[h] == input [h + 54] || fourthEntryRoot + "ae " + endingsPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "a " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "i " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "ae " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] + " " == input[h + 54]) {
                     inputElement.style.backgroundColor = correctColor;
                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                 }
                 } else if (h < 15) {
                   if (fourthEntryRoot + "us " + endingsPassPerf[h] == input [h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "um " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "us " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "um " + endingsPassPerf[h] + " " == input[h + 54]) {
                     inputElement.style.backgroundColor = correctColor;
                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                   }
                 } else if (h < 18) {
                   if (fourthEntryRoot + "i " + endingsPassPerf[h] == input [h + 54] || fourthEntryRoot + "ae " + endingsPassPerf[h] == input[h + 54] ||  fourthEntryRoot + "a " + endingsPassPerf[h] == input[h + 54] || fourthEntryRoot + "i " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "ae " + endingsPassPerf[h] + " " == input[h + 54] || fourthEntryRoot + "a " + endingsPassPerf[h] + " " == input[h + 54]) {
                     inputElement.style.backgroundColor = correctColor;
                   } else {
                     inputElement.style.backgroundColor = incorrectColor;
                   }
                 }
               }
            }

             // fill in the handwriting chart
             var handwritingFillIn = [];
             if (i == 0){
                if (h == 0){
                  document.getElementById(currentHandID).innerText = firstEntry[random];
                } else {
                  document.getElementById(currentHandID).innerText = secondEntryRoot + endingsActImps[h];
                }
              } else if (i == 1) {
                  if (h == 0) {
                  document.getElementById(currentHandID).innerText = thirdEntryRandom;
                  } else {
                  document.getElementById(currentHandID).innerText = thirdEntryRoot + endingsActPerf[h];
                  }
              } else if (i == 2) {
                if (h == 0) {
                  document.getElementById(currentHandID).innerText = firstEntry[random] + "r";
                } else if (h < 18) {
                  document.getElementById(currentHandID).innerText = secondEntryRoot + endingsPassImp[h];
                }
              } else {
                  if (h < 3) {
                    document.getElementById(currentHandID).innerText = fourthEntryRoot + "us, a, um " + endingsPassPerf[h];
                  } else if (h < 6) {
                    document.getElementById(currentHandID).innerText = fourthEntryRoot + "i, ae, a " + endingsPassPerf[h];
                  } else if (h < 9) {
                    document.getElementById(currentHandID).innerText = fourthEntryRoot + "us, a, um " + endingsPassPerf[h];
                  } else if (h < 12) {
                    document.getElementById(currentHandID).innerText = fourthEntryRoot + "i, ae, a " + endingsPassPerf[h];
                  } else if (h < 15) {
                    document.getElementById(currentHandID).innerText = fourthEntryRoot + "us, a, um " + endingsPassPerf[h];
                  } else if (h < 18) {
                    document.getElementById(currentHandID).innerText = fourthEntryRoot + "i, ae, a " + endingsPassPerf[h];
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

// ---------------- refresh -----------------
function refreshChart(){
  switch (id) {
    case "threeChart":
      length = 30;
      break;
    case "oneChart":
      length = 10;
      for (var i = 0; i < length; i++) {
        var currentID = id + i;
        var currentHandID = id + "Hand" + i;
        inputElement = document.getElementById(currentID);
        inputElement.style.backgroundColor = blankColor;
        document.getElementById(currentHandID).innerText = "";
        document.getElementById(currentID).value = "";
      }

      if (kind == "firstDeclension"){
        nounEntry = ["vita, vitae, f.", "victoria, victoriae, f.", "philosophia, philosophiae, f.", "patria, patriae, f.", "memoria, memoriae, f.", "lingua, linguae, f.", "Italia, Italiae, f.", "femina, feminae, f.", "culpa, culpae, f.", "cena, cenae, f."];
      } else if (kind == "secondDeclension"){
        nounEntry = ["vir, viri, m.", "puer, pueri, m.", "oculus, oculi, m.", "numerus, numeri, m.", "morbus, morbi, m.", "ludus, ludi, m.", "liber, liberi, m.", "equus, equi, m.", "deus, dei, m.", "amicus, amici, m.", "verbum, verbi, n.", "signum, signi, n.", "forum, fori, n.", "exitium, exitii, n.", "donum, doni, n.", "consilium, consilii, n.", "caelum, caeli, n.", "principium, principii, n.", "ferrum, ferri, n.", "basium, basii, n."];
        gender = ["masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "neuter", "neuter", "neuter", "neuter", "neuter", "neuter", "neuter", "neuter", "neuter", "neuter"];
      } else if (kind == "thirdDeclension") {
        nounEntry = ["timor, timoris, m.", "pater, patris, m.", "labor, laboris, m.", "homo, hominis, m.", "auditor, auditoris, m.", "voluptas, voluptatis, f.", "uxor, uxoris, f.", "soror, sororis, f.", "aetas, aetatis, f.", "ratio, rationis, f.", "vulnus, vulneris, n.", "tempus, temporis, n.", "scelus, sceleris, n.", "nomen, nominis, n.", "flumen, fluminis, n."];
        gender = ["masculine", "masculine", "masculine", "masculine", "masculine", "feminine", "feminine", "feminine", "feminine", "feminine", "neuter", "neuter", "neuter", "neuter", "neuter"];
      } else if (kind == "fourthDeclension") {
        nounEntry = ["manus, manus, f.", "versus, versus, m.", "sensus, sensus, m.", "senatus, senatus, m.", "metus, metus, m.", "fructus, fructus, m.", "genu, genus, n.", "cornu, cornus, n."];
        gender = ["masculine", "masculine", "masculine", "masculine", "masculine", "masculine", "neuter", "neuter"];
      } else if (kind == "fifthDeclension") {
        nounEntry = ["spes, spei, f.", "res, rei, f.", "fides, fidei, f.", "dies, diei, m."];
      }
      random = Math.floor(Math.random() * nounEntry.length);
      document.getElementById("instructions").innerHTML = "Decline: " + nounEntry[random];
      inputElement = document.getElementById(currentID);
      inputElement.style.backgroundColor = blankColor;
      document.getElementById(currentHandID).innerText = "";
      document.getElementById(currentID).value = "";
      break;
//verb ---------
    case "verbChart":
      length = 18;
      for (var i = 0; i < 4; i++) {
        var aspectAndVoice = ["actImp", "actPerf", "passImp", "passPerf"];
        var currentAspectAndVoice = aspectAndVoice[i];
        for (var h = 0; h < length; h++){
          var currentID = id + currentAspectAndVoice + h;
          inputElement = document.getElementById(currentID);
          inputElement.style.backgroundColor = blankColor;
        }
      }

      if (kind == "firststandsecondndverbs") {
        entry = ["puto, putare, putavi, putatum", "pronuntio, pronuntiare, pronuntiavi, pronuntiatum", "probo, probare, probavi, probatum", "paro, parare, paravi, paratum", "nuntio, nuntiare, nuntiavi, nuntiatum", "nego, negare, negavi, negatum", "neco, necare, necavi, necatum", "navigo, navigare, navigavi, navigatum", "narro, narrare, narravi, narratum", "muto, mutare, mutavi, mutatum", "libero, liberare, liberavi, liberatum", "laudo, laudare, laudavi, laudatum", "laboro, laborare, laboravi, laboratum", "invito, invitare, invitavi, invitatum", "exspecto, exscpectare, exspectavi, exspectatum", "erro, errare, erravi, erratum", "educo, educare, educavi, educatum", "desidero, desiderare, desideravi, desideratum", "demonstro, demonstrare, demonstravi, demonstratum", "delecto, delectare, delectavi, delectatum", "creo, creare, creavi, creatum", "conservo, conservare, conservavi, conservatum", "cogito, cogitare, cogitavi, cogitatum", "ceno, cenare, cenavi, cenatum", "careo, carere, carui, cariturum", "appello, appellare, appellavi, appellatum", "amo, amare, amavi, amatum", "video, videre, vidi, visum", "valeo, valere, valui, valiturum", "teneo, tenere, tenui, tentum", "rideo, ridere, risi, risum", "remaneo, remanere, remansi, remansum", "prohibeo, prohibere, prohibui, prohibitum", "moveo, movere, movi, motum", "moneo, monere, monui, monitum", "misceo, miscere, miscui, mixtum", "maneo, manere, mansi, mansum", "iubeo, iubere, iussi, iussum", "habeo, habere, habui, habitum", "doceo, docere, docui, doctum", "deleo, delere, delevi, deletum", "debeo, debere, debui, debitum", "contineo, continere, continui, contentum", "careo, carere, carui, cariturum"];
      } else if (kind == "thirdConjugationVerbs") {
        entry = ["vivo, vivere, vixi, victum", "vinco, vincere, vici, victum", "traho, trahere, traxi, tractum", "tollo, tollere, sustuli, sublatum", "tango, tangere, tetigi, tactum", "scribo, scribere, scripsi, scriptum", "reverto, revertere, reverti, reversum", "relinquo, relinquere, reliqui, relictum", "rego, regere, rexi, rectum", "quaero, quaerere, quaesivi, quaesitum", "premo, premere, pressi, pressum", "pono, ponere, posui, positum", "peto, petere, petivi, petitum", "pello, pellere, pepuli, pulsum", "ostendo, ostendere, ostendi, ostentum", "opprimo, opprimere, oppressi, oppressum", "neglego, neglegere, neglexi, neglectum", "mitto, mittere, misi, missum", "lego, legere, legi, lectum", "iungo, iungere, iunxi, iunctum", "intellego, intellegere, intellevi, intellectum", "gero, gerere, gessi, gestum", "fluo, fluere, fluxi, fluxum", "expello, expellere, expuli, expulsum", "duco, ducere, duxi, ductum", "discedo, discedere, discessi, discessum", "diligo, diligere, dilexi, dilectum", "dico, dicere, dixi, dictum", "defendo, defendere, defendi, defensum", "curro, currere, cucurri, cursum", "credo, credere, credidi, creditum", "committo, committere, commisi, commissum", "cerno, cernere, crevi, cretum", "cado, cadere, cecidi, casurum", "averto, avertere, averti, aversum", "amitto, amittere, amisi, amissum", "alo, alere, alui, altum", "ago, agere, egi, actum", "admitto, admittere, admisi, admissum"];
      } else if (kind == "fourthAndThirdIoConjugationVerbs"){
        entry = ["suscipio, suscipere, suscepi, susceptum", "recipio, recipere, recepi, receptum", "rapio, rapere, rapui, raptum", "patefacio, patefacere, patefeci, patefactum", "incipio, incipere, incepi, inceptum", "iacio, iacere, ieci, iactum", "fugio, fugere, fugi, fugiturum", "facio, facere, feci, factum", "excipio, excipere, excepi, exceptum", "eripio, eripere, eripui, ereptum", "cupio, cupere, cupivi, cupitum", "capio, capere, cepi, captum", "accipio, accipere, accepi, acceptum", "venio, venire, veni, ventum", "sentio, sentire, sensi, sensum", "scio, scire, scivi, scitum", "nescio, nescire, nescivi, nescitum", "invenio, invenire, inveni, inventum", "audio, audire, audivi, auditum"];
      }

      random = Math.floor(Math.random() * entry.length);
      document.getElementById("instructions").innerHTML = "Conjugate: " + entry[random];
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

// noun functions

function declensionRemoveOne(){
  nounEntryRandom = nounSecondEntry[random];
  nounEntryRootLength = nounEntryRandom.length - 1;
  nounEntryRoot = nounEntryRandom.slice(0, nounEntryRootLength);
}

function declensionRemoveTwo(){
  nounEntryRandom = nounSecondEntry[random];
  nounEntryRootLength = nounEntryRandom.length - 2;
  nounEntryRoot = nounEntryRandom.slice(0, nounEntryRootLength);
}

// verb functions

function verbSecondEntryRoot(){
  secondEntryRandom = secondEntry[random];
  secondEntryRootLength = secondEntryRandom.length - 2;
  secondEntryRoot = secondEntryRandom.slice(0, secondEntryRootLength);
}

function thirdAndFourthVerbSecondEntryRoot(){
  secondEntryRandom = secondEntry[random];
  secondEntryRootLength = secondEntryRandom.length - 3;
  secondEntryRoot = secondEntryRandom.slice(0, secondEntryRootLength);
}

function fourthAndThirdIoVerbSecondEntryRoot(){
  secondEntryRandom = secondEntry[random];
  secondEntryRootLength = secondEntryRandom.length - 3;
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
