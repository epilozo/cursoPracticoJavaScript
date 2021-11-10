console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden : " +ladoCuadrado + " cm");

function perimetroCuadrado(lado)
{
     return (lado * 4);
}

//console.log("Perimetro de cuadrado es: "+ perimetroCuadrado(ladoCuadrado) + " cm");

function areaCuadrado(lado){
 return(lado*lado);
}

//console.log("Area de cuadrado es: "+ areaCuadrado(ladoCuadrado) + " cm2");
console.groupEnd();


// triangulo
//console.group("Triángulo");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del triangulo miden : " +
ladoTriangulo1 
+ " cm " +
ladoTriangulo2
+ " cm " +
baseTriangulo 
+ " cm "
);

console.log("Area del triangulo es : " +
(ladoTriangulo1 * baseTriangulo ) /2  );

console.groupEnd();

// circulo
console.group("Circulos");
radioCirculo = 4;

numeroPi = Math.PI;
console.log("Perimetro del circulo es : " + (radioCirculo * 2)* numeroPi);

console.log("Area del circulo es : " + (radioCirculo* radioCirculo)* numeroPi);
console.groupEnd(); */

function calculaPerimetroCuadrado()
{
   const ladoC = document.getElementById("idLadoCuadrado");
   const valorLadoc = ladoC.value;
   const perimetro= perimetroCuadrado(valorLadoc);
   const resultado = document.getElementById("mostrarResultado");
   resultado.innerText = "El perimetro del Cuadrado es :  " + perimetro ;

}

function calculaAreaCuadrado()
{
   const ladoC = document.getElementById("idLadoCuadrado");
   const valorLadoc = ladoC.value;
   const area= areaCuadrado(valorLadoc);
   const resultado = document.getElementById("mostrarResultado");
   resultado.innerText = "El area del cuadrado es : " + area ;
   
}
