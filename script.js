 
 const boxes = document.querySelectorAll('.box')

 const winner = document.querySelector('.winnerPlayer')

let currentPlayer;

let gameInfo;
let winPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
 




function initGame(){
    currentPlayer = 'X';
    gameInfo = ['','','','','','','','',''];

    boxes.forEach((box,index)=>{

         if(gameInfo[index]===''){
            box.addEventListener('click',()=>{
                box.textContent = currentPlayer;
                gameInfo[index] = currentPlayer;

                winCheck(index)
    
                if(currentPlayer === 'X'){
                    currentPlayer = 'O'
                }else{
                    currentPlayer = 'X'
                }
                console.log(gameInfo)
    
        
            })
      }
        
     })



}
 initGame();
 function winCheck(index){
    
    winPosition.forEach((position,index)=>{
        if((gameInfo[position[0]]!='' || gameInfo[position[1]]!='' || gameInfo[position[2]]!='')
        && (gameInfo[position[0]] === gameInfo[position[1]] && gameInfo[position[1]] === gameInfo[position[2]])
        ){
            console.log(gameInfo[position[0]])
             boxes[position[0]].classList.add('winner')
             boxes[position[1]].classList.add('winner')
             boxes[position[2]].classList.add('winner')

             boxes.forEach((box)=>{
                box.style.pointerEvents = 'none';
             })

             winner.textContent = `Winner is : ${gameInfo[position[0]]}`;
        }
    })

 }