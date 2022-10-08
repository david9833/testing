const sum = (a,b) => {
    return a+b;
}
console.log(sum(7,3));
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };


////////////EJERCICIO HOMEWORK////////////////////

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
console.log(fromEuroToDollar(1));
//Función de dolar a yenes

const fromDollarToYen = function(valueInDollar) {

    let valueInYen = (valueInDollar/1.2) * 127.9;

    return valueInYen;
}

console.log(fromDollarToYen(1))



///Función de yenes a libras 

const fromYenToPound = function(valueInYen) {
    let valueInPound = (valueInYen/127.9) * 0.8;
    return valueInPound
}

console.log(fromYenToPound(1))


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }