const calculateChange = function(total, cash) {
    var obj=new Object();
    var change=cash-total;
    var m=change;
    
      while(m>0)
      {
       if(m>=1000){
           obj['tenDollar']=parseInt(m/1000);
           m=(m%1000);
                 }
       else if(m>=500){
           obj['fiveDollar']=parseInt(m/500);
           m=m%500;
                 }
       else if(m>=200){
           obj['twoDollar']=parseInt(m/200);
           m=m%200;
           console.log(m);
                 }
       else if(m>=100){
           obj['oneDollar']=parseInt(m/100);
           m=m%100;
       }
       else if(m>=25){
           obj['quarter']=parseInt(m/25);
           m=m%25;
       }
       else if(m>=10){
           obj['dime']=parseInt(m/10);
           m=m%10;
       }
       else if(m>=5){
           obj['nickel']=parseInt(m/5);
           m=m%5;
       }
    else if(m>=1){
           obj['penny']=parseInt(m/1);
           m=m%1;
    }
      }
      return obj;
   };
 console.log(calculateChange(1787, 2000));
 console.log(calculateChange(2623, 4000));
 console.log(calculateChange(501, 1000));