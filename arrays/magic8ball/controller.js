const arrayAdvices = model.data.advices;

function generateAnswer(){
let lastGenerated = document.getElementById('number8').textContent;

let randomAdvice = arrayAdvices[Math.floor(Math.random() * arrayAdvices.length)]; 
if(randomAdvice.text===lastGenerated){
    randomAdvice = arrayAdvices[Math.floor(Math.random() * arrayAdvices.length)];
    if (randomAdvice.text===lastGenerated){
        alert("Please upload website again");
    }
}
document.getElementById('number8').textContent = `${randomAdvice.text}`;
}
