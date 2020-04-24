let baseImage = document.querySelector('.ustensile') 
const mood2 = document.querySelector('.mood')
// let baseImage = document.querySelector('.poele') // commentable
// let baseImage2 = document.querySelector('.crepe') //

let clicked = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)) 
}

function click2(event){
    // let X = event.clientX
    // let Y = event.clientY
    // if(610 < X && X < 852 && 385 < Y && Y < 579){
    //     clicked = true
    // }
    clicked = event.target //permet de cibler en recuperant l'image 
}

document.body.addEventListener("click", click2)
// baseImage.addEventListener('click', click) 
// baseImage2.addEventListener('click', click) // commentable

let product = [] //list produit
let foodState = 0 //donne l'etat de cuisson
let time //time, time2 variable qui vont permettre de le temps de cuisson
let time2 
let zIndexMax = 1 //index plan des images
let score = 0 //Score qui va nous permettre d'arrêter la recursive
let error = -1 //

function reset2(){
    clicked = false
    product = []
    foodState = 0 
    zIndexMax = 1 
    score = 0
}

async function cooking(crepe){ 
    product.push(crepe)
    error ++
    crepe.style.position = "absolute"
    crepe.style.marginLeft = "600px"
    crepe.style.marginTop = "0px"
    crepe.style.zIndex = zIndexMax
    if(score == 3){
        let finalResult = error-score
        crepe.parentNode.removeChild(crepe)
        alert("Félicitations, tu as réussi la recette " + finalResult + " fautes")  
        window.location.href="../../accueil.html"
        return
    }
    time = Date.now()
    while(true){
        await sleep(50) //attend x miliseconde sans execution pour limiter les calculs (decharge le processeur)
        time2 = Date.now()
        let elapsed = time2 - time //calcule le temps de cuisson
        if( elapsed > 0 && elapsed < 2000){
            mood2.src="../../images/mood/happy.png"            
            foodState = 0
        }
        else if(elapsed < 2000){
            crepe.src="../../images/crepe/crepe1.png"
            foodState = 1
        }
        else if(elapsed < 4000){
            crepe.src="../../images/crepe/crepe2.png"
            foodState = 2
        }
        else if(elapsed < 6000){
            crepe.src="../../images/crepe/crepe4.png"
            mood2.src="../../images/mood/hot.png"
            foodState = 3
        }
        else if(elapsed < 8000){
            mood2.src="../../images/mood/lost.png"
            setTimeout(function(){alert('tu as perdu, appuyer pour relancer')}, 20)
            product.forEach((item, index)=>{ 
                if(index != 0){
                    item.parentNode.removeChild(item)
                }                
            })
            reset2()
            crepes = document.getElementById("crepe")
            crepes.src = "../../images/crepe/crepe1.png"
            cooking(images)
            return
        }

        if(clicked == crepe){ //click que pour crepe
            if(foodState == 2){
                score ++
            }
            crepe.style.marginLeft = '1180px' 
            crepe.style.Top = '200px'
            crepe.style.marginTop = (zIndexMax-1) * (-10) +'px'
            time = Date.now()
            clicked = false
            crepe2 = new Image(200, 150)
            var div = document.getElementById('ustensile')
            zIndexMax ++
            crepe2.src = "../../images/crepe/crepe1.png"
            div.appendChild(crepe2)
            // let baseImage2 = document.querySelector('.crepe')
            // baseImage2.addEventListener('click', click)
            cooking(crepe2)
            return
        }
    }
}

function nothing(){
    return 1
}

images = document.getElementById("crepe")




