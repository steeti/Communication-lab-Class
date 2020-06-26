/*these first two parts are implementation of w3school (line 5-45)
/* the third part (line 49-71) is implemention of codepen and the source for the code is https://codepen.io/AmrSubZero/pen/oLOYrA */


/*this function is used to open the tab when you click on it
basiclly when you click the button, it directs you to the it, an dlabels it as active page, 
and reove active page label from previous buttons.
In summary, it opens the page and highlits thee button that you are on*/
/*source(w3school)*/
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

/*this function was used for the slide show, in this function,
 when the user click on next the index passed is either 1 or -1
  so when the program determines, it move to the picture after or 
  before  and remove the other pic from the screen*/
/*source(w3school)*/

var index = 1;

function dives(n) {
  divesshow(index += n);
}

function divesshow(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  if (n > x.length) {index = 1}
  if (n < 1) {index = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[index-1].style.display = "block";  
}



/*This code is used to used to stop the video when I click on the other tabs (buttons)*/
/*Source: https://codepen.io/AmrSubZero/pen/oLOYrA*/


/*We call this function when API is ready so after the api gets injected
 In here we create the global player from the specific iframe (in this case tourvideo)*/
var player;
function onYouTubePlayerAPIReady() {
    player = new YT.Player('videotour', {
        events: {
            'onReady': onPlayerReady
        }
    });
}


/*this fnction used to stop the video, each tab contains a different id therefor had to implement it 4 times*/
function onPlayerReady(event) {
    var stopButton = document.getElementById("stopvideo1");
        stopButton.addEventListener("click", function() {
        player.stopVideo();
    });

    var stopButton = document.getElementById("stopvideo2");
    stopButton.addEventListener("click", function() {
        player.stopVideo();
    });
    var stopButton = document.getElementById("stopvideo3");
        stopButton.addEventListener("click", function() {
        player.stopVideo();
    });

    var stopButton = document.getElementById("stopvideo4");
    stopButton.addEventListener("click", function() {
        player.stopVideo();
    });
}

/* Here we basiccly inject youtube api script*/
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


