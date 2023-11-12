function perimetroRectangulo(lado1, lado2){
    const perimetro = 2*(lado1 + lado2)
    alert(`El perímetro del rectángulo es de ${perimetro}`)
}

const ladoA = parseInt(prompt("Introduzca la medida del lado A del rectángulo"))
const ladoB = parseInt(prompt("Introduzca la medida del lado B del rectángulo"))
perimetroRectangulo(ladoA, ladoB)