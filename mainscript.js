// loading audio
var p1audio = $("#audiop1")[0];
var p2audio = $("#audiop2")[0];
var p3audio = $("#audiop3")[0];
var p4audio = $("#audiop4")[0];
// opening different tabs
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
// play sound over pics
function PlaySound(sound) {
    var sound1=document.getElementById(sound);
    sound1.play();
}
function StopSound(sound) {
    var sound1=document.getElementById(sound);
    sound1.pause();
    sound1.currentTime = 0;
}
