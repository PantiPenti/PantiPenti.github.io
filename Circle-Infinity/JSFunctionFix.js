function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}

function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}

async function PrintWordByWord(Sentence, Object, Interval = 100){
    var PrintString = "";
    for(var i = 0; i < Sentence.length; i++){
       if(Sentence[i] == "/" && Sentence[i+1] == "n"){
        PrintString = PrintString + "<br>";
        i++;
       }
       else PrintString = PrintString + Sentence[i];
       document.getElementById(Object).innerHTML = PrintString;
       await sleep(Interval);
    }
}
function In(value,array){
    for(var i = 0; i < array.length; i++){
        if (array[i] == value){
            return true;
        }
     }
     return false;
}