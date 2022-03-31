function addSongToLikedAlbum() {
    let popup = document.querySelectorAll(".myPopup");
    for (let i = 0; i < popup.length; i++) {
        popup[i].classList.add("show");
    }
    setTimeout(removeClassFromSong, 1.0*1000);
    }

 
let removeClassFromSong = () => { 
    let popup = document.querySelectorAll(".myPopup");
    for (let i = 0; i < popup.length; i++) {
        popup[i].classList.remove("show")
    }
 }

 let showPauseButton = () => {
     let playButton = document.querySelector(".bi-play-circle-fill");
     let pauseButton = document.querySelector(".pause-button");
     playButton.classList.add("play-button-hide");
     pauseButton.classList.add("pause-button-showing")
    }


    let showPlayButton = () => {
     let playButton = document.querySelector(".bi-play-circle-fill");
     let pauseButton = document.querySelector(".pause-button");
     playButton.classList.remove("play-button-hide");
     pauseButton.classList.remove("pause-button-showing")
    
    }