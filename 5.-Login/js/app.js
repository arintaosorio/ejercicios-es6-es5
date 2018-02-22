// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione 

// declara el prompt
/*var userPassword = prompt('ingresa tu contraseña');
function user(str) {
    // escribe tu código aqui...
    if (str === 'laboratoria') {
        console.log(true);
    } else {
        console.log(false);
    }
}
user(userPassword);*/



// comenta todo lo anterior y escribelo en ES6
let userPassword = prompt('ingresa tu contraseña');

const user = str => {
    if (str === 'laboratoria') {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
user(userPassword);