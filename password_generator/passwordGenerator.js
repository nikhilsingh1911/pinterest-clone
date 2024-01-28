//abhi tk cla ni h ye code


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "~!@#$%^&*()-";
const passBox = document.querySelector("#mainText");

const btn = document.querySelector("#generate");
const upperInput = document.querySelector("#uppercase");
const lowerInput = document.querySelector("#lowercase");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");
const passlength = document.querySelector("#passlength");

// console.log(password)
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}
const lengt = 0;
const generatePassword = (password= "") => {
    if (upperInput.checked) {
        password += getRandomData(upperCase);
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerCase);
    }
    if (numberInput.checked) {
        password += getRandomData(number);
    }
    if (symbolInput.checked) {
        password += getRandomData(symbol);
    }
    if (password.length < passlength.value) {
        return generatePassword(password);
    }
    passBox.innerText = truncateString(password, totalChar.value);
}
generatePassword();
btn.addEventListener("click", function() {
        generatePassword();
    }
)
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}