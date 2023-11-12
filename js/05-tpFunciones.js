function informacionDeTexto(string){
    if(string === string.toUpperCase()){
        console.log("El texto está compuesto solo por letras mayúsculas")
    }else if(string === string.toLowerCase()){
        console.log("El texto está compuesto solo por letras minúsculas")
    }else{
        console.log("El texto está compuesto tanto por letras mayúsculas como minúsculas")
    }
}