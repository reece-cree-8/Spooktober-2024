let jokes = [
{ question: "What's a vampire's favorite fruit?", answer: "necktarine nectarine", answerMessage: 'A necktarine', img: 'trick-or-treaters/1.png' },
{ question: "Why didn't the skeleton go to the disco?", answer: "body nobody no-body", answerMessage: 'He had no body to go with', img: 'trick-or-treaters/2.png' },
{ question: "Why don't skeletons ever go trick-or-treating?", answer: "body nobody no-body", answerMessage: 'They have no body to go with', img: 'trick-or-treaters/3.png' },
{ question: "What is a witch's favorite subject in school?", answer: "spelling", answerMessage: 'spelling',img: 'trick-or-treaters/4.png' },
{ question: "Why don't mummies take vacations?", answer: "unwind unwrap", answerMessage: 'They\'re afraid they might unwind', img: 'trick-or-treaters/5.png' },
{ question: "What kind of music do mummies listen to?", answer: "wrap rap", answerMessage: 'They like wrap music',img: 'trick-or-treaters/6.png' },
{ question: "How do you make a skeleton laugh?", answer: "funny funnybone funny-bone", answerMessage: 'You tickle his funny bone', img: 'trick-or-treaters/7.png' },
{ question: "What do you get when you cross a vampire with a snowman?", answer: "frostbite frost-bite", answerMessage: 'Frostbite', img: 'trick-or-treaters/8.png' },
{ question: "Why are graveyards noisy?", answer: "coffin coughing coughin coughin'", answerMessage: 'Because of all the coffin',img: 'trick-or-treaters/9.png' },
{ question: "What room do ghosts avoid?", answer: "living", answerMessage: 'The living room',img: 'trick-or-treaters/10.png' },
{ question: "What kind of key opens a haunted house?", answer: "spoo-key spooky spookey", answerMessage: 'A spoo-key', img: 'trick-or-treaters/11.png' },
{ question: "What's a ghost's favorite exercise?", answer: "deadlift deadlifts", answerMessage: 'Deadlifts',img: 'trick-or-treaters/12.png' },
{ question: "What's the worst place to hide in a hospital?", answer: "icu", answerMessage: 'The ICU', img: 'trick-or-treaters/13.png'}
];

let gameOver = false;
let total = jokes.length;
let correct = 0;
let score = 0;
let isCorrect = false;
let doorClosed = true;

closeDoor();

function checkAnswer() {
if(!gameOver && !doorClosed){
  let userAnswer = document.getElementById('answer-input').value.trim();

  //takes in user input
  userAnswer = userAnswer.toLowerCase();
  let split = userAnswer.split(' ');
  let ansSplit = jokes[currentJoke].answer.split(' ');
  console.log(split);
  console.log(ansSplit);


  //looks for answer keyword within user input
  isCorrect = false;
  for(let i = 0; i < split.length; i++){ //for each in user answer:
    for(let j = 0; j < ansSplit.length; j++){ // for each in expected answer;
      if(split[i] === ansSplit[j]){
        console.log(`${split[i]} is equal to ${split[j]} (supposedly)`);
        isCorrect = true;
      }
    }
  }
  
  //tells user if answer was correct 
  if (isCorrect === true) {
    document.getElementById('result').innerText = 'Correct!';
    setTimeout(function() {
      document.getElementById('result').innerText = '';
    }, 3000);
    correct++;
  } else {
    document.getElementById('result').innerText = `Wrong! The correct answer was: ${jokes[currentJoke].answerMessage}`;
    setTimeout(function() {
      document.getElementById('result').innerText = '';
    }, 3000);
  }


}

//closes door or goes to next joke - alternating
if(doorClosed){
  nextJoke();
}
else{
  closeDoor();
}
}

function closeDoor(){
  document.getElementById('currentJoke').src = 'trick-or-treaters/0.png';
  document.getElementById('submit').innerText = 'OPEN DOOR';
  document.getElementById("answer-input").value = "--------->";

  doorClosed = true;
}
 

//remove last joke and select next one at random 
function nextJoke() {
  jokes.splice(currentJoke, 1);
  if(jokes.length === 0){
    endGame();
  }
  else{
    currentJoke = Math.floor(Math.random() * jokes.length);
    document.getElementById("currentJoke").src = jokes[currentJoke].img;
    document.getElementById("answer-input").value = "";
    document.getElementById('submit').innerText = 'Submit';
  }
  
  doorClosed = false;
}


//shows end game screen and results
function endGame(){
  gameOver = true;
  document.getElementById('currentJoke').src = 'trick-or-treaters/0.png';
  document.getElementById('result').innerText = `Number guessed correctly: ${correct} \n Number guessed Incorrectly: ${total-correct} \n Accuracy: ${((correct/total) * 100).toFixed(2)}`;
  document.getElementById("answer-input").value = "Game Over";
}