const repeatNumbers = function(data) {
    var str='';
    for(let i=0;i<data.length;i++)
     {
        for(let k=0;k<data[i][1];k++)
        {
          str+=data[i][0];
        }
        if(i<data.length-1)
        {
         str+=",";
        }
       
     }
     return str;
    
  };
  console.log(repeatNumbers([[1, 10]]));
  console.log(repeatNumbers([[1, 2], [2, 3]]));
  console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));