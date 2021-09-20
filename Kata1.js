function sumLargestNumbers(arr1){
    let max=arr1[0];
    let smax=arr1[1];
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]>=max){
            smax=max;
            max=arr1[i];   
        }
    }
    return max+smax;
 }
 console.log(sumLargestNumbers([1, 10]));
 console.log(sumLargestNumbers([1, 2, 3]));
 console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));