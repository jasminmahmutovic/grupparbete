const artist = document.getElementById('artist')
const songTitle = document.getElementById('song')
const lyricsButton = document.getElementById('button')
const lyrics = document.getElementById('lyricsArea')

  lyricsButton.addEventListener("click", () => {
    const inputArtist = artist.value;
    const inputTitle = songTitle.value;

    fetch(`https://api.lyrics.ovh/v1/${inputArtist}/${inputTitle}`).then(function(response){
        response.json().then(data => {
            const textSpace = data.lyrics;
            const lyricsSplit = textSpace.split();
            lyrics.textContent = lyricsSplit;
            console.log(typeof textSpace);
        })
    })
});