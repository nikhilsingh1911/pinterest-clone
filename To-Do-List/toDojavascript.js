const magicDom = document.querySelector('.magic');
const inputTask = document.querySelector("#toDotext");
const addBtn = document.querySelector(".btn");



const createNewTask = () => {
    let inputDiv = document.createElement("div");


    let doneBtn = document.createElement('button1');
    doneBtn.innerHTML = 'O';
    doneBtn.classList.add("donebtn");

    let deleteBtn = document.createElement('button2');
    deleteBtn.innerHTML = "x";
    deleteBtn.classList.add("deleBtn");
    if (inputTask.value === '') {
        alert("You have to enter the first")
    } else {
        inputDiv.classList.add("inputdiv");
        inputDiv.innerHTML = inputTask.value;
        magicDom.appendChild(inputDiv);
        inputDiv.appendChild(doneBtn);
        inputDiv.append(deleteBtn);
    }
    inputTask.value = "";
}


magicDom.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON2") {
        e.target.parentElement.remove();
    }
});


magicDom.addEventListener("click", (e) => {
    clickcount = 0;
    if (e.target.tagName === "BUTTON1") {
        if(clickcount===0){
            e.target.parentElement.style.background = 'rgb(7 217 42)';
            clickcount++;
        }
    }
});



addBtn.addEventListener("click", () => {
    createNewTask();
})