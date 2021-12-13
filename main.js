const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

let board = null;

//calculate size of canvas from constants.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

//Scale blocks
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

function play() {
    board = new Board(ctx);
    draw();
    //console.table(board.grid);
}

function draw() {
    const { width, height } = ctx.canvas;
    ctx.clearRect(0, 0, width, height);

    board.piece.draw();
}