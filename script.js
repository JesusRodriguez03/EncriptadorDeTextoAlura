const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#copiar");
const textoIngresado = document.querySelector("#text-area");
const textoResultado = document.querySelector("#encriptado");

function encriptar(){
    let texto = textoIngresado.value.toLowerCase();

    let textoEncriptado = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    textoResultado.value = textoEncriptado;

    btnCopiar.style.display = "show";
    btnCopiar.style.display = "inherit";
    textoIngresado.value = '';   
}

function desencriptar(){
    let texto = textoIngresado.value.toLowerCase();

    let textoEncriptado = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    textoResultado.value = textoEncriptado;

    btnCopiar.style.display = "show";
    btnCopiar.style.display = "inherit";
    textoIngresado.value = '';   
}

function copia(){
    let textoEncriptado = textoResultado.value;
    navigator.clipboard.writeText(textoEncriptado);
}

btnDesencriptar.onclick = desencriptar;
btnEncriptar.onclick = encriptar;
btnCopiar.onclick = copia;
