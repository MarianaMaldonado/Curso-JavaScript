const fakeNumber = '10';
const fakeString = 123;

const realNumber = Number(fakeNumber); //así se convierte un string a número
console.log(10 + realNumber); //20

const realString = fakeString.toString(); //así convierto un número a string
 console.log(realString); //123

console.log(10 + fakeNumber); //1010
console.log(Number('algo que no es un número')); //NaN

