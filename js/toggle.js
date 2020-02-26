var button = document.querySelector('button');
iscolor = false;

// button.addEventListener('click', function(){
//     if (iscolor === true){
//         document.body.style.background = 'white';    
//     }
//     else{
//         document.body.style.background = 'blue';
//     }
//     iscolor = !iscolor;
// });

button.addEventListener('click', function(){
    document.body.classList.toggle('colorchange');
});
