let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score") 

let homePoints = 0;
let guestPoints = 0;

function homeOnePoint(){
  homePoints+= 1
  homeScore.innerText =  homePoints
}

function homeTwoPoint(){
  homePoints+= 2
  homeScore.innerText =  homePoints
}

function homeThreePoint(){
  homePoints+= 3
  homeScore.innerText =  homePoints
}


function guestOnePoint(){
  guestPoints+= 1
  guestScore.innerText =  guestPoints
}

function guestTwoPoint(){
  guestPoints+= 2
  guestScore.innerText =  guestPoints
}

function guestThreePoint(){
  guestPoints+= 3
  guestScore.innerText =  guestPoints
}

function newGame(){
  homePoints = 0
  guestPoints = 0
  homeScore.innerText = homePoints
  guestScore.innerText = guestPoints
}

