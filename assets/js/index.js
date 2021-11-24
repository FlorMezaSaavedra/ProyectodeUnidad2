import {cifrar} from './cifrar.js';
import {descifrar} from './descifrar.js';


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
});


document.getElementById("Descifrar").addEventListener("click",function(){
    let texto = document.getElementById("mensaje").value;
    let clave = document.getElementById("clave").value;
    let arrClave = Array.from(clave);
    let desplazamiento = sumarCifras (arrClave);
    let textoDescifrado = descifrar(texto,desplazamiento);
    alert(textoDescifrado);

    
});

