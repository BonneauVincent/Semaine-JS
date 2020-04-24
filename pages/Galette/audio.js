const bgm = document.querySelector('.bgm')
const image = document.querySelector('.img')
// Set object references
const playpause = document.querySelector('.playpause')


image.addEventListener('click',() => {
    // Changin Play or Pause
    const image = bgmPlayPause()
})

function bgmPlayPause(){
bgm.play()
// Add Event Handling
playpause.addEventListener("click",bgmPlay);
	// Functions
	function bgmPlay()
  {
		if(bgm.paused == 1){
            bgm.play()
            image.src= "../../images/play.png"
	    } else {
            bgm.pause()
            image.src= "../../images/pause.png"
	    }
	}
}






