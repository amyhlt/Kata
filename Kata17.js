const urlDecode = function(text) {

    text=text.replace(/=/g,":");
    text= text.replace(/%20/g," ");
    text=text.replace(/&/g,",");
    params=text;
    var jsonStrig = '{';
    var items = params.split(',');
    for (var i = 0; i < items.length; i++) {
      var current = items[i].split(':');
      jsonStrig += '"' + current[0] + '":"' + current[1] + '",';
   }
    jsonStrig = jsonStrig.substr(0, jsonStrig.length - 1);
    jsonStrig += '}';
    var obj = JSON.parse(jsonStrig);
          
    return obj;
    };
    
    console.log(urlDecode("duck=rubber"));
    console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
    console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
    console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);