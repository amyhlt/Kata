const multiplicationTable = function(maxValue) {
    var arr=new Array();
    var add=0;
    
    for(let i=0;i<maxValue;i++){
      add=i+1;
      arr[i]=new Array();
      arr[i][0]=i+1;
      for(let j=0;(j+1)<maxValue;j++){
        arr[i][j+1]=arr[i][j]+add;
        
     }
    }
    return arr;
  };
  
  console.log(multiplicationTable(1));
  console.log(multiplicationTable(5));
  console.log(multiplicationTable(10));