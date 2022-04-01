

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

   let showPinkHeart = (event) => {   
    let playIcon = document.querySelector(".bi bi-heart heart-icon");
    console.log(event)
    //let pauseIcon = document.querySelector(".pause-icon");
    if(playIcon.classList.value === "bi bi-hear heart-icon"){
      playIcon.classList.value = "bi bi-heart-fill solid-heart-icon"; 
    } else {
      playIcon.classList.value = "bi bi-heart heart-icon";
    } 

   }