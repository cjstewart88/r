/*
  This program was 100% generated by ChatGPT with common language input like:

  "Can you make me a game that moves a character represented by the
  letter P around a 20x20 grid when the user uses WASD. Write it in node"

  I made 0 modifications... other than this comment.

  To run it install the node modules with:
    npm install
*/
const readline = require('readline');
const keypress = require('keypress');

// Make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Use WASD to move and q to quit', (answer) => {
  if (answer === 'exit') {
    console.log('Exiting program');
    process.exit();
  } else {
    console.log(`You entered: ${answer}`);
    rl.close();
  }
});

// Initialize variables for the grid and "P" position
let grid = [];
let row = 0;
let column = 0;

// Populate the grid with periods
for (let i = 0; i < 20; i++) {
  let row = [];
  for (let j = 0; j < 20; j++) {
    row.push('.');
  }
  grid.push(row);
}

// Place the "P" in the first row and first column
grid[row][column] = 'P';

// Print the grid
function printGrid() {
  for (let i = 0; i < 20; i++) {
    console.log(grid[i].join(''));
  }
}

// Main loop
process.stdin.on('keypress', (char, key) => {
  // Clear the screen
  console.log('\x1Bc');

  // Check the character and update the grid and position accordingly
  switch (key.name) {
    // Up arrow
    case 'w':
      if (row > 0) {
        grid[row][column] = '.';
        row--;
        grid[row][column] = 'P';
      }
      break;
    // Down arrow
    case 's':
      if (row < 19) {
        grid[row][column] = '.';
        row++;
        grid[row][column] = 'P';
      }
      break;
    // Right arrow
    case 'd':
      if (column < 19) {
        grid[row][column] = '.';
        column++;
        grid[row][column] = 'P';
      }
      break;
    // Left arrow
    case 'a':
      if (column > 0) {
        grid[row][column] = '.';
        column--;
        grid[row][column] = 'P';
      }
      break;
  }

  // Print the grid
  printGrid();
});

process.stdin.setRawMode(true);
process.stdin.resume();
