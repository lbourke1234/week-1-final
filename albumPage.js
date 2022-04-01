

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

   