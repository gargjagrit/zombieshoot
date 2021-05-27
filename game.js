//variables and constants
const gamebody = document.getElementById("gamebody");
const $lives = document.getElementById("lives");
const seconds = document.getElementById("timer").textContent;
var zombieId = 0;
const img=[
  "zombie-1.png",
  "zombie-2.png",
  "zombie-3.png",
  "zombie-4.png",
  "zombie-5.png",
  "zombie-6.png",
]



// shotgun sound
const expAudio=new
Audio("https://freespecialeffects.co.uk/soundfx/weapons/shotgun_3.wav%22");
expAudio.volume=6.2;
gameBody.onclick=
  expAudio.pause0;
  expAudio.currentTime=o;
  expAudio.play0;





// background sound
const backgroundSound=new
Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/250758/soundtrack.mp3%22);")
backgroundSound.play();
backgroundSound.loop=true;

//lives
const maxlives=4;
var lives=4;

//Function to make a zombie
function makeZombie(){
  randomImage=img[getRandomInt(0,img.length)];
  gameBody.innerHTML+=<img src="./assets/${randomImage}" class="zombie-image" id="zombie$"

// Function to check if the player missed a zombie

// Function to destroy a zombie when it is shot or missed

//End Game

//start game by calling the first zombie

//helper function to get random integer

