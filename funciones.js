//funciones
//funciones declarativas
function MiPrimerFuncion(){
  return 23;

};

console.log (MiPrimerFuncion());
function MiSegundaFuncion(a,b){
  return a + b;
}
console.log (MiSegundaFuncion(2,2));

function MiTercerFuncion(a,b){
  var mul = a * b;
  return mul - 2;
};
console.log (MiTercerFuncion(10,10));


//funciones de tipo Expresion

var tipoDos = function(){
  return 12;
}

console.log(tipoDos());

//tamplate literals
function MiNombre(nom){
  var nombre = ` ${nom} `;
  return nombre;
}
console.log(MiNombre('antonio'));

//expresion de funcion
var saludar = function(nombre){
  console.log(` hola persona llamada: ${nombre} `)
}
console.log(saludar('antonio'));