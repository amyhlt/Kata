const squareCode = function(message) {
    //remove spaces from a string
    message = message.replace(/\s/g, '');
    var message1="";
    var len=Math.ceil(Math.sqrt(message.length));
    var strArr = [];
    var newArr=[""];
    var str='';
    var maxlen=0;
    for (let i = 0, l = message.length; i < l/len; i++) {
        var a = message.slice(len*i, len*(i+1));
        strArr.push(a);
    }
    
    for(let m=0;m<strArr.length;m++){
        if(strArr[m].length>maxlen)
          maxlen=strArr[m].length;
    }
   
    for(let i=0;i<maxlen;i++){
        for(let j=0;j<strArr.length;j++)
        {
           if(i<strArr[j].length)
             str+= strArr[j][i];
        }
       
        newArr[i]=str;
        str="";
        

    }
    return newArr.join(" ");;
  };
  
  console.log(squareCode("chill out"));
  console.log(squareCode("feed the dog"));
  console.log(squareCode("have a nice day"));
  console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));