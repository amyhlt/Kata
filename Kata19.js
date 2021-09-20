let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let a=[];
let IsAttack=false;
let found=0;
let generatedBoard = function(whiteQueen, blackQueen){
      for(let i=0;i<8;i++)
      {
        var b=[];
        for(let j=0;j<8;j++)
        {   
            b[j]=0;

        }
        a[i]=b;
      }
      a[whiteQueen[0]][whiteQueen[1]]=1;
      a[blackQueen[0]][blackQueen[1]]=1;
      return a;   
}
function queenThreat(generatedBoard){
    let posx=0;
    let posy=0;
   
    for(let i=0;i<8;i++)
      {
        for(let j=0;j<8;j++)
        {
           if(generatedBoard[i][j]===1){
             posx=i;
             posy=j;
             found=1;
             break;
            }
           
        }
        if(found===1)
        break;
      }
     
    let j=posy+1;
    console.log([posx,posy]);
    for(let i=posx;i<8;i++)
      {
        for(;j<8;j++)
        {
            console.log([i,j]);
            if(generatedBoard[i][j]===1&&(i===posx||j===posy||(i===posy&&j===posx))){
                console.log([i,j]);
               IsAttack=true;
                
            }
        }
        j=0;
      }
      return IsAttack;
}
console.log(generatedBoard(whiteQueen,blackQueen));
console.log(queenThreat(generatedBoard(whiteQueen, blackQueen)));