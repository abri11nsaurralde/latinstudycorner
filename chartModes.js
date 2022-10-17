function handwritingToggle(){
  // alert("hello");
  //hide the typing chart
  var x = document.getElementById("chart");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  //show buttons
  x = document.getElementById("handwritingChart");
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  //  change "handwriting mode/typing mode" button
  x = document.getElementById("handwritingToggleButton");
   if (x.innerText == "Handwriting Mode") {
     x.innerText = "Typing Mode";
   } else {
     x.innerText = "Handwriting Mode";
   }

 x = document.getElementById("submit");
  if (x.innerText == "Submit") {
    x.innerText = "Show Chart";
  } else {
    x.innerText = "Submit";
  }

}
