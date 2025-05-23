# 🧩 Sliding Puzzle Game

![sliding-puzzle](./images/puzzle.png)


🎮 **Demo**: [Play the Game](https://muneraisa.github.io/puzzle/)

---

## 💡 How to Play

### 🎯 Objective
Rearrange the scrambled **3x3 sliding puzzle tiles** to form the correct image.

### 🎮 Game Instructions
- Drag and drop the tiles to reorder them.
- You can **only move a tile** if it's **adjacent** to the blank tile (either horizontally or vertically).
- The image will be considered solved when all tiles are in the correct order.

---

## 🏆 Win Condition
- Complete the puzzle by arranging all tiles correctly **within 20 moves**.
- If you exceed 20 moves, you **lose the game**.

---

## 🔁 Restarting the Game
- After a win or loss, click **“Play Again!”** to reset and try again.

---

## 🔧 Code Overview

### 🧠 Key Functions
- `startGame()` – Initializes the board and shuffles tiles.
- `dragStart()` / `dragDrop()` / `dragEnd()` – Handle the drag and drop interaction.
- `checkAdjacent()` – Ensures only adjacent tiles can be moved.
- `checkWin()` – Verifies if the current tile order matches the original order.
- `Loss()` – Displays loss message if more than 20 moves are made.

### 💻 Features
- Uses **HTML Drag and Drop API** for tile movement.
- Keeps track of the number of moves.
- Displays win or loss message with a "Play Again" button.

---

## 🖌️ Styling
- Styled using **CSS**.
- Custom fonts from [Google Fonts](https://fonts.google.com/).

---

## 📚 References

- 🔗 [Array.prototype.join() – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- 🔗 [Array.prototype.push() – MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- 🔗 [HTML Drag and Drop API – MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

---

## 👩‍💻 Created By
**Muneera Isa** – as part of GA Unit 1 Project
