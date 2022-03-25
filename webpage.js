// Setup 
const catsList = document.querySelector("ul");

//Bind event listeners

// **************************************

//Cats flow - appends cat by index
async function getCats(endpoint) {
    let url = 'http://localhost:3001';
    let apiUrl = url + endpoint;
    const response = await fetch(apiUrl);
    const data = await response.json();
        //.catch(console.warn)
    const {id, name, age} = data
    document.getElementById("cat").textContent = name;

    
}


//Message flow - sends secret message
async function getMessage() {
    let url = 'http://localhost:3001/';
    const response = await fetch(url);
    const data = await response.json();
        //.catch(console.warn)
    document.getElementById("message").textContent = data[0].text;
    console.log(data);        
}

function renderMessage(data) {
    
    console.log(data);
    msg.textContent = data;
    msg.style.color = 'pink';
    document.body.append(msg)
}
