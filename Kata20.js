let x=0;
let y=0;
const blocksAway = function(directions) {
    let arr1=[];
    let arr2=[];
    let direction;
    
    for(let i=0;i<directions.length;i+=2){
        arr1.push(directions[i]);
        arr2.push(directions[i+1])
    }
    
    if(arr1[0]==="right"){direction="East";x=x+arr2[0];}
    else{direction="West";x=x-arr2[0]}
    for(let i=1;i<arr1.length;i++){
         direction=AfterDirection(direction,arr1[i],arr2[i]);
         
    } 
        
    return [x,y];
  };
  const AfterDirection = (beforeTurn, turn,step) => {
    var direction;
    switch (beforeTurn) {
      case 'East':
        if(turn==="left"){
            direction="North";y+=step; return direction; 
        }
        else {
            direction="South";y-=step; return direction;   
        }
         break;
      case 'West':
        if(turn==="left"){
            direction="South";y-=step; return direction; 
        }
        else {
            direction="North";y+=step; return direction; 
        }
         break;
      case 'North':
        if(turn==="left"){
            direction="West";x-=step; return direction;
         }
        else {
            direction="East";x+=step; return direction; 
        }
         break;
      case 'South':
        if(turn==="left"){
            direction="East";x+=step; return direction; 
        }
        else {
            direction="West";x-=step; return direction; 
        }
         break;
      default:
        break;
    }
}
  console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
  x=0;
  y=0;
  console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
  x=0;y=0;
  console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));