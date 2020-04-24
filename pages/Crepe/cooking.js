let baseImage = document.querySelector('.ustensile') 
const mood2 = document.querySelector('.mood')
// let baseImage = document.querySelector('.poele') // commentable
// let baseImage2 = document.querySelector('.crepe') //

let clicked = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms)) //permet d'établir un arret de calcul
}

function click2(event){
    clicked = event.target //permet de cibler en recuperant l'image 
}

document.body.addEventListener("click", click2)


let product = [] //list produit
let foodState = 0 //donne l'etat de cuisson
let time //time, time2 variable qui vont permettre de le temps de cuisson
let time2 
let zIndexMax = 1 //index plan des images
let score = 0 //Score qui va nous permettre d'arrêter la recursive
let error = -1 //Compte les erreurs

function reset2(){ // fonction qui reset les variables globals
    clicked = false
    product = []
    foodState = 0 
    zIndexMax = 1 
    score = 0
}

async function cooking(crepe){  //async function permet une fonction avec "await"
    product.push(crepe) //garde en memoire dans un tableau les produits ajouté
    error ++ //compte le nombre d'erreur
    crepe.style.position = "absolute"  //change le style de .crepe
    crepe.style.marginLeft = "600px"
    crepe.style.marginTop = "0px"
    crepe.style.zIndex = zIndexMax //change le plan de .crepe
    if(score == 3){ //cas gagnant
        let finalResult = error-score
        crepe.parentNode.removeChild(crepe)
        alert("Félicitations, tu as réussi la recette " + finalResult + " fautes")  
        window.location.href="../../accueil.html" //retour à la home page
        return
    }
    time = Date.now() //date de reference
    while(true){ //boucle principale qui met a jour l'etat de la crepe(cuisson)
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
            setTimeout(function(){alert('tu as perdu, appuyer pour relancer')}, 20) //permet d'afficher l'image avant que l'alerte bloque la page
            product.forEach((item, index)=>{ //vide le tableau product
                if(index != 0){
                    item.parentNode.removeChild(item)
                }                
            })
            reset2()
            crepes = document.getElementById("crepe") //prend les crepe
            crepes.src = "../../images/crepe/crepe1.png"
            cooking(images) //appel recursif en cas de défaite
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
            cooking(crepe2) //appel recursif pour la crepe suivante
            return
        }
    }
}

function nothing(){ 
    return 1
}

images = document.getElementById("crepe") 




