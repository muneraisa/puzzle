const rows = 3;
const columns = 3;

let currentTile;
let blankTile;
let moves = 0;

const correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const shuffled = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

window.onload = function () {
  //once loaded, create the tiles
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //loop through the grid

      let tile = document.createElement("img"); //create the elemnts from here instead of having it static in the HTML
      tile.setAttribute("id", r.toString() + "," + c.toString()); // assign coordinate ids
      tile.src = "./images/" + shuffled.shift() + ".jpg"; // the path

      //DRAG FUNCTIONALITY
      tile.addEventListener("dragstart", dragStart); //click an image to drag
      tile.addEventListener("dragover", dragOver); //moving image around while clicked
      tile.addEventListener("dragenter", dragEnter); //dragging image onto another one
      tile.addEventListener("drop", dragDrop); //drag an image over another image, drop the image
      tile.addEventListener("dragend", dragEnd); //after drag drop, swap the two tiles

      //insert the tile to the board of the puzzle
      document.getElementById("puzzle").append(tile); // add to the puzzle div
    }
  }
};

function dragStart() {
  currentTile = this; //the tile i am picking
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  blankTile = this; //the tile i am droping on
}

//coordinates
function getCoords(tile) {
  let coordinate = tile.id.split(",").map((coord) => parseInt(coord));
  return coordinate;
}

//swap conditions
function checkAdjacent() {
  let h = false; // horizontal move
  let v = false; // veertical

  let [r, c] = getCoords(currentTile);
  let [r2, c2] = getCoords(blankTile);

  console.log("before check:", h, v);

  //horizontal left or right
  if (r == r2 && (c + 1 == c2 || c - 1 == c2)) {
    h = true;
  }

  //vertical up or down
  if (c == c2 && (r + 1 == r2 || r - 1 == r2)) {
    v = true;
  }

  console.log("after check:", h, v);
  return h || v;
}

//win
function checkWin() {
  let order = [];
  let message = "";
  let tiles = document.querySelectorAll("#puzzle img");
  tiles.forEach((tile) => {
    let src = tile.src;
    let parts = src.split("/");
    let img = parts[parts.length - 1]; // last part of the til which contain img Num
    let tileNum = img.split(".")[0];
    order.push(tileNum);
  });

  console.log("Current order:", order.join());
  console.log("Correct order:", correctOrder.join());

  if (order.join() == correctOrder.join()) {
    message = document.createElement("h2");
    message.innerText = "YOU WIN 🎉!";
    document.getElementById("message").append(message);
  }
}

//loss
function Loss() {
  let message = "";
   message = document.createElement("h2");
    message.innerText = "TOO MANY MOVES, YOU LOSE ☹️!";
    document.getElementById("message").append(message);
}

//swap once dropped
function dragEnd() {
  if (!blankTile.src.includes("1.jpg")) {
    return;
  }

  if (checkAdjacent(currentTile, blankTile)) {
    let holding = currentTile.src;
    let dropOn = blankTile.src;

    //swap tiles
    blankTile.src = holding;
    currentTile.src = dropOn;

    
  }

  //moves
  moves = moves + 1;
  document.getElementById("moves").innerText = moves;

   if (moves > 20) {
    Loss(); // You need to define this function
    return;
  }

  checkWin();
}
