//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two 
//different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return 
//[1,3]
let array = [1,2,3,4,5,6,7,8,9,10]
function findSum(arr, sum){
  let bef = 0;
for(let i=0; i<=arr.length; i++){
  bef=arr[i];
  for (var j = 0; j<=arr.length; j++) {
    if((bef+arr[j]) === sum){
      let suma =[bef, arr[j]]
      console.log(suma);
      return suma;
    }  
  }
}
}
