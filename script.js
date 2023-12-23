const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTash(){
    if(inputBox.value == ''){
        alert("Tu dois ecrire quelque chose!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}