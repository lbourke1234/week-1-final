window.onload = function() {
    addGreenPlayImgEventListener()
    addListenerToLoveHeart()
    addListenerToFirstButton()
    addEventToArtistName()
    }



function addGreenPlayImgEventListener() {
    let greenPlayNode = document.querySelectorAll('.green-play-img')
    for (let play of greenPlayNode) {
        play.addEventListener('click', addNewArtistToNowPlaying)
    }
}

function addNewArtistToNowPlaying(e) {
    let artistName = e.target.closest('.card').childNodes[5].childNodes[1].innerText
    let songName = e.target.closest('.card').childNodes[5].childNodes[3].innerText
    let currentArtistNode = document.querySelector('.p-artist-name')
    let currentSongNode = document.querySelector('.p-song-name')
    currentArtistNode.innerText = artistName
    currentSongNode.innerText = songName
}

function addListenerToLoveHeart() {
    document.querySelector('.bi-heart').addEventListener('click', showOrHideHeart)
    document.querySelector('.js-heart').addEventListener('click', showOrHideHeart)
}
function showOrHideHeart() {
    document.querySelector('footer i:first-of-type').classList.toggle('visible')
}

function addListenerToFirstButton () {
    let seeAllBtnNode = document.querySelectorAll('.see-all-btn')
    seeAllBtnNode[0].addEventListener('click', addNewRow)
    // console.log(seeAllBtnNode)
}

function addNewRow() {
    let newRowNode = document.querySelector('.hidden-row')
    newRowNode.classList.toggle('second-section-card-hidden')
    newRowNode.classList.toggle('new-row-animation')

    console.log('done')
}
function addEventToArtistName() {
    let artistNode = document.querySelector('.p-artist-name')
    artistNode.addEventListener('click', changePage)
}
function changePage (e) {
    location.href = "/artist.html";
}