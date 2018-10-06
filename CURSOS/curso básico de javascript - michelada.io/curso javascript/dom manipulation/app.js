const p = document.getElementById('my-text');
//console.log(p);

/*setTimeout(() =>{
	let age = 16;
	if(age >= 18){
		p.innerText = 'Estás en el bar'; //modificación de propiedad
	}
	else
	{
		p.innerText = 'No entraste';
	}
	
	 }, 1000);*/

/*setTimeout(() 

	p.innerText = "Hola desde JavaScript";

	, 1000);*/

const span = document.getElementsByTagName('span') [0];
console.log(span);

const button = document.getElementById('click');
console.log(button);

//cuando haya un click (evento), cambiamos el text
//al span

let counter = 0; //veces que le hemos dado click

button.onclick = function() {
	counter = counter + 1;
	span.innerText = counter;
}

const body = document.getElementById('body');
const makeGreen = document.getElementById('make-green');
const makeWhite = document.getElementById('make-white');
makeGreen.addEventListener('click', function() {
	//hacer verde todo
	body.classList.add('green');
})

makeWhite.addEventListener('click', function() {
	//quitar verde, y hacerlo blanco
	body.classList.remove('green');
})

//https://github.com/alexisllamas/js-basic-workshop