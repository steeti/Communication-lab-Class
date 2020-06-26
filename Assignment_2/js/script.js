let nextPossible = false; // bool for when user should & should not be able to click next (example: when choosing the options)
let backPossible = false; // bool for when user should & should not be able to click back (example: when in the first scene)
let language = "en" // can be "ar","en", or "es", this is used to load different images using the assets/{language}/{image}  and also for loading the different about information
let boxState = "boxFullyHide"; //initial state of box (the next and restart controls + about section) is fully hidden
$( window ).resize(function() { // on resize of the window animate the box back to wherever its supposed to be
  console.log(boxState)
  switch(boxState) {
    case "boxFullyHide":
      boxFullyHide(0.5);
      break;
    case "boxControlsOnly":
      boxControlsOnly(0.5);
      break;
    case "box":
      box(0.5);
      break;
    default:
      boxFullyHide(0.5);
      break;
  }
});

setTimeout(() => { //initial animation of fade in of the logo + hiding of the "Loading.. " text
$(".loader").hide();
gsap.to(".titleSvg", {duration: 3, opacity:1});
}, 5000);

setTimeout(() => { // animation move and resize the logo to the very left top
gsap.to(".titleSvg", {duration: 1, width: "15%", left: "0px", top: "0px", opacity:1});
}, 8000);

setTimeout(() => { // entering animation of the language "droplet" buttons
gsap.to(".language1", {duration: 1, top: "50%", opacity:1});
gsap.to(".language2", {duration: 2, top: "50%", opacity:1});
gsap.to(".language3", {duration: 3, top: "50%", opacity:1});
}, 9000);

function getLanguageDropsBackToFirstState() {  // animation of the language "droplet" buttons to go to initial state
  gsap.to(".language1", {duration: 2, top: "48%", opacity:1, display: "block"});
  gsap.to(".language2", {duration: 2, top: "48%", opacity:1, display: "block"});
  gsap.to(".language3", {duration: 2, top: "48%", opacity:1, display: "block"});
}

function hideLanguageDrops() { // leaving animation of the language "droplet" buttons
  setTimeout(() => {
    gsap.to(".language1", {duration: 1,  opacity:0, display: "none"});
    gsap.to(".language2", {duration: 1, opacity:0, display: "none"});
    gsap.to(".language3", {duration: 1, opacity:0, display: "none"});
    }, 500);
}

function boxFullyHide(s = 2) { // leaving animation of the controls box
  boxState = "boxFullyHide";
  let h = window.innerHeight - 50;
  gsap.to(".boxContainer", {duration: s, display: "none", opacity:0, top:h, width:"50%", left:"25%"});
}

function boxControlsOnly(s=2) { // animation of the control box to show only controls
  boxState = "boxControlsOnly"
  let h = window.innerHeight - 50;
  gsap.to(".boxContainer", {duration: s, display: "block", opacity:1, top:h, width:"10%", left:"45%"});
}

function setupControlsContainer() {
  let en_es = `
  <div class="nextButton buttonRight" onclick="nextPath();"><img src="assets/next.png" /></div>
  <div class="restartButton buttonLeft" onclick="restart();"><img src="assets/restart.png" /></div>`;
  let ar = `
  <div class="nextButton buttonLeft" onclick="nextPath();"><img src="assets/back.png" /></div>
  <div class="restartButton buttonRight" onclick="restart();"><img src="assets/restart.png" /></div>`;
  let controls = (language=="ar") ? ar : en_es;
  $(".controlsContainer").html(controls)
}
