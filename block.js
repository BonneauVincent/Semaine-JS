
const character = document.querySelector('.character')
const play = document.querySelector('.play')

let played = false

play.addEventListener('click',() => {
    const play = ChangeBlock()
})
// button.addEventListener('click',() => {
//     const button = ChangeBlock2()
// })


function ChangeBlock(){
    if(!played){
        character.src = "images/recipe/recetteCrepe.png"
        character.style.heigth = '400px';
        character.style.width = '400px';
        character.style.position = "absolute"
        character.style.bottom = '100px'
        character.style.top = '0px'
        character.style.marginLeft = '250px'
        character.style.marginTop = '250px'
        character.addEventListener('click',() =>{
            window.location.href="pages/Crepe/crepe.html"
        })
        play.src = "images/recipe/recetteGalette.png"
        play.style.heigth = '400px';
        play.style.width = '400px';
        play.style.position = "absolute"
        play.style.top = '0px'
        play.style.bottom = '100px'
        play.style.marginLeft = '-350px'
        play.style.marginTop = '250px'
        play.addEventListener('click',() =>{
            window.location.href="pages/Galette/galette.html"
        })
    } 
    played = true
}












