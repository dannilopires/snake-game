let canvas = document.getElementById("snake");
let context = canvas.getContext('2d');
let box = 32;
let snake = [];
snake[0] ={
    x: 10*box,
    y: 10* box
}

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16*box, 16*box);
}

function criarSnake(){
    for(i=0; i < snake.length; i++) {
        context.fillStyle = "black";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }

}

criarBG();

criarSnake();
