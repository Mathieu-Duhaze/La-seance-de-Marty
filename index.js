




    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('video');
    var videoControls = document.getElementById('video-controls');
    var skip = document.getElementById('skip');
    var mute = document.getElementById('mute');
    var mute2 = document.getElementById('mute2');
    var entrer = document.getElementById('entrer');
    var blocpage = document.getElementById('blocpage');


/* au clic sur entrer blocpage disparait et apparait le conteneur video */
entrer.addEventListener('click', function(e){
        document.getElementById ("blocpage").style.display = "none"
        document.getElementById ("videoContainer").style.display = "block" 
        });


/* clique sur video = pause ou play */
video.addEventListener('click', function(e) {
   if (video.paused || video.ended) video.play();
   else video.pause();});

   /* mute ou unmute sur le logo son*/
   mute.addEventListener('click', function(e) {
   video.muted = !video.muted;});

   mute2.addEventListener('click', function(e) {
   video.muted = !video.muted;});

   mute.addEventListener ('click', function(e){
        document.getElementById ("mute2").style.display = "block"
        document.getElementById ("mute").style.display = "none"});

    mute2.addEventListener ('click', function(e){
        document.getElementById ("mute").style.display = "block"
        document.getElementById ("mute2").style.display = "none"});

   /* au clic sur skip la vidéo se met en pause*/    
   skip.addEventListener ('click', function(e){
        if (video.played) video.pause()});

   /* au clic sur skip la vidéo et son contenur disparait et apparait le home*/
   skip.addEventListener ('click', function(e){
        document.getElementById ("home").style.display = "block"
        document.getElementById ("videoContainer").style.display = "none"});
        
    

/* fin de vidéo, la vidéo et son conteneur se cache et apparition du home */
    document.getElementById("video").addEventListener("ended",function() {
    document.getElementById("videoContainer").style.display = "none"
    document.getElementById ("home").style.display = "block"});


    /* fonction pour changer la couleur du fond du body*/
        function changecolor(color) {
            document.body.style.background = color;
        }
    /* appelle de la fonction changement de couleur du body à la fin de la vidéo*/
    video.addEventListener ("ended", function (){
        changecolor('linear-gradient(to top left, #e4e2dc 35%, white)')});


        var roi = document.getElementById ('video-roi');
        var LCCMA = document.getElementById('video-LCCMA');
        var BA = document.getElementById('video-BA');
        var LGDM = document.getElementById('video-LGDM');
        var minority = document.getElementById('video-minority');
        var retine = document.getElementById('video-retine');


    
        

/* LE ROI ET L'OISEAU*/
	function piloteVideo() {
		if (roi.paused) {
			roi.play();
                        
		} else {
			roi.pause();}
         };   

/*LE CINEMA C'ETAIT MIEUX AVANT */
         function piloteVideo2() {
		if (LCCMA.paused) {
			LCCMA.play();
                        
		} else {
			LCCMA.pause();}
         };   

/* LES BANDES ANNONCES */
         function piloteVideo3() {
		if (BA.paused) {
			BA.play();
                        
		} else {
			BA.pause();}
         };   


/*LA GUERRE DES MONDES*/
         function piloteVideo4() {
		if (LGDM.paused) {
			LGDM.play();
                        
		} else {
			LGDM.pause();}
         };   


/*MINORITY REPORT*/
function piloteVideo5() {
		if (minority.paused) {
			minority.play();
                        
		} else {
			minority.pause();}
         };   


/*RETINE ET PUPILLE*/
function piloteVideo6() {
		if (retine.paused) {
			retine.play();
                        
		} else {
			retine.pause();}
         };   
   


$(document).ready(function(){

/*** Mute all ***/
$("#mute_all").on("click",function(){

/*** Mute all video and audio on page ***/
$("body video, body audio").each(function(){
/*** Do it here globally ***/
$(this).prop("muted", true);
});

});

/*** UnMute all ***/
$("#unmute_all").on("click",function(){

/*** Un Mute all video and audio on page ***/
$("body video, body audio").each(function(){
/*** Do it here globally ***/
$(this).prop("muted", false);
});

});


});

var mute_all = document.getElementById ('mute_all');
var unmute_all = document.getElementById ('unmute_all');

mute_all.addEventListener('click', function(e){
        document.getElementById ("mute_all").style.display = "none"
        document.getElementById ("unmute_all").style.display = "block" 
        });

unmute_all.addEventListener('click', function(e){
        document.getElementById ("unmute_all").style.display = "none"
        document.getElementById ("mute_all").style.display = "block" 
        });

