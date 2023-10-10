// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.body.addEventListener("click", e => {
  const btn = e.target
  if(btn.classList.contains("like-glyph")){
    mimicServerCall().then(()=>{
      if(btn.classList.contains("activated-heart")){
        btn.classList.remove("activated-heart")
        btn.textContent = EMPTY_HEART
      } else {
        btn.classList.add("activated-heart")
        btn.textContent = FULL_HEART
      }
    }).catch(error=>{
      console.log(error)
      const errorDiv = document.getElementById("modal")
      const errorMessage = document.getElementById("modal-message")

      errorMessage.textContent = error
      errorDiv.classList.remove("hidden")

      setTimeout(()=>{
        errorDiv.classList.add("hidden")
      },3000)
    })
  }
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
