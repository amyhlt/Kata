// check the number of vowels
// parameter:data
const numberOfVowels = function(data) {
    
    let num=0;
    for(let i=0;i<data.length;i++){
        if(data[i]==='o'||data[i]==='u'||data[i]==='a'||data[i]==='e'||data[i]==='i')
        {
            num++;
        }

    }
    return num;

  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));