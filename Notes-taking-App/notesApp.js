
const mainArea = document.querySelector(".main");
const createBtn = document.querySelector(".btn");

const saveData = () => {
    const textVal = document.querySelectorAll(".input-Box textarea");
    console.log(textVal);
    const dita = [];
    textVal.forEach((note) => {
        dita.push(note.value);
    })
    if (dita.length === 0) {
        localStorage.removeItem("textVal");
    } else {
        localStorage.setItem("textVal", JSON.stringify(dita));
    }
}




const addNote = (text = "") => {
    let inputBox = document.createElement("div");
    mainArea.appendChild(inputBox);
    inputBox.classList.add("input-Box");


    const btnSave = document.createElement("button");
    const btnDelete = document.createElement("button");


    let inputText = document.createElement("textarea");
    inputText.classList.add("input-text");
    btnSave.classList.add("savebtn");
    btnDelete.classList.add("deletebtn");
    btnSave.innerHTML = "Save";
    btnDelete.innerHTML = "Delete";

    inputText.innerHTML = `${text}`;

    inputBox.appendChild(btnDelete)
    inputBox.appendChild(btnSave)
    inputBox.append(inputText);
    saveData();
}


mainArea.addEventListener("click", (e) => {
    if (e.target.className === "deletebtn") {
        e.target.parentElement.remove();
        saveData();
    }
})
mainArea.addEventListener("click", (e) => {
    if (e.target.className === "savebtn") {
        saveData();
    }
})


const reloadfunc = () => {
    const lsNotes = JSON.parse(localStorage.getItem("textVal"));
    if (lsNotes === null) {
        addNote()
    }
    else {
        lsNotes.forEach((lsNote) => {
            addNote(lsNote)
        })
    }
}
Window.onload = reloadfunc();