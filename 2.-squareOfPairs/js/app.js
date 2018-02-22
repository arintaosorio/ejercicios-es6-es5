/*3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)
ES5
Declara las variables ES5
var array = [2, 4, 6];
var array = [-3, 2, -8, 12, 5];
var array = [1, 2, 3, 4, 5];
Declaración de la funcion 
function square () {
  var squareArray = array.map(function(element){
    if(Math.sign(element) == 1) {
      return element * element;
    } else {
      return element;
    }
  })
  console.log(squareArray);
  return squareArray
}
square(array);
ES6
Ahora comenta todo el codigo de arriba y escribelo en ES6
Declara variables (let-const)
const array = [2, 4, 6];
const array = [-3, 2, -8, 12, 5];
*/
const array = [1, 2, 3, 4, 5];

//Declara la funcion y ejecuta el código


const square = array => {
  const squareArray = array.map(element => {
    if (Math.sign(element) == 1) {
      return element * element;
    } else {
      return element;
    }
  })
  console.log(squareArray);
  return squareArray;
}




// ejecuta la funcion 

square(array);
