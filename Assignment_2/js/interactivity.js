var ouchaudio = $("#ouch")[0];
var panicaudio = $("#panic")[0];
var showeraudio = $("#shower")[0];
var typingaudio = $("#typing")[0];
var dropaudio = $("#drop")[0];
var clockaudio = $("#clock")[0];
//first image of the comic,
//When the cursor enters the area then we play the audio, then we display the box button, otherwise its hidden by default
//We are basiclly telling the cursor that when you enter the body of this class then play the following audio
$("body").on('mouseenter', '.path_1 > div > img', function(){
  boxControlsOnly(1);
  ouchaudio.play();
});
//when the cursor leaves the body of the class then we pause the audio, and restart it by setting the current time for to 0
$("body").on('mouseout', '.path_1 > div > img', function(){
  ouchaudio.pause();
  ouchaudio.currentTime = 0;

});

//Same Concept as above, just different audio and pic
$("body").on('mouseenter', '.path_2b > div > img', function(){
  boxControlsOnly(1);
  dropaudio.play();
});
$("body").on('mouseout', '.path_2b > div > img', function(){
  dropaudio.pause();
  dropaudio.currentTime = 0;
});

//Same concept different pic and audio
$("body").on('mouseenter', '.path_2c > div > img', function(){
  boxControlsOnly(1);
  panicaudio.play();
});
$("body").on('mouseout', '.path_2c > div > img', function(){
  panicaudio.pause();
  panicaudio.currentTime = 0;
});
//Same concept as above, different pic and audio, also two sounds on the same picture over each other(sounded cooler :) )
$("body").on('mouseenter', '.path_2b > div > img', function(){
  boxControlsOnly(1);
  panicaudio.play();
});
$("body").on('mouseout', '.path_2b > div > img', function(){
  panicaudio.pause();
  panicaudio.currentTime = 0;
});
//same concept, differnt pic and audio
$("body").on('mouseenter', '.path_3 > div > img', function(){
  boxControlsOnly(1);
  dropaudio.play();
});
$("body").on('mouseout', '.path_3 > div > img', function(){
  dropaudio.pause();
  dropaudio.currentTime = 0;
});
//same concept, differnt pic and audio
$("body").on('mouseenter', '.path_5 > div > img', function(){
  boxControlsOnly(1);
  showeraudio.play();
});
$("body").on('mouseout', '.path_5 > div > img', function(){
  showeraudio.pause();
  showeraudio.currentTime = 0;
});
//same concept, differnt pic and audio
$("body").on('mouseenter', '.path_7 > div > img', function(){
  boxControlsOnly(1);
  clockaudio.play();
});
$("body").on('mouseout', '.path_7 > div > img', function(){
  clockaudio.pause();
  clockaudio.currentTime = 0;
});
//same concept, differnt pic and audio
$("body").on('mouseenter', '.path_6 > div > img', function(){
  boxControlsOnly(1);
  typingaudio.play();
});
$("body").on('mouseout', '.path_6 > div > img', function(){
  typingaudio.pause();
  typingaudio.currentTime = 0;
});

//The last panel there was no music so the box button was showing by default.
