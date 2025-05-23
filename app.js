const rows = 3;
const columns = 3;

let currentTile;
let blankTile;
let moves = 0;

const correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

function startGame() {
  moves = 0;
  document.getElementById("puzzle").innerHTML = "";
  document.getElementById("message").innerHTML = "";
  document.getElementById("again").innerHTML = "";
  document.getElementById("moves").innerText = moves;

  const shuffled = ["4", "2", "8", "5", "1", "6", "7", "9", "3"];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.setAttribute("id", r.toString() + "," + c.toString());
      tile.src = "./images/" + shuffled.shift() + ".jpg";

      tile.addEventListener("dragstart", dragStart);
      tile.addEventListener("dragover", dragOver);
      tile.addEventListener("dragenter", dragEnter);
      tile.addEventListener("drop", dragDrop);
      tile.addEventListener("dragend", dragEnd);

      document.getElementById("puzzle").append(tile);
    }
  }
}

window.onload = startGame;

function dragStart() {
  currentTile = this;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {}

function dragDrop() {
  blankTile = this;
}

function getCoords(tile) {
  let coordinate = tile.id.split(",").map((coord) => parseInt(coord));
  return coordinate;
}

function checkAdjacent() {
  let h = false;
  let v = false;

  let [r, c] = getCoords(currentTile);
  let [r2, c2] = getCoords(blankTile);

  if (r == r2 && (c + 1 == c2 || c - 1 == c2)) {
    h = true;
  }

  if (c == c2 && (r + 1 == r2 || r - 1 == r2)) {
    v = true;
  }

  return h || v;
}

function checkWin() {
  let order = [];
  let message = "";
  let tiles = document.querySelectorAll("#puzzle img");
  tiles.forEach((tile) => {
    let src = tile.src;
    let parts = src.split("/");
    let img = parts[parts.length - 1];
    let tileNum = img.split(".")[0];
    order.push(tileNum);
  });

  if (order.join() == correctOrder.join()) {
    message = document.createElement("h2");
    message.innerText = "YOU WIN 🎉!";
    document.getElementById("message").append(message);

    let againBtn = document.createElement("button");
    againBtn.onclick = startGame;
    againBtn.innerText = "Play Again !";
    document.getElementById("again").append(againBtn);
  }
}

function Loss() {
  let message = "";
  message = document.createElement("h2");
  message.innerText = "TOO MANY MOVES, YOU LOSE ☹️!";
  document.getElementById("message").append(message);

  let againBtn = document.createElement("button");
  againBtn.onclick = startGame;
  againBtn.innerText = "Play Again !";
  document.getElementById("again").append(againBtn);
}

function dragEnd() {
  if (!blankTile.src.includes("1.jpg")) {
    return;
  }

  if (checkAdjacent(currentTile, blankTile)) {
    let holding = currentTile.src;
    let dropOn = blankTile.src;

    blankTile.src = holding;
    currentTile.src = dropOn;

    moves = moves + 1;
    document.getElementById("moves").innerText = moves;
  }

  if (moves > 20) {
    Loss();
    return;
  }

  checkWin();
}
