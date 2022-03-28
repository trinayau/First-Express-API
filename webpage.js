// *************************************
// SETUP
const catSection = document.getElementById("allCatSection")
const firstCatSection = document.getElementById("catSection");

// **************************************

//Cats flow - appends cat by index
async function getCats(endpoint) {
   try {
        let url = 'http://localhost:3001';
        let apiUrl = url + endpoint;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const {id, name, age} = data;
        document.getElementById("cat").textContent = `Name: ${name}`;
        document.getElementById("age").textContent = `Age: ${age}`;
        firstCatSection.style.display = "block"; 
        catSection.style.display = "none";//clear allCats section if displayed
   } catch (err){
       console.error(err);
       alert(err);
   }

    
}

const getAllCats = async() => {
    try{
    const res = await fetch('http://localhost:3001/cats');
    const data = await res.json();
    appendCats(data);
    } catch (err){
        console.error(err);
        alert(err);
    }
};


const appendCats = (data) => {
    catSection.innerHTML = ""; //resets the catSection each time to prevent cats being added each time button pressed
    catSection.style.display = "block";
    firstCatSection.style.display = "none";
        data.forEach((catData) => {
            const newH4 = document.createElement('h4');
            newH4.innerHTML = `<div class="row">
            <div class="col-6">Name: ${catData.name} </div><div class="col-6">Name: ${catData.age} </div></div>`
            catSection.append(newH4);
        });
}

//Message flow - sends secret message
async function getMessage() {
    let url = 'http://localhost:3001/';
    const response = await fetch(url);
    const data = await response.json();
        //.catch(console.warn)
    document.getElementById("message").textContent = data[0].text;     
}

function renderMessage(data) {
    msg.textContent = data;
    msg.style.color = 'pink';
    document.body.append(msg)
}

const clearCats = () => {
    catSection.innerText = "";
        firstCatSection.style.display = "none";
    
};

