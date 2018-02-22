// ES5

// Escribe tu código aquí....

/*
function findPairForSum(array, number){
    for(var i = 0; i < array.length; i++){
        for(var j = i + 1; j < array.length; j++){
            if (array[j] === number - array[i]){
                return [array[i], array[j]];
            }
        }
    }
}
*/

//findPairForSum([3, 34, 4, 12, 5, 2], 9)




// ES6

// Ahora comenta todo el código anterior y pasalo a ES6

const findPairForSum = (array, number) => {
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            if (array[j] === number - array[i]){
                return [array[i], array[j]];
            }
        }
    }
}

console.log(findPairForSum([3, 34, 4, 12, 5, 2], 9))