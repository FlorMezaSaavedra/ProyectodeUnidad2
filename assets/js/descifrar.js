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

export {descifrar};