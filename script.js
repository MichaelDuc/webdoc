//Karrusel

//Variabler

const ret1 = document.getElementById("ret1");
const ret2 = document.getElementById("ret2");
const ret3 = document.getElementById("ret3");
const hoejrePil = document.getElementById("hoejrePil");
const venstrePil = document.getElementById("venstrePil");

//Array

const carousel = [ret1, ret2, ret3]

carousel[0].style.display = "block"; //Viser første billede
carousel[1].style.display = "none"; //Skjuler billede
carousel[2].style.display = "none"; //Skjuler billede

//Pil

hoejrePil.addEventListener("click", naesteBillede); //addEventListener giver pilene funktioner/Får pilene til at lytte
venstrePil.addEventListener("click", forrigeBillede);

//Funktioner

function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[2]); 
    carousel.pop();
    carousel[0].style.display = "block";
}

