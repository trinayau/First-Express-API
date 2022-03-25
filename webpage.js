// Setup 
const msgBtn = document.querySelector("#msgBtn"); 
const catBtn = document.getElementById("catBtn");
const catsList = document.querySelector("ul");

//Bind event listeners
msgBtn.addEventListener('click', getMessage);
catBtn.addEventListener('click', getCats);

// **************************************

//Cats flow - appends cat by index
function getCats() {
    fetch('http://localhost:3001/cats')
        .then(r => r.json())
        .then(appendCats)
        .catch(console.warn)
}

function appendCats() {
    
}



//Message flow - sends secret message
function getMessage() {
    fetch('http://localhost:3001')
        .then(r => {console.log(r); r.json()})
        .then(renderMessage)
        //.catch(console.warn)
  
}

function renderMessage(data) {
    console.log(data);
    const msg = document.createElement('p');
    msg.textContent = data.message;
    msg.style.color = 'pink';
    document.body.append(msg)
}
