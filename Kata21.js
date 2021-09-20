let prompt = require("prompt-sync")();

let str;
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
const randomNum=  randomInteger(1, 10)
console.log(randomNum);
let answer = prompt("Guess a number: ");

function guessNumber()
{   
    
    let attemptNum=1;
    while(answer!==randomNum)
    {
       
       if(isNaN(answer)){
        console.log("Please enter a number!");
        
      }
      else if(answer>randomNum){
        attemptNum++;
        console.log("too high");
         
       }
       else if(answer<randomNum){
        attemptNum++;
        console.log( "too low");
        
        }
        else
           break;
        answer = prompt("Guess a number: ");
    }
    
    return "You got it! You took "+ attemptNum +" attempts!";
    
}
console.log(guessNumber());