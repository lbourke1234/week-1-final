

// play pause button

  function showPauseIcon(){
    let playIcon = document.querySelector("#page-play-icon");
    let pauseIcon = document.querySelector(".pause-icon");
    playIcon.classList.add("hide-play-icon");
    pauseIcon.classList.add("show-pause-icon");
   }

   function showPlayIcon(){
    let playIcon = document.querySelector("#page-play-icon");
    let pauseIcon = document.querySelector(".pause-icon");
    playIcon.classList.remove("play-button-hide");
    pauseIcon.classList.remove("pause-button-showing");  
   }


// heart icon to solid red on click

   function likedSong(){
    let heart = document.querySelector("bi bi-heart");
    heart.classList.add("solid-heart-icon");
   }

   // music player toggle visibility

   
  let musicPlayer = document.querySelector(".audio-player");
  let HidePlayer = document.querySelector(".album-song");
  onclick=function(){
      musicPlayer.style.visibility = "hidden";

  }
  ondlclick=function(){
      musicPlayer.style.visibility = "visible";
  }

  