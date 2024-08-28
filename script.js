function encriptarTexto(texto) {
    let textoEncriptado = "";
    texto = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];

        if (letra === "e") {
            textoEncriptado += "enter";
        } else if (letra === "i") {
            textoEncriptado += "imes";
        } else if (letra === "a") {
            textoEncriptado += "ai";
        } else if (letra === "o") {
            textoEncriptado += "ober";
        } else if (letra === "u") {
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += letra;
        }
    }

    return textoEncriptado;
}

function desencriptarTexto(texto) {
    let textoDesencriptado = "";
    let i = 0;
    texto = texto.toLowerCase();

    for (i = 0; i < texto.length; i++) {
        if (texto[i] === "e" && texto[i + 1] === "n" && texto[i + 2] === "t" && texto[i + 3] === "e" && texto[i + 4] === "r") {
            textoDesencriptado += "e";
            i += 4; 
        } else if (texto[i] === "i" && texto[i + 1] === "m" && texto[i + 2] === "e" && texto[i + 3] === "s") {
            textoDesencriptado += "i";
            i += 3; 
        } else if (texto[i] === "a" && texto[i + 1] === "i") {
            textoDesencriptado += "a";
            i += 1; 
        } else if (texto[i] === "o" && texto[i + 1] === "b" && texto[i + 2] === "e" && texto[i + 3] === "r") {
            textoDesencriptado += "o";
            i += 3; 
        } else if (texto[i] === "u" && texto[i + 1] === "f" && texto[i + 2] === "a" && texto[i + 3] === "t") {
            textoDesencriptado += "u";
            i += 3; 
        } else {
            textoDesencriptado += texto[i];
        }
    }

    return textoDesencriptado;
}

document.getElementById('encryptButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const encriptarUsuarioTexto = encriptarTexto(inputText);
    displayOutput(encriptarUsuarioTexto);
});

document.getElementById('decryptButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const desencriptarUsuarioTexto = desencriptarTexto(inputText);
    displayOutput(desencriptarUsuarioTexto);
});

document.getElementById('copyButton').addEventListener('click', function () {
    const outputText = document.getElementById('outputContainer').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Texto copiado al portapapeles');
    });
});

function displayOutput(text) {
    const outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = `<p class="output-text">${text}</p>`;      
    document.getElementById('copyButton').classList.remove('hidden');
}