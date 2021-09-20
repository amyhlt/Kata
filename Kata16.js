const makeCase = function(input,caseChoice){
    const newinput=input.split(" ");
    var arr=[];
    var arrCase=[];
    arrCase.push(caseChoice);
    const newCase=arrCase.join();
    
    switch(newCase)
    {
        case "camel":
                for(let i=1;i<newinput.length;i++)
                {
                newinput[i]=newinput[i][0].toUpperCase()+newinput[i].substr(1);
                }
                input=newinput.join("");
                break; 
        case "pascal":
                for(let i=0;i<newinput.length;i++)
                {
                    newinput[i]=newinput[i][0].toUpperCase()+newinput[i].substr(1);
                }
                input=newinput.join("");
                break;
            
        case "snake":
                input=newinput.join("_");
                break;
        case "kebab":
                input=newinput.join("-");
                break;
        case "title":
                for(let i=0;i<newinput.length;i++)
                {
                    newinput[i]=newinput[i][0].toUpperCase()+newinput[i].substr(1);
                    input=newinput.join(" ");
                }
                break;
        case "vowel":
                for(let i=0;i<newinput.length;i++)
                {
                     for(let j=0;j<newinput[i].length;j++)
                    {
                       if(newinput[i][j]==='a'||newinput[i][j]==='o'||newinput[i][j]==='u'||newinput[i][j]==='e'||newinput[i][j]==='i')
                       {
                         arr.push(newinput[i][j].toUpperCase());
                       }
                       else
                       {
                        arr.push(newinput[i][j]);
                       }
                       
                    }
                    arr.push(" ");
                }
                input=arr.join(" ");
                break;   
        case "consonant":
               for(let i=0;i<newinput.length;i++)
               {
                  for(let j=0;j<newinput[i].length;j++)
                  {
                     if(!(newinput[i][j]==='a'||newinput[i][j]==='o'||newinput[i][j]==='u'||newinput[i][j]==='e'||newinput[i][j]==='i'))
                     {
                       arr.push(newinput[i][j].toUpperCase());
                     }
                     else
                     {
                      arr.push(newinput[i][j]);
                     }
                  }
                 arr.push(" ");
                }
               input=arr.join(" ");
               break;
            
        case "upper,snake":
            for(let i=0;i<newinput.length;i++)
            {
               newinput[i]= newinput[i].toUpperCase();
               
            }
           input=newinput.join("_");
            break;
        default:
    }
    return input;
}
  
 console.log(makeCase("this is a string", "camel"));
 console.log(makeCase("this is a string", "pascal"));
 console.log(makeCase("this is a string", "snake"));
 console.log(makeCase("this is a string", "kebab"));
 console.log(makeCase("this is a string", "title"));
 console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));