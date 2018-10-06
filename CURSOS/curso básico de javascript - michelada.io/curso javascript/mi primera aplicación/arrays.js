// un array o arreglo es una colección de datos

let myPets = ['juan', 'paco', 'pedro'];

console.log(myPets); //[ 'juan', 'paco', 'pedro' ]

//nos encontramos un perrito
myPets.push('firulais'); //push: agrega un elemento al final
console.log(myPets); //[ 'juan', 'paco', 'pedro', 'firulais']

//lo dejamos ir
myPets.pop(); //pop: quita el último elemento
console.log(myPets); //[ 'juan', 'paco', 'pedro' ]



console.log(myPets[0]); //juan
console.log(myPets[1]); //paco
console.log(myPets[2]); //pedro


//juan se muere
myPets.shift(); //shift: quita el primer elemento
console.log(myPets); // [ 'paco', 'pedro' ]

//revivir a paco
myPets.unshift('juan'); //unshift: agrega un elemento al inicio
console.log(myPets); // [ 'juan' , 'paco', 'pedro' ]

//cuantos animales hay
console.log(myPets.length); //3
myPets.push('firulais'); //se agrega
console.log(myPets.length); //4

//iterar un arreglo - imprimir uno por uno
myPets.forEach(function(pet)
{
	console.log(pet) //juan, paco, pedro, firulais
});

function printPet(pet){
	console.log(pet); //juan , paco, pedro, firulais
}

myPets.forEach(printPet);

console.log(myPets); //[ 'juan' , 'paco', 'pedro', 'firulais' ]

//quitar posición 1
myPets = myPets.filter((pet, index) => {
	if(index === 1){
		return false;
	}
	else
	{
		return true;
	}
});

console.log(myPets); //[ 'juan' , 'pedro', 'firulais' ]

//juan, pedro, firulais
//juntar
console.log(myPets.join(', ')); 
console.log(myPets);

//split
const string = 'alexis, juan, mariana';
console.log(string.split(' , ')); //[ 'alexis', 'juan', 'mariana' ]
