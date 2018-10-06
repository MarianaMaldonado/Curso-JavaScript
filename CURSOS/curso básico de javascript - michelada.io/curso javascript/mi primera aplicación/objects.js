//objetos

const nct = {
	name: 'nct',
	age: 2,
	human: 'human',
	/*sayToTheWorld: ("We're NCT");
	console.log(`We're NCT`)*/
	sayToTheWorld: function(someParam) {
		console.log(`We are ${this.name}`); // We are NCT!
	}
}

console.log(nct); // {name: 'nct', age: '2', human: 'human' }
console.log(nct,name); //nct
console.log(nct['name']); nct
//console.log(nct, algoquenoexiste); //undefined

nct.algoquenoexiste = 'algo que si existe';
console.log(nct.algoquenoexiste); //algo que si existe

nct.sayToTheWorld();