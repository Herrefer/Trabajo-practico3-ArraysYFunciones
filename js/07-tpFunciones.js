function tablaDeMultiplicarDe(numero){
    document.write(`<h1>Tabla de multiplicar del ${numero}</h1>`)
    document.write(`<ul>`)
    for(let factor = 1; factor <= 10; factor++){
        document.write(`<li>${numero} X ${factor} = ${numero*factor}</li>`)
    }
    document.write(`</ul>`)
}