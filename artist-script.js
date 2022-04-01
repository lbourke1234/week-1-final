window.onload = () => {
    addEventlistenerToHearts();
    seeMoreEventListener();

}
    /* This is the Eventlistener */
    let addEventlistenerToHearts = (event) => {
        let unfilledHearts = document.querySelectorAll(".popup");
        for (let i = 0; i < unfilledHearts.length; i++) {
        document.addEventListener("click", heartFilledFunction);
    }
}
/* This is the eventlistener for the See more Text */
let seeMoreEventListener = (event) => {
    let seeMoreText = document.querySelector(".see-more-text")
    seeMoreText.addEventListener("click", seeMoreTextFunction);
}

/* ALL ABOVE ARE EVENTLISTENERS  */





/* THIS IS TEH SEE MORE FUNCTION THAT ADDS 1 MORE SONG TO THE TABLE */
let seeMoreTextFunction = (event) => {
    console.log(event)
    let table = document.querySelector(".table");
    let newTr = document.createElement("tr");
    table.appendChild(newTr)
    newTr.innerHTML = `
    <th scope="row">4</th>
    <td>
      <img
        src="https://www.theaudiodb.com/images/media/album/thumbback/dl9x741602709309.jpg"
        alt="Album cover"
        class="table-cover-picture mr-2"
      />
      <span>We Will Rock You - Remastered</span>
    </td>
    <td>103,112,002</td>
    <td>2:40</td>
    <td>
      <div
        class="popup"
        onclick="addSongToLikedAlbum()"
        onclick="heartFilledFunction()"
      >
        <i class="bi bi-heart heart-table">
          <i class="bi bi-suit-heart-fill heart-filled"></i>
          <span class="popuptext myPopup">
            Added to your Liked Songs
          </span>
        </i>
      </div>
    </td>
  `
  console.log(event.target)
}
/* END OF THE FUNCTION THAT ADDS 1 MORE SONG TO THE TABLE */


/* THIS IS THE SMALL HEART FUNCTIONALITY AS WELL AS THE POPUP TEXT */
function addSongToLikedAlbum() {
    let popup = document.querySelectorAll(".myPopup");
    let halfHearts = document.querySelectorAll(".heart-table")
    
    for (let i = 0; i < popup.length; i++) { 
        if (halfHearts[i].classList.value.length < 40) { 
        popup[i].classList.add("show");
    }
    setTimeout(removeClassFromSong, 1500);      
}}


let removeClassFromSong = () => { 
    let popup = document.querySelectorAll(".myPopup");
    for (let k = 0; k < popup.length; k++) {
        popup[k].classList.remove("show")
    }
}

    let heartFilledFunction = (event) => { 
    console.log(event.target)
    event.target.classList.toggle("heart-full-showing")
}

let removeHalfHearts = () => {
    let halfHearts = document.querySelectorAll(".heart-table")
    for (let i = 0; i < halfHearts.length; i++) {
        halfHearts[i].classList.add("heart-table-hidden")
    }
}
/* END OF THE THE SMALL HEART FUNCTIONALITY AS WELL AS THE POPUP TEXT */



    /* THIS IS THE PLAY - PAUSE BUTTON SWITCH FUNCTIONALITY */ 
    let showPauseButton = () => {
        let playButton = document.querySelector(".big-play-button");
        let pauseButton = document.querySelector(".pause-button");
        let playButtonId = document.getElementById("play-pause-button-id")

      
        if (playButtonId.classList.value === "bi bi-play-circle-fill big-play-button") {
            playButtonId.classList.value = "bi bi-pause-circle-fill pause-button"
        } else if (playButtonId.classList.value === "bi bi-pause-circle-fill pause-button heart-full-showing") {
            playButtonId.classList.value = "bi bi-play-circle-fill big-play-button heart-full-showing"
        } else if (playButtonId.classList.value === "bi bi-play-circle-fill big-play-button heart-full-showing") {
                playButtonId.classList.value = "bi bi-pause-circle-fill pause-button heart-full-showing"
        }
        
        
        /* else if (playButtonId.classList.value === "bi bi-play-circle-fill big-play-button heart-full-showing") {
            playButtonId.classList.value = "bi bi-pause-circle-fill pause-button heart-full-showing"
        }
 */

  }


  let redirectToAlbumPage = (event) => {
    location.href = "albumpage.html";
    console.log(event);
  }

                
