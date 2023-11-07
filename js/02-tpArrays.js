function numerosPares(array) {
    const listaNumeros = array.filter(numero => numero % 2 === 0);
    return listaNumeros;
  }

//   no se si es correcto el uso del método filter