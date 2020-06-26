window.onblur = function() { document.title = "Are you looking away?" };
window.onfocus = function() { document.title = "A Story of Refuge" };

// press spacebar to toggle play from https://stackoverflow.com/questions/24386354
document.addEventListener("keypress", function(e) {if(e.keyCode == 32){togglePlay();}})

let background = document.getElementsByClassName('content')[0];
let elem = document.getElementsByClassName("colorbox")[0];
let a = document.getElementsByTagName("audio")[0];
let pt = document.getElementById("alert");

// When paused, show message
a.addEventListener("pause", function(){
  if (a.currentTime!=0) {pt.innerText = "A disaster does not pause for refuges.";}
});

// When unpaused, remove message
a.addEventListener("play", function(){
  if (a.volume!=0 && !a.muted) {pt.innerText="";}
  else {pt.innerText="No disaster should be kept in silence.";}
});

// When volume is changed, check volume and decide to show or remove message
a.addEventListener("volumechange", function(){
  if (a.volume==0 || a.muted) {pt.innerText="No disaster should be kept in silence.";}
  else if (!a.paused||a.currentTime==0) {pt.innerText="";}
  else {pt.innerText = "A disaster does not pause for refuges.";}
});

a.addEventListener("ended", function(){restartPlay();})
a.addEventListener("timeupdate", function() {
  var s= parseInt(a.currentTime%60);
  var m = parseInt((a.currentTime / 60) % 60);
  document.getElementById("progress").innerHTML = m + ':' + s + '/3:19';
  cameleon(a.currentTime)
 }, true);

let bgc = background.style.backgroundColor;
let emc =  elem.style.backgroundColor;


// rgba function from https://stackoverflow.com/questions/8177964
function cameleon(ct) {
  // console.log(ct)
  if (0<ct&&ct<17) {colorFill(255,255,102);}
  else if (18<ct&&ct<36) {colorFill(255, 153, 51);} //yellow
  else if (36<ct&&ct<43.5) {colorFill(255, 140, 26);} //orange
  else if (43.5<ct&&ct<57) {colorFill(204, 82, 0);} //dark orange
  else if (57<ct&&ct<68) {colorFill(200, 0, 0);}// red
  //else if (68<ct&&ct<76) {colorFill(179, 36, 0);}//red
  else if (68<ct&&ct<93) {colorFill(153, 00, 0);}//red
  else if (94<ct&&ct<98) {colorFill(77, 0, 77);} //purple
  else if (98<ct&&ct<119) {colorFill(67, 73, 164);} //blue
  else if (119<ct&&ct<131) {colorFill(0, 0, 80);}// blue
  else if (132<ct&&ct<153) {colorFill(0, 0, 128);}
  //else if (153<ct&&ct<155) {colorFill(0, 0, 100);}
  //else if (157<ct&&ct<165) {colorFill(25, 25, 102);}
  else if (154<ct&&ct<197) {colorFill(10, 10, 10);}
  else if (197<ct&&ct<200) {
    colorFill(10, 10, 10);
    // playbtn.innerHTML = "Play";
  }
}
//filling the color function
function colorFill(r,g,b) {
  clr = r.toString() + ',' + g.toString() + ',' + b.toString();
  background.style.backgroundColor = 'rgba('+clr+',0.3)'.replace(/[^,]+(?=\))/, '0.6');
  elem.style.backgroundColor = 'rgba('+clr+',0.3)'.replace(/[^,]+(?=\))/, '0.9');
}

// function to open the tab while the audio will still be playing
function openoption(evt, optiontype) {
  var i, x, tablinks;
  x = document.getElementsByClassName("opt");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
  tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(optiontype).style.display = "block";
  evt.currentTarget.className += " active";
}

// Some implementation for the buttons are taken from
//https://www.developphp.com/video/JavaScript/Video-Volume-Change-and-Mute-Programming-Tutorial
//play pause button function
var myAudio = document.getElementById("myAudio");
var playbtn = document.getElementById("playpausebtn");
playbtn.addEventListener("click",togglePlay,false);
function togglePlay() {
  if(myAudio.paused){
  		myAudio.play();
  		playbtn.innerHTML = "Pause";
  	} else {
  		myAudio.pause();
  		playbtn.innerHTML = "Continue";
  	}
};

//restart button function
function restartPlay() {
  background.style.backgroundColor = bgc;
  elem.style.backgroundColor = emc;
  myAudio.currentTime=0;
  myAudio.pause();
  playbtn.innerHTML = "Experience";
  if (a.volume!=0 && !a.muted) {pt.innerText="";}
  else {pt.innerText="No disaster should be kept in silence.";}
};
//volume slider function
var volumeslider;
volumeslider = document.getElementById("volumeslider");
volumeslider.addEventListener("change",setvolume,false);

function setvolume(){
	myAudio.volume = volumeslider.value / 100;
}
