function creerGrille() {
    for (let grilles = 0; grilles < 256; grilles++) {
        var grille = document.createElement ("div");
        grille.setAttribute ("class", "color");  
        document.querySelector(".container").appendChild(grille);
        const grid = document.querySelector(".container").children; 
        grid[grilles].style.height = "auto";
        grid[grilles].style.width = "23px";
        grid[grilles].style.border = "1px solid #00FF00"     
    }
//console.log(document.querySelectorAll(".color").length), console.log(grille.className), console.log(test.children);
}

const div = document.getElementsByClassName("color"); 
function getColored(element, ground){
    element.style.backgroundColor = ground;
}

function highLight (event) {
    getColored(event.currentTarget, "#F00");
}


const click = document.querySelector (".create");
click.addEventListener ("click", () => {
    creerGrille();
    for (i = 0; i < div.length; i++) {
        div[i].addEventListener("mouseover", highLight);
      }
 
})
