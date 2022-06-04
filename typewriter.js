
var myText = ["Blog - Nơi tâm tư hóa thành ngôn từ"];
var spd = 100;
var textPosition = 0;

function typeWriter(){
    document.getElementById("typewriting").innerHTML = myText[0].substring(0, textPosition);

    if(textPosition++ != myText[0].length){
        setTimeout(typeWriter, spd);
    } else if (textPosition++ == myText[0].length){
        setTimeout(typeWriter, spd);

    }
        
}

window.addEventListener("Load", typeWriter());
