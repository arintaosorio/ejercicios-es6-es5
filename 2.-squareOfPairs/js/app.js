// 3 variables llamadas igual para hacer 3 pruebas (usa una variable y las otras 2 comentalas)
// ES5
// Declara las variables ES5
// var array = [2, 4, 6];
// var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];
// Declaración de la funcion 
// function square () {
//   var squareArray = array.map(function(element){
//     if(Math.sign(element) == 1) {
//       return element * element;
//     } else {
//       return element;
//     }
//   })
//   console.log(squareArray);
//   return squareArray
// }
// square(array);
// ES6
// Ahora comenta todo el codigo de arriba y escribelo en ES6
// Declara variables (let-const)
// const array = [2, 4, 6];
// const array = [-3, 2, -8, 12, 5];

// const array = [1, 2, 3, 4, 5];

// //Declara la funcion y ejecuta el código


// const square = array => {
//   const squareArray = array.map(element => {
//     if (Math.sign(element) == 1) {
//       return element * element;
//     } else {
//       return element;
//     }
//   })
//   console.log(squareArray);
//   return squareArray;
// }




// // ejecuta la funcion 

// square(array);





//ES5
// declaración de la funcion
/*
function square (array) {
  var newArray =[];
  array.map( function (element) {
    if (element % 2== 0) {
      var numberSquare = element*Math.abs(element);
      console.log(numberSquare
      );
      newArray.push(numberSquare)
    } else {
      var numberSquare = element ;
      console.log(numberSquare);
      newArray.push(numberSquare)
    }
  })
  return newArray
}

var newArraySqr = square(array);
console.log(newArraySqr);
*/


//ES6
////var array = [2, 4, 6];
var array = [-3, 2, -8, 12, 5];
// var array = [1, 2, 3, 4, 5];


// declara variables (let-const)
const square = array => {
  const newArray = [];
  array.map( element => {
    if (element % 2== 0) {
      return newArray.push(element*Math.abs(element))//Al usar valor absoluto (Math.abs(element)) en unno de los elemntos, hará que en la multiplicación por sí mismo conserve su signo.
    } else {
      return newArray.push(element)
    }
  })
  return newArray
}

// declara la funcion y ejecuta el código
const newArraySqr = square(array);
//console.log(square(array));
console.log(newArraySqr);