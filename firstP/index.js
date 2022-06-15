let img = document.querySelector('img');
let left =document.querySelector('.left-btn');
let right =document.querySelector('.right-btn');
let up =document.querySelector('.up-btn');
let down =document.querySelector('.down-btn');
let container =document.getElementById('container')

// creat game 
let bonus=document.createElement('img');
container.appendChild(bonus)
bonus.src ='dolar2.gif'
bonus.className='bonus';

function main (){
  let randomX=0;
  let randomY= 0;
  let pixelX=0;
  let pixelY=0;
   //events
 function events(){

   function toRight(){
      img.style.left=`${pixelX+=20}px`;
      img.style.transform="rotateY(360deg)"

      if (pixelX>(window.innerWidth-100)){
         pixelX=0
       }
      console.log(pixelX,pixelY) 
      createGame()
    } 

    function toLeft(){
      img.style.left=`${pixelX-=20}px`;
      img.style.transform="rotateY(180deg)"
      if (pixelX<0){
        pixelX=0
      }
      createGame();
    }

   function toDown(){
      img.style.top=`${pixelY+=20}px`;
      img.style.transform="rotate(90deg)"
      if (pixelY>window.innerHeight-400){
        pixelY=0
      }
     createGame()
    }

    function toUp(){
       img.style.top=`${pixelY-=20}px`;
       img.style.transform="rotate(270deg)"
         if (pixelY<0){
           pixelY=0
         }
       createGame()
     }
 

    right.addEventListener('click',toRight);
    left.addEventListener('click',toLeft);
    down.addEventListener('click',toDown);
    up.addEventListener('click',toUp);
  }

  //rules
  function createGame(){
    
  }
       function initialPosition(){

     randomX=Math.floor(Math.random()* (window.innerWidth - 100));
     randomY=Math.floor(Math.random()* (window.innerHeight - 400));
     bonus.style.left=`${randomX}px`;
     bonus.style.top=`${randomY}px`;

   }

   //rungame
   createGame()
   initialPosition()
   events()
}

 main()