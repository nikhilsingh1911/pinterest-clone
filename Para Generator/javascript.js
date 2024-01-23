const input = document.getElementById("numWords");
const btn = document.getElementById(Butn);
const para = document.querySelector(".paras");

const creatingPara = (words) => {
    
    let text = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // let rand = Math.floor(Math.random()*10);
    for (let i = 0; i < words; ++i) {
        const j = (Math.random() * 26).toFixed(0);
        text += letters[j];
    }
    return text;

    // return text;
};

console.log(creatingPara())
let numOfWords;
const generatePara = () => {
    numOfWords = Number(input.value);
    let finalWords = "";
    for (let i = 0; i < numOfWords; ++i) {
    const randomNumber = (Math.random() * 15).toFixed(0);
    if(numOfWords%2==0){
        finalWords += creatingPara(randomNumber).toLowerCase();
    }
    else{
        finalWords += creatingPara(randomNumber);
    }
       finalWords += " ";
    }

    para.innerHTML = finalWords;
};
// btn.addEventListener("click", () => {
//     console.log(input.value);
// })

