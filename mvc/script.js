//Model
let name1 = "________";
let age = "________";
let city = "________";
let color = "________";

//View
updateView();
function updateView(){
    let html =`
    <div id="historyToFill">
    <span id="fillTheName">
        <span id="nameToFill">${name1}</span> was a 
        <span id="ageToFill">${age}</span>
        -year-old who lived in the vibrant city of 
        <span id="cityToFill">${city}</span>. 
        Known for their love of all things 
        <span id="colorToFill">_${color}</span>
        , they surrounded themselves with objects, 
        clothes, and even furniture in their favorite shade.  </span>

</div>
`
document.getElementById('historyDiv').innerHTML = html;
}

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
    updateView();

}
function setCity(){
    let buttonName = document.getElementById('city');
    city.innerHTML = buttonName.outerHTML;
    buttonName.style.opacity = 0.5;
    updateView();
}
function setColor(){
    let buttonName = document.getElementById('color');
    color.innerHTML = buttonName.outerHTML;
    buttonName.style.opacity = 0.5;
    updateView();
}