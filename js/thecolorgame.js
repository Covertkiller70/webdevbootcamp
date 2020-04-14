var numsquares = 6;
var colors = genrandomColor(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colordisplay');
var messageDisplay = document.querySelector("#message");
var h1style = document.querySelector('h1');
var reset = document.querySelector('#reset');
var easy = document.querySelector('#easybtn');
var hard = document.querySelector('#hardbtn');

easy.addEventListener("click", function(){
   this.classList.add('selected');
   hard.classList.remove('selected');
   numsquares = 3;
   colors = genrandomColor(numsquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i = 0; i < squares.length; i++){
       if(colors[i]){
           squares[i].style.backgroundColor = colors[i];
       }else{
           squares[i].style.display = 'none';
       }
   }
})

hard.addEventListener('click', function(){
    easy.classList.remove('selected');
    this.classList.add('selected');
    numsquares = 6;
    colors = genrandomColor(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
})

colorDisplay.textContent = pickedColor;

reset.addEventListener('click', function(){
    colors = genrandomColor(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;

    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    }
    h1style.style.background = 'steelblue';
    this.textContent = 'New Game';
    messageDisplay.textContent = '';
})

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct!'
            changeColors(clickedColor);
            h1style.style.backgroundColor = clickedColor;
            reset.textContent = 'Play again?';
        }
        else{
            messageDisplay.textContent = 'Try again!'
            this.style.backgroundColor = '#232323';
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var rando = Math.floor(Math.random() * colors.length);
    return colors[rando];
}

function genrandomColor(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var rgb = "rgb(" + red + ", " + green + ", " + blue + ")";
    return rgb;
}