const milk = document.querySelector('.milk')
const egg  = document.querySelector('.egg') 
const flour =  document.querySelector('.flour')
const sugar = document.querySelector('.sugar')
const bowl = document.querySelector('.bowl')
const bubble = document.querySelector('.bubble')
const mood = document.querySelector('.mood')

let click = 0
let step = 0
let intro = true

bubble.addEventListener('click',() => {
    if(!intro){
        return
    }
    if(click == 0){
        bubble.src = "../../images/bubble/bubble2.png"
        click ++
    }
    else if(click == 1){
        bubble.src = "../../images/bubble/bubble3.png"
        click = 0
        intro = false
    }
})

window.addEventListener("keydown", KeyPress, false) // lit l'evenement sur la fenetre avec keypress(une touche du clavier)
function KeyPress(key){
    if(key.keyCode == "86" ){ // ASCII --> V
        if(step!=0){
            mood.src="../../images/mood/lost.png"
            setTimeout(function(){alert('tu as perdu, f5 pour recommencer')}, 20) 
        }
        keyCode = true 
        flour.parentNode.removeChild(flour)
        bowl.src ="../../images/bowl/bolFlour.png"
        bubble.src = "../../images/bubble/bubble4.png"
        step ++
    }
    if(key.keyCode == "70"){ // ASCII --> F
        if(step!=1){
            console.log("toto")
            mood.src="../../images/mood/hungry.png"
            setTimeout(function(){alert('tu as perdu, f5 pour recommencer')}, 20) 
        }   
        keyCode = true 
        milk.src ="../../images/ingredient/milkEndPhase.png"
        milk.style.heigth = '400px';
        milk.style.width = '400px';
        milk.style.marginLeft = '-280px'
        milk.style.transform = 'rotate(-90deg)' // rotation 90degré 
        bubble.src = "../../images/bubble/bubble5.png"
        step ++
    }
    if(key.keyCode == "32"){ // ASCII --> space
        if(step!=2){
            mood.src="../../images/mood/tsundere.png"
            setTimeout(function(){alert('tu as perdu, f5 pour recommencer')}, 20) 
        }
        keyCode = true
        milk.parentNode.removeChild(milk)
        sugar.src ="../../images/ingredient/sugarEndPhase.png"
        sugar.style.transform = 'rotate(-90deg)' // rotation 90degré
        sugar.style.marginLeft = '-100px'
        bubble.src = "../../images/bubble/bubble6.png"
        step ++
    }
}

function reset(){
    click = 0
}

// flour.addEventListener('click',() => {
//     click++
//     flour.style.paddingLeft= 200 + 'px'
//     reset(click)
// })

reset(click)

egg.addEventListener('click',() => {
    const egg = changeEgg()
})

function changeEgg(){
    if(step!=3){
        mood.src="../../images/mood/lost.png"
        setTimeout(function(){alert('tu as perdu, f5 pour recommencer')}, 20) 
    }
    console.log(click)
    click++
        if( click == 1){
            sugar.parentNode.removeChild(sugar)
            egg.src="../../images/ingredient/egg2.png"
            egg.style.marginLeft = '-100px'
        }
        else if(click == 2){
            egg.src="../../images/ingredient/egg3.png"
        }
        else if(click == 3){
            egg.src="../../images/ingredient/egg4.png"
        }
        else if(click == 4){
            egg.style.marginTop = "-400px"
            egg.style.marginLeft = "-360px"
            egg.src="../../images/ingredient/egg5.gif"
        }
        else if(click == 5){
            egg.parentNode.removeChild(egg)
            bowl.src="../../images/bowl/bolFlourEgg.png"
            //reset(click)
            bubble.src = "../../images/bubble/bubble7.png"
            cooking(images)
            //mettre le bol avec l'oeuf
        }     
}



// async function awaitclick(){
//     while(click < 5){
//         await sleep(1000)
//     }
//     cooking(images)
// }
// awaitclick()
