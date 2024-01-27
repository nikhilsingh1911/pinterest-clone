const zodiac = document.getElementById("zodiac");
const body = document.body;
const changeBackground = () =>{
    switch (zodiac.value) {
        case "aries":
            body.style.backgroundColor = "red";
            break;
        case "tarus":
            body.style.backgroundColor = "#03fc6f";
            break;
        case "gemini":
            body.style.backgroundColor = "#fce514";
            break;
        case "cancer":
            body.style.backgroundColor = "#fffcf7";
            break;
        case "leo":
            body.style.backgroundColor = "rgb(52,0,63)";
            break;
        case "virgo":
            body.style.backgroundColor = "pink";
            break;
        case "libra":
            body.style.backgroundColor = "blue";
            break;
        case "scorpio":
            body.style.backgroundColor = "yellow";
            break;
        case "sagittarius":
            body.style.backgroundColor = "skyblue";
            break;
        case "aquarius":
            body.style.backgroundColor = "brown";
            break;
        case "capricorn":
            body.style.backgroundColor = "orange";
            break;
        case "aries":
            body.style.backgroundColor = "lightpink";
            break;
    
        default:
            body.style.backgroundColor = "white"
            break;
    }
};