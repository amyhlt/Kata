const camelCase = function(input) {
    
    const newinput=input.split(" ");
    //convert the first letter after space to uppercase 
    for(let i=1;i<newinput.length;i++)
    {
        newinput[i]=newinput[i][0].toUpperCase()+newinput[i].substr(1);
    }
    input=newinput.join("");
    //remove space to concat 
    for(let i=0;i<input.length;i++)
    {
        if(input.charAt(i)===" ")
       {  
        let str1;
        let str2;
        str1=input.substring(0,i);
        str2=input.substring(i+1,input.length)
        input=str1.concat(str2);
        i=0;
       }

    }
    return input;
  };
  
  console.log(camelCase("this is a string"));
  console.log(camelCase("loopy lighthouse"));
  console.log(camelCase("supercalifragalisticexpialidocious"));