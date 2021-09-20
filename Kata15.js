var nameArray=[]
var obj=new Object();
const organizeInstructors = function(instructors) {
  for(let obj1 of instructors) {
        obj[obj1.course]=obj1.name;
        for(let obj2 of instructors){
            if(obj1==obj2)
                continue;
            if(obj2.course===obj1.course ){
                nameArray.push(obj1.name);
                obj[obj1.course]=nameArray;
            break;
            }   
        }   
    }
    return obj;   
};
  
console.log(organizeInstructors([
    {name: "Samuel", course: "iOS"},
    {name: "Victoria", course: "Web"},
    {name: "Karim", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  
nameArray=[];
console.log(organizeInstructors([
    {name: "Brendan", course: "Blockchain"},
    {name: "David", course: "Web"},
    {name: "Martha", course: "iOS"},
    {name: "Carlos", course: "Web"}
  ]));