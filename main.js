const artist = document.getElementById('artist')
const songTitle = document.getElementById('song')
const button = document.getElementById('button')
const outputText = document.getElementById('lyricsArea')
const error = document.getElementById("error")


function errorMessagesTitle(){ 
  
  if (songTitle.value === '' || songTitle === null) {
   outputText.innerText = messages = 'You must type in a song title.'
   return false
  } 
  return true
}

// Function that enables the button if something is put in
// Otherwise keeping the button disabled
artist.addEventListener("keyup", function(event){
  const value = event.target.value 

  if (value.length >=1 && value != " "){
    outputText.innerText= ""
    button.removeAttribute("disabled")
  } else {
    outputText.innerText= "Button won't work without an Artist "
    button.setAttribute("disabled",1) 
  }
})


// Fetch function
button.addEventListener("click", () => {
  const errorMessage = errorMessagesTitle() 
  
  
  if( errorMessage === true){
   const inputArtist = artist.value;
   const inputTitle = songTitle.value;
   
   fetch(`http://ianertson.com:3500/${inputArtist}/${inputTitle}`).then(function(response){
     response.json().then(data => {
       
       if(data.length === 0){
         outputText.innerText= "uh oh! we couldn't find your lyrics"
       } else {
         outputText.innerText = data[0].lyrics
       }
     })
   })
 }
});