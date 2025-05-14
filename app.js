const rows = 3;
const columns = 3;

const correctOrder = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


window.onload = function () {    //once loaded, bring the tiles
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) { //loop through the grid
      
      let tile = document.createElement("img"); //create the elemnts from here instead of having it static in the HTML
      tile.id = r.toString() + "-" + c.toString(); //pointer to the place of the tile, its like a matrix :)
      tile.src = "./images/" + correctOrder.shift() + ".jpg"; // the path

      
      document.getElementById("puzzle").append(tile); // add to the puzzle div
    }
  }
};
