

// document.querySelector('.set').addEventListener('click', function() {
// console.log("this");

// });



// let audio = new Audio('sounds/tom-1.mp3');
// audio.play();



const numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  this.style.color = "black";
});
}