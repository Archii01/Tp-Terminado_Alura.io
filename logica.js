function encripta(){
    var frase = document.getElementById("textosifrado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter"); /*esta funcion usamos para intercambiar los caracteres*/

    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textodos").style.display="show";
    document.getElementById("textodos").style.display="inherit";
    document.getElementById("munie").style.display= "none";
    document.getElementById("textouno").style.display= "none";
    document.getElementById("textodos").innerHTML=textoEncriptado;
    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";
    document.getElementById("textito").style.display= "none";
    document.getElementById("mensajes").style.display= "none";
  
   
}

function desencripta(){
    var frase = document.getElementById("textosifrado").value.toLowerCase();
    var textoDesncriptado = frase.replace(/enter/img, "e"); /*esta funcion usamos para intercambiar los caracteres*/

    var textoDesncriptado = textoDesncriptado.replace(/ober/img, "o");
    var textoDesncriptado = textoDesncriptado.replace(/imes/img, "i");
    var textoDesncriptado = textoDesncriptado.replace(/ai/img, "a");
    var textoDesncriptado = textoDesncriptado.replace(/ufat/img, "u");

    document.getElementById("textodos").style.display="show";
    document.getElementById("textodos").style.display="inherit";
    document.getElementById("munie").style.display="none";
    document.getElementById("textouno").style.display="none";
    document.getElementById("textodos").innerHTML=textoDesncriptado;
    document.getElementById("botonCopiar").style.display="show";
    document.getElementById("botonCopiar").style.display="inherit";
    document.getElementById("textito").style.display= "none";
    document.getElementById("mensajes").style.display= "none";
    
}

function copiar(){
    var contenido = document.querySelector("#textodos");
    contenido.select();
    document.execCommand("copy");
}