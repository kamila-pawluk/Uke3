function updateView(){
    app.innerHTML = /*HTML*/ `
    <div id="container">
    <h1>Get answer from magic ball</h1>
    
</div>
<div id="ball" class="drawBall">
    <div id="adviceField" class="advice cut">
    <p id="number8">8</p>    
    </div>
</div>
<div>
<button id="answerButton" onclick="generateAnswer()">Get answer</button>
</div>
`}