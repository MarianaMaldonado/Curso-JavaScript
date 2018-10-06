//funciones nos permiten hacer algo que se establece dentro de ella

let mensaje = 'haz algo';

function doSomething() {
	//let mensaje = 'haz algo';
	//alert(mensaje);
	console.log(mensaje);
}

//console.log(mensaje); //está mal porque la variable no está definida, solo se accede dentro de la función, ni aunque cuando se mande a llamar funciona

doSomething(); //aquí se llama la función

function saySomething(quien, mensaje = 'No hay mensaje') { //quien (de quien va), mensaje (el mensaje que se enviará) , no hay mensaje corresponde cuando el parámetro no especifica qué mensaje
	console.log(`${quien}: ${mensaje}`); //Yop: los aprecio
}

saySomething('Yop' , 'los aprecio');
saySomething('Yuta' , 'yo también');
saySomething('Miguelito');


//función que te permite sumar dos valores
/*function sum(a,b){
	return a + b;
}*/

/*const sum = (a, b) => { //es lo mismo que hacer la función 
	return a + b;
}*/

const sum = (a, b) => a + b; // es lo mismo que definir la función

console.log(sum(5,10)); //15


//función que permite decir si es mayor o menor de edad
function checkAge(age){
	if(age >= 18){
		return true;
	}
	else{
		return false;
	}
}

console.log(checkAge(19)); //true
console.log(checkAge(17)); //false
console.log(checkAge(20)); //true

//duda que lo aplica en saySomething 
console.log(saySomething('algo')); //undefined

//callbacks
function checkAgeWithCallBacks(age, yes, no){
	if(age >= 18){
		yes();
	}
	else{
		no();
	}
}

function myYes(){
	console.log('yay, si, todo chiquito'); //yay, si, todo chiquito
}

function myNo(){
	console.log('nope :('); //nope :(
}

checkAgeWithCallBacks(20, (paramFromFunction) =>{
	console.log('from checkAgeWithCallBacks: ${paramFromFunction}'); //from checkAgeWithCallBacks