//helpers util

function esPar(numero) {
    return(numero% 2 ===0);
       
   }

  function mediaAritmetica(lista){
    let sumaLista = 0;
    for (let i=0 ; i <lista.length; i++)
     {
       sumaLista = sumaLista + lista[i];
     }
    let promedioLista = sumaLista/lista.length;
    return(promedioLista);
}
 // mediana general

const salariospais = colombia.map(
    function(persona) {
        return(persona.salary);
    }
)

const salariospaisSorted = salariospais.sort(
    function(salarya,salaryb) {
        return(salarya - salaryb);
    }
)




function medianaSalariosPais(lista)
{
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista))
    {
         var elemento1 = lista[mitad-1];
         var elemento2 = lista[mitad];
         return(mediaAritmetica([elemento1,elemento2]));
    }
    else
    {
         return(lista[mitad]);
    }

}

const MedianaGeneralCol = medianaSalariosPais(salariospaisSorted);

// mediana top 10
const arrayEjemplo = [0,1,2,3,4,5,6,7,8,9,10]
// corta y quita del array splice(5,2)
const spliceStart = (salariospaisSorted.length * 90) / 100;
const spliceCount = (salariospaisSorted.length * 90) - spliceStart;

const SalariosPaisTop10 = salariospaisSorted.splice(spliceStart,spliceCount)
const MedianaTop10Pais = medianaSalariosPais(SalariosPaisTop10);

console.log("Esta es la mediana " +
MedianaGeneralCol,
MedianaTop10Pais);

