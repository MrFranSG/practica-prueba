function CambiarContraste() {
    let body = document.body;
    let estiloBody = window.getComputedStyle(body);
    let fondoActual = estiloBody.backgroundColor;
    let eH1 = document.getElementsByClassName("h1_cambiar");
    let nav1 = document.getElementsByClassName("nav1");

    if (fondoActual === "rgb(11, 11, 14)") {
        body.style.backgroundColor = "#ffffff"; 
        body.style.color = "#000000";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "black";
        }
        for (let index = 0; index < eH1.length; index++) {
            const element = nav1[index];
            element.style.color = "black";
        }

    } else { 
        body.style.backgroundColor = "#0b0b0e"; 
        body.style.color = "#ffffff";
        for (let index = 0; index < eH1.length; index++) {
            const element = eH1[index];
            element.style.color = "white";
        }
        for (let index = 0; index < eH1.length; index++) {
            const element = nav1[index];
            element.style.color = "red";
        }
    }
}

let currentFontSize = 16;
const maxFontSize = 24;
const minFontSize = 12;

function adjustFontSize(action) {
    if (action === 'increase' && currentFontSize < maxFontSize) {
        currentFontSize += 2;
    } else if (action === 'decrease' && currentFontSize > minFontSize) {
        currentFontSize -= 2;
    }
    document.body.style.fontSize = currentFontSize + 'px';
}