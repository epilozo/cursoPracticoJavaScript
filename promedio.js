const lista1 = [
   /*  100,
    200,
    300,
    500 */
    1,
    2,
    3,
    1,
    1,
    2,
    4,
    5,
    3,
    2,
    3,
    2,
    2
];



function mediaAritmetica(lista){
    let sumaLista = 0;
    for (let i=0 ; i <lista.length; i++)
     {
       sumaLista = sumaLista + lista[i];
     }
    let promedioLista = sumaLista/lista.length;
    return(promedioLista);
}

function esPar(numero){
  if (numero % 2 == 0) {
     return true }
  else {
     return false }  
}

function mediana(lista) {
    var nElementos = lista.length;
    var mediana    = parseInt(nElementos / 2);
    if (esPar(nElementos))
    {
      var elemento1   = lista[mediana-1];
      var elemento2   = lista[mediana];
      var valorMediana= mediaAritmetica([elemento1,elemento2]);
      return(valorMediana);
    }
    else {
      return(lista[mediana]);
    }
     
}

function moda(lista) {

    const lista1Count = {};
    lista1.map( function(ele) 
     {
        if (lista1Count[ele])
        { 
            lista1Count[ele] += 1; 
        } else
        {
            lista1Count[ele] = 1;
        }
    });
    
    const lista1Array = Object.entries(lista1Count).sort
    (
        function(elementoA,elementoB)
        {
            return (elementoA[1] - elementoB[1]);
        }
    ) 

    return (lista1Array[(lista1Array.length - 1),1]);
  }

 function calculaModa()
  {
    var resul = document.getElementById("muestraResultado");
    resul.innerText = moda(lista1);
  }
  
 
