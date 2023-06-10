//----------------------------declaraciones--------------------------
let textIngresante = document.getElementById('texto-ingresado');
let textResultado = document.getElementById("texto-resultado");

let btEncriptar = document.getElementById('bt-encriptar');
let btDesencriptar = document.getElementById("bt-desencriptar")

//let btCopiar = document.getElementById("bt-copiar");


//-----------------------------cuerpo-------------------------------------------
btEncriptar.onclick = funcionEncriptar;
btDesencriptar.onclick = funcionDesencriptar;
//btCopiar.onclick = funcionCopiar;


//--------------------------------funciones-------------------------------------
function funcionEncriptar(){
    var mensaje = textIngresante.value;
    mensaje = mensaje.toLowerCase();
    mensaje = mensaje.split("");
    console.log(mensaje);

    for (let i=0; i<mensaje.length ; i++){
        if(mensaje[i]=='a'){
            mensaje[i]="ai";
        }if(mensaje[i]=='e'){
            mensaje[i]="enter";
        }if(mensaje[i]=='i'){
            mensaje[i]="imes";
        }if(mensaje[i]=='o'){
            mensaje[i]="ober";
        }if(mensaje[i]=='u'){
            mensaje[i]="ufat";
        }
    }

    textIngresante.value = "";
    textResultado.style.backgroundImage = "none";
    textResultado.value=mensaje.join("");
    mensaje.value
    console.log("el mensaje es "+ mensaje);
}

function funcionDesencriptar(){
    var mensajeOculto = textIngresante.value;
    mensajeOculto = mensajeOculto.toLowerCase();
    mensajeOculto = mensajeOculto.split("");

    for (let i=0; i<mensajeOculto.length ; i++){
        if(mensajeOculto[i]=='a'){
            mensajeOculto[i]="a";
            mensajeOculto[i+1]="";
            i = i+1;
        }if(mensajeOculto[i]=='e'){
            mensajeOculto[i]="e";
            mensajeOculto[i+1]="";
            mensajeOculto[i+2]="";
            mensajeOculto[i+3]="";
            mensajeOculto[i+4]="";
            i = i+4;
        }if(mensajeOculto[i]=='i'){
            mensajeOculto[i]="i";
            mensajeOculto[i+1]="";
            mensajeOculto[i+2]="";
            mensajeOculto[i+3]="";
            i = i+3;
        }if(mensajeOculto[i]=='o'){
            mensajeOculto[i]="o";
            mensajeOculto[i+1]="";
            mensajeOculto[i+2]="";
            mensajeOculto[i+3]="";
            i = i+3;
        }if(mensajeOculto[i]=='u'){
            mensajeOculto[i]="u";
            mensajeOculto[i+1]="";
            mensajeOculto[i+2]="";
            mensajeOculto[i+3]="";
            i = i+3;
        }
    }

    textResultado.value=mensajeOculto.join("");
    console.log("el mensaje es "+ mensajeOculto);

}

function funcionCopiar(){
    var textoCopiado =  textResultado.value;
    navigator.clipboard.writeText(textoCopiado);
}



