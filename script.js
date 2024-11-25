//Model
let name1 = document.getElementById("nameToFill");
let age = document.getElementById("ageToFill");
let city = document.getElementById("cityToFill");
let color = document.getElementById("colorToFill");

//View
// function checkIfCorrect(){
//     name1 = document.getElementById("nameToFill")
//     age = document.getElementById("ageToFill")
//     city =  document.getElementById("cityToFill")
//     color = document.getElementById("colorToFill")
// }

//Controller
function setName(){
    let buttonName = document.getElementById('name');
    name1.innerHTML = buttonName.outerHTML;
    buttonName.style.opacity = 0.5;
}
function setAge(){
    let buttonName = document.getElementById('age');
    age.innerHTML = buttonName.outerHTML;
    buttonName.style.opacity = 0.5;
}
function setCity(){
    let buttonName = document.getElementById('city');
    city.innerHTML = buttonName.outerHTML;
    buttonName.style.opacity = 0.5;
}
function setColor(){
    let buttonName = document.getElementById('color');
    color.innerHTML = buttonName.outerHTML;
    buttonName.style.opacity = 0.5;
}