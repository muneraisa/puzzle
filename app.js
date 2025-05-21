const rows = 3;
const columns = 3;

let currentTile;
let blankTile;

const correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const shuffled = ["3", "6", "1", "9", "8", "2", "7", "5", "4"];

window.onload = function () {
  //once loaded, bring the tiles
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      //loop through the grid

      let tile = document.createElement("img"); //create the elemnts from here instead of having it static in the HTML
      tile.id = r.toString() + "-" + c.toString(); //pointer to the place of the tile, its like a matrix :)
      tile.src = "./images/" + shuffled.shift() + ".jpg"; // the path

      

      //insert the tile to the board of the puzzle
      document.getElementById("puzzle").append(tile); // add to the puzzle div
    }
  }
}


