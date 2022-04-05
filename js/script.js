// alert('Hello World!');

// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49

// 1. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// 2. I numeri nella lista delle bombe non possono essere duplicati.

// 3. In seguito l'utente clicca su una cella: 
//        se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
//        altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

// 4. La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// 5. Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

// BONUS:
// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
// 2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

// Flowchart
// 1. Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    // 1.A. Devo generare un numero random => funzione Math.Random
    // 1.B. Devo mettere il numero random nel range di difficoltà prescelta => potrebbe essere un if?
    // 1.C. Devo inserire la bomba al posto del numero random

/////////////////////////////////////////////////////////////////////////
// 1.A. 
let numBombe = 16; // <= questo dovrebbe essere numSquare !!
let totBombe = 0;

// let bombe = Math.floor((Math.random() * numBombe) + 1); 
// console.log(bombe);
// 1.B.

let numSquare = 41;
for (let i = 1; i < numBombe && i < numBombe; i++){
  totBombe = totBombe += i;
  console.log("La bomba si trova nella casella " + totBombe);
}
// 1.C.


/////////////////////////////////////////////////////////////////////////


function setLevel(event) {
  // console.log(this);
  // console.log(level);
  // event.preventDefault(); // controlli sui valori
  const level = document.getElementById("level").value;
  console.log("livello selezionato: ", level);
  let numSquare;
  switch (level) {
    case "1":
    default:
      numSquare = 100;
      break;
    case "2":
      numSquare = 81;
      break;
    case "3":
      numSquare = 49;
      break;
  }



  let squareXSide = Math.sqrt(numSquare);
  console.log("numero di celle per lato: ", squareXSide);
  generaGriglia(numSquare, squareXSide)
}
function generaGriglia(numSquare, squareXSide){
  console.log("numero di celle totali: ", numSquare);
  const app = document.getElementById('app');
  app.innerHTML = "";
  let row = document.createElement('div');
  row.setAttribute('class', "gridRow");
  for(let i = 1; i <= numSquare; i++) {
    const square = generaCella(i, squareXSide);
    row.append(square);
  }
  app.append(row);
}
function generaCella(numSquare, squareXSide){
  let square = document.createElement('div');
  square.setAttribute('class', "box d-flex justify-content-center align-items-center fw-bold fs-6");
  square.style.width = `calc(100% / ${squareXSide})`;
  square.style.heigth = `calc(100% / ${squareXSide})`;
  square.classList.add('pointer');
  square.innerHTML = `<span>${numSquare}</span>`;
  square.addEventListener('click', coloraCella);
  return square;
}
function coloraCella(){
  // console.log(this);
  this.style.backgroundColor = "#6495ed";
  this.classList.remove("pointer");
  this.removeEventListener('click', coloraCella);
}
// document.getElementById("level").addEventListener("change", setLevel);
document.getElementById("play").addEventListener("click", setLevel);

