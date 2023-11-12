const listaDeCiudades = []


while(true){
    let ciudad = prompt("Introduzca el nombre de una ciudad")
    if (ciudad === null){
        listaDeCiudades.push(" " + "París")
        document.write(`<p> La longitud de la lista de ciudades es de ${listaDeCiudades.length} elementos.</p>`)
        document.write(`<ul>`)
        document.write(`<li>El elemento de la primera posicion es :${listaDeCiudades[0]}</li>`)
        document.write(`<li>El elemento de la segunda posicion es :${listaDeCiudades[1]}</li>`)
        document.write(`<li>El elemento de la tercera posicion es :${listaDeCiudades[2]}</li>`)
        document.write(`<li>El elemento de la última posicion es : ${listaDeCiudades[listaDeCiudades.length - 1]}</li>`)
        document.write(`<li>El elemento añadido en la última posición es : París</li>`)
        document.write(`</ul>`)

        document.write(`<h1>Lista de ciudades</h1>`)
        document.write(`<ul>`)
        for (let ciudades = 0; ciudades < listaDeCiudades.length; ciudades++){
            document.write(`<li>Elemento : ${listaDeCiudades[ciudades]}</li>`)
        }
        document.write(`</ul>`)
        break;
    }
    else{
        listaDeCiudades.push(" " + ciudad) 
    }
}