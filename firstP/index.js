let img = document.querySelector('img');
let left =document.querySelector('.left-btn');
let right =document.querySelector('.right-btn');
let up =document.querySelector('.up-btn');
let down =document.querySelector('.down-btn');
let container =document.getElementById('container')
let pixleX=0;
let pixleY=0

function toRight(){
 img.style.left=`${pixleX+=15}px`;
 img.style.transform="rotateY(180deg)"
 if (pixleX>window.innerWidth-10){
   pixleX=0
 }
}
function toLeft(){
  img.style.left=`${pixleX-=15}px`;
img.style.transform="rotateY(180deg)"
  if (pixleX<0){
    pixleX=0
  }
 }
 function toDown(){
  img.style.top=`${pixleY+=15}px`;
  img.style.transform="rotate(90deg)"
  if (pixleY>window.innerHeight-10){
    pixleY=0
  }
 }
 function toUp(){
  img.style.top=`${pixleY-=15}px`;
  img.style.transform="rotate(90deg)"
  if (pixleY<0){
    pixleY=0
  }
 }
 

right.addEventListener('click',toRight);
left.addEventListener('click',toLeft);
down.addEventListener('click',toDown);
up.addEventListener('click',toUp);
// creat game 
let bonus=document.createElement('img');
container.appendChild(bonus)
bonus.src ='dolar2.gif'
bonus.className='bonus';


function initialPosition(){

  let randomX=Math.floor(Math.random()* (window.innerWidth-100))
  let randomY=Math.floor(Math.random()* (window.innerHeight-500))
  bonus.style.left=`${randomX+Math.floor(Math.random()* (window.innerWidth-100))}px`;
     bonus.style.top=`${randomY}px`;
  console.log(randomX , randomY) 
   }

initialPosition()

//initialPosition()
  function creatGame(){
 
  if (pixleX- randomX <20 && randomY -pixleY<50){
    initialPosition()
       }  }