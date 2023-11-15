function creerGrille() {
    for (let grilles = 0; grilles < sizeCanvas**2; grilles++) {
        const grille = document.createElement ("div");
        grille.setAttribute ("class", "color");  
        document.querySelector(".container").appendChild(grille);
        grid[grilles].style.height = "auto";
        grid[grilles].style.width = `calc((400 / ${sizeCanvas} - 2 ) * 1px)`;
        grid[grilles].style.border = "1px solid #0F0";  
    }
//console.log(document.querySelectorAll(".color").length), console.log(grille.className), console.log(test.children);
}

const div = document.getElementsByClassName("color"); 
function getColored(element, ground){
    element.style.backgroundColor = ground;
}

function rouge (mouseover) {
    getColored(mouseover.currentTarget, "#F00");
}

function randomColor (mouseover) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    const rgb = `rgb(${r},${g},${b})`;
    getColored(mouseover.currentTarget, rgb);
}

const canvas = document.querySelector(".container");
const grid = document.querySelector(".container").children; 
const size = document.querySelector(".size");
size.addEventListener("click", () => {
    canvas.innerHTML = "";
    sizeCanvas = prompt("Quel nombre de carré par côté veux-tu?");

})

const click = document.querySelector (".create");
click.addEventListener ("click", () => {
    creerGrille();
 
})

const couleurRouge = document.querySelector(".rouge")
couleurRouge.addEventListener ("click", () => {
    for (i = 0; i < div.length; i++) {
        div[i].removeEventListener("mouseover", randomColor);
        div[i].addEventListener("mouseover", rouge);
      }
 
})

const rainbow = document.querySelector(".rainbow")
rainbow.addEventListener ("click", () => {
    for (i = 0; i < div.length; i++) {
        div[i].removeEventListener("mouseover", rouge);
        div[i].addEventListener("mouseover", randomColor);
      }
 
})
