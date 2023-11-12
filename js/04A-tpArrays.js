function listaNumerosPrimos(numeroIngresado){
    const listaPrimos = []
    for (let iteracion = 2; iteracion <= numeroIngresado; iteracion++){
        if (numeroPrimo(iteracion)){
            listaPrimos.push(iteracion)
        }
    }
    return listaPrimos
}

function numeroPrimo(numero1){
    for (let numero = 2; numero < numero1; numero++){
        if (numero1 % numero === 0){
            return false
        }
    }
    return numero1 !== 1
}