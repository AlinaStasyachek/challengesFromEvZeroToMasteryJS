//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes 
//these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 
//4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] 
//should return [[1,2], ["2", "3"]]

let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let val = [];
let more;
let whole = [];
function getValues(){
  let count = 0;
  for(let i=0; i<=Math.max.apply(null,arr); i++){
  if(arr.includes(i)){
    val.push(i);
  }
}
}

function check(array, value){

  return value.map(element =>{
   more = array.filter(v =>(v===element));
   return more;
  })

let some = check(arr, val)

function abc(){
  for(let i = 0; i<some.length; i++){
      console.log("for")
  if(some[i].length>1){
    console.log("if")
    whole.push(some[i]);
  }else if(some[i].length === 1){
    console.log("ifelse");
    whole.push(some[i][0])
  } 
}
}
//Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two 
//different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return 
//[1,3]

//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX
// color format it returns RGB and if you enter RGB color format it returns HEX.