//Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX
// color format it returns RGB and if you enter RGB color format it returns HEX.

function HEXtoRGB(hex){
  let rgb = [];
  let first = hex.substring(0,2);
  let second = hex.substring(3,4);
  let third = hex.substring(5,6);
  let code = [first,second,third];
  for (let i = 0; i<code.length; i++){
    rgb.push(parseInt(code[i],16));
  }
   console.log(rgb.join(" "));
  
  }
let rgb = [255,0,0];
let hex=[];
function RGBtoHEX(rgbCode){
  for(let j = 0; j<rgbCode.length; j++){
   let conv = rgbCode[j].toString(16);
    hex.push(conv)
  }
  console.log(hex.join(""))
}

function conv(num){
  if(typeof(num) === "string"){
    HEXtoRGB(num);
  }
  else{
    RGBtoHEX(num);
  }
}