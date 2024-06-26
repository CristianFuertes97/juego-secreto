let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; // lista vacia
let numeroMaximo = 10;

console.log(numeroSecreto);
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;  
}

function verificarIntento(){
    let numeroUsuario =parseInt(document.getElementById('valorUsuario').value);
    // Si aciertas el numero secreto
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos ==1? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        // El usuario no acerto
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        console.log(intentos);
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    return document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        // Si el numero generado esta incluido en la lista se realiza :
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }

    }


}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //Limpia la caja  
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar numeros aleatorios
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();

