const container= document.querySelector("container");
const btn = document.querySelector('start_btn');
const scoreContainer=document.querySelector('score');
const timeContainer=document.querySelector('time');

btn.onclick = function(){
    const score= 0;
    const time=10;
    container.innerHTML="";
    const interval=setInterval(function showTarget(){
        const target = document.createElement('images');
        target.id="target";
        target.src="silly.png"
        container.appendChild(target);
        target.style.top=Math.random() *(500 - target.offsetHeight) + 'px';
        target.style.left = Math.random() *(600 - target.offsetWidth) + 'px';
          
setTimeout(function(){
    target.remove();

}, 2000)

// quand on clique sur le target
target.onclick= function () {
    score+=1;
    target.style.display= 'none';
}
time=1;
//  afficher les infos
scoreContainer.innerHTML= 'score: $ { score} '
timeContainer.innerHTML= 'temps: $ {time} '

if (time==0) {
    clearInterval(interval);
    container.innerHTML="le jeu est terminé"
    
}
 }, 1000);
 
}
