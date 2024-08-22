const textAreaPrincipal = document.querySelector(".textarea-one");
const textAreaMensaje = document.querySelector(".textarea-two");
const divImg= document.querySelector(".div-img");


function encriptar(textoEncriptar) {
    let arrayLlaves = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase();

    for (let i = 0; i < arrayLlaves.length; i++) {
        if (textoEncriptar.includes(arrayLlaves[i][0])) {
            textoEncriptar =textoEncriptar.replaceAll(arrayLlaves[i][0], arrayLlaves[i][1])
        }   
    }
    return textoEncriptar

}

function btnEncriptar() {
    const textoEncriptado = encriptar(textAreaPrincipal.value);
    textAreaMensaje.value = textoEncriptado;
    textAreaPrincipal.value ="";
    divImg.style.display = "none";
}

function desencriptar(textoDesencriptar) {
    let arrayLlaves = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoDesencriptar = textoDesencriptar.toLowerCase();

    for (let i = 0; i < arrayLlaves.length; i++) {
        if (textoDesencriptar.includes(arrayLlaves[i][1])) {
            textoDesencriptar =textoDesencriptar.replaceAll(arrayLlaves[i][1], arrayLlaves[i][0])
        }   
    }
    return textoDesencriptar

}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textAreaPrincipal.value);
    textAreaMensaje.value = textoDesencriptado;
    textAreaPrincipal.value ="";
    divImg.style.display = "none";
}


async function copiarTexto() {
    try {
        await navigator.clipboard.writeText(textAreaMensaje.value);
        Toastify({
            text: "Copiado",
            duration: 2000 ,
            gravity: "top",
            position: "center",
            style: {
                background: "#6140DC",
            }
        }).showToast();
    } catch (err) {
        console.error("Error al copiar el texto: ", err);
    }

    textAreaMensaje.value ="";
}

textAreaPrincipal.addEventListener('input', function() {
    const regex = /^[a-zñ\s]+$/;
    if (!regex.test(textAreaPrincipal.value)) {
        Toastify({
            text: "Solo letras minusculas",
            duration: 2000 ,
            gravity: "top",
            position: "center",
            style: {
                background: "#6140DC",
            }
        }).showToast();
        
    }
});
