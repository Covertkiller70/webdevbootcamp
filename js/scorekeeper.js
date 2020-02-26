var pbtn1 = document.querySelector('#p1');
var pbtn2 = document.querySelector('#p2');
var reset = document.querySelector('#reset');
var playto = document.querySelector('p');
var playtopick = document.querySelector('input');
var score = document.querySelector('h1');

var p1score = 0;
var p2score = 0;

pbtn1.addEventListener('click', function(){
    p1score += 1;
    score.textContent = p1score + ' to ' + p2score;
    checkwin();
});

pbtn2.addEventListener('click', function(){
    p2score += 1;
    score.textContent = p1score + ' to ' + p2score;
    checkwin();
});

reset.addEventListener('click', function(){
    p1score = 0;
    p2score = 0;
    score.textContent = '0 to 0';
    playto.textContent = 'Play to: 5';
    playtopick.value = '5'
    pbtn1.disabled = false;
    pbtn2.disabled = false;
});

playtopick.addEventListener('input', function(){
    playto.textContent = 'Playing to: ' + this.value;
    checkwin();
});

function checkwin(){
    if (p1score > playtopick.value){
        score.innerHTML = score.innerHTML.replace(p1score, '<span style="color: green">' + p1score + '</span>');
        pbtn1.disabled = true;
        pbtn2.disabled = true;
    }
    else if(p2score > playtopick.value){
        score.innerHTML = score.innerHTML.replace(p1score, '<span style="color: green">' + p1score + '</span>');
        pbtn1.disabled = true;
        pbtn2.disabled = true;
    }
}