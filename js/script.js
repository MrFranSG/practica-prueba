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

function AumentarFuente() {
    let estilos = document.getElementsByTagName('html')[0].style;
    let tamañoActual = parseFloat(estilos.fontSize) || 16; 
    let nuevoTamaño = tamañoActual + 2; 

    estilos.fontSize = nuevoTamaño + 'px';
}

function DisminuirFuente() {
    let estilos = document.getElementsByTagName('html')[0].style;
    let tamañoActual = parseFloat(estilos.fontSize) || 16; 
    let nuevoTamaño = tamañoActual - 2; 

    estilos.fontSize = nuevoTamaño + 'px';
}