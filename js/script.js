// alert('Hello World!');

// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Flowchart
// 1. Creare una scelta di livello di difficoltà da 1 a 3 con relativo bottone
// 2. Creare la griglia difficoltà 1 con numeri generati da 1 a 100
// 3. Creare la griglia difficoltà 2 con numeri generati da 1 a 81
// 4. Creare la griglia difficoltà 3 con numeri generati da 1 a 49
// 5. Ogni cella è cliccabile e cambia colore

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
  square.setAttribute('class', "box");
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

