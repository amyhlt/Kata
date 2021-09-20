const urlEncode = function(text) {
    // Put your solution here
    var arr=text.split(" ");;
    var str=arr.join("%20");
    return str;
 };
  
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));