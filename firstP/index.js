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
let score = document.body.appendChild(document.createElement('span'));

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
 window.addEventListener('keydown',moveByKeys)
function moveByKeys(e){
  if (e.keyCode===39||e.keyCode===68){
    toRight()
  }
  else if (e.keyCode===37|| e.keyCode===65){
    toLeft()
  }
  else if (e.keyCode===38 || e.keyCode===87){
    toUp()
  }
  else if (e.keyCode===40 || e.keyCode === 83){
    toDown()
  }

}

    right.addEventListener('click',toRight);
    left.addEventListener('click',toLeft);
    down.addEventListener('click',toDown);
    up.addEventListener('click',toUp);
  }

  //rules

  let counter = -1;
  function createGame(){

    let maxX = randomX + (img.width / 2);
    let minX = randomX - (img.width / 2);
    let maxY = randomY + (img.height/ 2);
    let minY = randomY - (img.height/ 2);
    

    if ((pixelX <= maxX && pixelX >= minX) && (pixelY <= maxY && pixelY >= minY)){
      counter++
      score.textContent = ` your score is: ${counter}`
      initialPosition()
    } 
    
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