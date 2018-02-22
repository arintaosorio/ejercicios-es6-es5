/*ES5
Declara la variable
Escribe tu funcion
function average(numbers){
    var total = eval(numbers.join('+')) / numbers.length;
    console.log('El promedio de este arreglo es: ' + total)
    return total;
}
*/

/*
function average(numbers){
    total = numbers.reduce(function(a, b){
        return a + b;
    }, 0);
    return 'El promedio de este arreglo es: ' + (total / numbers.length);
}
console.log(average(array))
*/

//ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable


// escribe tu funcion
array = [10, 20, 30, 20, 30, 40, 60];
const average = (array) => {

    let counter = 0;
    for(let number of array){
        counter = counter + number;
    }
    return `El promedio de este arreglo es: ${counter / array.length}`

}


console.log(average(array))









