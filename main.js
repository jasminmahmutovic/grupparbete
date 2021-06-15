const artist = document.getElementById('artist')
const lyricsButton = document.getElementById('button')
const lyrics = document.getElementById('lyricsArea')
const error = document.getElementById("error")


// Function that enables the button if something is put in
// Otherwise keeping the button disabled
artist.addEventListener("keyup", function(event){
 
    const value = event.target.value 
  
    if (value.length >=1 && value != " "){
      lyricsButton.removeAttribute("disabled")
      error.removeAttribute("data-active")
      error.innerText = ""
    } else {
      lyricsButton.setAttribute("disabled",1)
      error.setAttribute("data-active", "")
      error.innerText = "You must type in an artist."
    }
})


// Fetch function
lyricsButton.addEventListener("click", () => {

    const inputArtist = artist.value;
    const inputTitle = songTitle.value;

    fetch(`https://api.lyrics.ovh/v1/${inputArtist}/${inputTitle}`).then(function(response){
        response.json().then(data => {
            document.getElementById("lyricsArea").innerText=data.lyrics
        })
    })
});