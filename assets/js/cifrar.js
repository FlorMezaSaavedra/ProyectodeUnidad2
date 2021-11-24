//Cifrado 

function cifrar (mensaje,desp){
    let nuevoMensaje = "";
    for(let i = 0; i < mensaje.length; i++){
        let numASCI = mensaje.charCodeAt(i);
        if(numASCI>64 && numASCI<91){
        nuevoMensaje += String.fromCharCode((numASCI-65+desp)%26 +65);
        } else if(numASCI>96 && numASCI<123){
            nuevoMensaje += String.fromCharCode((numASCI-97+desp)%26 +97);
        } else{
            nuevoMensaje += String.fromCharCode((numASCI-32+desp)%33+32);   
        }
    }
    return nuevoMensaje;
}


//Descifrar
function descifrar (mensaje,desp){
    let nuevoMensaje = "";
    desp *= -1;
    for(let i = 0; i < mensaje.length; i++){
        let numASCI = mensaje.charCodeAt(i);
        if(numASCI>64 && numASCI<91){
        nuevoMensaje += String.fromCharCode((numASCI-65+desp)%26 +65);
        } else if(numASCI>96 && numASCI<123){
            nuevoMensaje += String.fromCharCode((numASCI-97+desp)%26 +97);
        } else{
            nuevoMensaje += String.fromCharCode((numASCI-32+desp)%33+32);   
        }
    }
    return nuevoMensaje;
}

function sumarCifras (arreglo){
    let suma = 0;
for(let i = 0; i < arreglo.length; i++){
    if (typeof arreglo[i] == "string"){
        suma += parseInt(arreglo[i]);
    }
    else{
        suma += arreglo[i];
    } 
} 
  return suma ; 
}




document.getElementById("Cifrar").addEventListener("click",function(){
    let texto = document.getElementById("mensaje").value;
    let clave = document.getElementById("clave").value;
    let arrClave = Array.from(clave);
    let desplazamiento = sumarCifras (arrClave);
    let textoCifrado = cifrar(texto,desplazamiento);
    alert(textoCifrado);
})


document.getElementById("Descifrar").addEventListener("click",function(){
    let texto = document.getElementById("mensaje").value;
    let clave = document.getElementById("clave").value;
    let arrClave = Array.from(clave);
    let desplazamiento = sumarCifras (arrClave);
    let textoDescifrado = descifrar(texto,desplazamiento);
    alert(textoDescifrado);

    
})


