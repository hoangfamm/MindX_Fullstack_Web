var i = 0;
var allWord = [];
var allWordArray
var readingSpeed = 0;
for (i = 0; i < document.querySelectorAll("p").length; i++){
    console.log(document.querySelectorAll("p")[i].innerText.split(" "));
    allWord = allWord + document.querySelectorAll("p")[i].innerText.split(" ")
    
    
}

allWordArray = allWord.split(',')

console.log("allWord: " + allWord)
console.log("allWord type: " + typeof allWord)
console.log (allWordArray.length);
readingSpeed = Math.round(allWordArray.length / 220);
console.log("readingSpeed: " + readingSpeed);

document.getElementById("readingspeed").innerHTML = readingSpeed + " phút đọc"
document.getElementById("numberoftext").innerHTML = allWordArray.length + " chữ"




