let found1=false;  
let found2=false;        
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
    
    for(let i=0;i<recipes.length;i++){
          for(j=0;j<bakeryA.length;j++){
               if(bakeryA[j]===recipes[i].ingredients[0]){
                found1=true;
                break;
               }
               if(bakeryA[j]===recipes[i].ingredients[1]){
                   found2=true;
                   break;
               }
          }
          
          if(found1===true)
          {  
            for(j=0;j<bakeryB.length;j++)
            {
             if(bakeryB[j]===recipes[i].ingredients[1])
             {    
                return recipes[i].name;
             }
            }
          }
          else if(found2===true)
          {  
            for(j=0;j<bakeryB.length;j++)
            {
             if(bakeryB[j]===recipes[i].ingredients[0])
             { 
                  return recipes[i].name;
             }
            }
          }
          found1=false;
          found2=false;  
  }
}
let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
  let bakeryB = ['milk', 'butter', 'cream cheese'];
  let recipes = [
      {
          name: 'Coconut Sponge Cake',
          ingredients: ['coconut', 'cake base']
      },
      {
          name: 'Persian Cheesecake',
          ingredients: ['saffron', 'cream cheese']
      },
      {
          name: 'Custard Surprise',
          ingredients: ['custard', 'ground beef']
      }
  ];
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));
  
  bakeryA = ['potatoes', 'bay leaf', 'raisins'];
  bakeryB = ['red bean', 'dijon mustard', 'apples'];
  recipes = [
      {
          name: 'Potato Ganache',
          ingredients: ['potatoes', 'chocolate']
      },
      {
          name: 'Sweet Fish',
          ingredients: ['anchovies', 'honey']
      },
      {
          name: "Nima's Famous Dijon Raisins",
          ingredients: ['dijon mustard', 'raisins']
      }
  ];
  console.log(chooseRecipe(bakeryA, bakeryB, recipes));