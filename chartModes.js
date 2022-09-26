function handwritingToggle(){
  // alert("hello");
  //hide the chart

  var x = document.getElementById("chart");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  //show buttons
  if (document.getElementById("handwritingChart").style.display == "none") {
    document.getElementById("handwritingChart").style.display = "block";
  } else {
    document.getElementById("handwritingChart").style.display = "none";
  }

//  show buttons
 if (document.getElementById("handwritingToggleButton").innerText == "Handwriting Mode") {
   document.getElementById("handwritingToggleButton").innerText = "Typing Mode";
 } else {
   document.getElementById("handwritingToggleButton").innerText = "Handwriting Mode";
 }


}
