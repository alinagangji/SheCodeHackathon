function evaluateQuiz() {
  var score = 0;
  var correct1 = document.getElementById('correct1').checked;
  var correct2 = document.getElementById('correct2').checked;
  var correct3 = document.getElementById('correct3').checked;
  var correct4 = document.getElementById('correct4').checked;
  var correct5 = document.getElementById('correct5').checked;

  if (correct1 == true ) {
    score += 1;
  }
  else if (correct2 == true ) {
    score += 1;
  }  
  else if  (correct3 == true ) {
    score += 1;
  }  
  else if  (correct4 == true ) {
    score += 1;
  }
  else if  (correct5 == true ) {
    score += 1;
  }

  if (score == 0){
      alert("Try again! You did not answer any questions correctly!");
  }
  if (score == 1) {
      alert("Good try!! You received a " + score + "/5!");
  }
  if (score == 2) {
      alert("Keep learning!! You received a " + score + "/5!");
  }
  if (score == 3) {
      alert("More than halfway there!! You received a " + score + "/5!");
  }
  if (score == 4) {
      alert("Almost there!! You received a " + score + "/5!");
  }
  if (score == 5) {
      alert("You are a rock star!! You received a " + score + "/5!");
  }
   
}
