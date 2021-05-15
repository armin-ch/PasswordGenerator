function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let generate = document.getElementById("generate")

generate.addEventListener("click",function(){
let length = prompt("password length?")
let lowerCase = confirm("lower case?")
let upperCase = confirm("upper case?")
let nums = confirm("nums?")
let specChars = confirm("special characters?")
let lowerArray = "abcdefghijklmnopqrstuvwxyz"
let upperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numArray = "0123456789"
let specArray = "!@#$%^&*()"
let chosenArray = ""
let password = ""
if(lowerCase){
  chosenArray+=lowerArray
}
if(upperCase){
  chosenArray+=upperArray
}
if(nums){
  chosenArray+=numArray
}
if(specArray){
  chosenArray+=specArray
}
for(let i=0; i<length; i++){
  password += chosenArray[randomNumber(0, chosenArray.length)]
}
//console.log(password)
document.getElementById('password').innerHTML = password
}
)