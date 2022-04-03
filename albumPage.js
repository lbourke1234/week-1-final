

// play pause button

let showPauseButton = (event) => {   
    let playIcon = document.querySelector("#play-pause-button-id");
    console.log(event)
    //let pauseIcon = document.querySelector(".pause-icon");
    if(playIcon.classList.value === "bi bi-play-circle-fill big-play-button"){
      playIcon.classList.value = "bi bi-pause-circle-fill pause-icon"; 
    } else {
      playIcon.classList.value = "bi bi-play-circle-fill big-play-button";
    } 
   }

   function addEventToHeart() {
    let heartNode = document.querySelector('#heart-icon-1')
     heartNode.addEventListener('click', favouriteSong)
   }
   addEventToHeart() 

   function favouriteSong() {
     console.log("hello")
     let heartNode = document.querySelector('#heart-icon-1')
   if (heartNode.classList.value === "bi bi-heart"){
      heartNode.classList.value = "bi bi-heart-fill"; 
    } else {
      heartNode.classList.value = "bi bi-heart";
    } 
   }



   /*     document.querySelector('#page-heart-icon').classList.toggle('solid-heart-icon') */