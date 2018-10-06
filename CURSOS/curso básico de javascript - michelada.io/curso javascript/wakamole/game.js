//código chidito

const holes = document.getElementsByClassName('hole');
const scoreBoard = document.getElementsByClassName('score');
const moles = document.querySelectorAll('.mole');
const button = document.getElementById('start');

let score = 0;
let timeUp = false;

function getRandomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function getRandomHole(holes) {
	const randomIndex = Math.floor(Math.Random() * holes.length);
	const hole = holes[randomIndex];
	return hole;
}

function peep() {
	const time = getRandomTime(500,2000);
	const hole = getRandomHole(holes);
	hole.classList.add('up');

	setTimeOut(() => {
		hole.classList.remove('up');
		if(timeUp){
			alert('tu tiempo se acabó');
			//nada
		}
		else
		{
			peep();
		}
	}, time);
}

function startGame() {
	scoreBoard.innerText = 0;
	score = 0;
	timeUp = false;
	peep();
	setTimeOut(() => {
		timeUp = true;
	}, 10000);
}

function bonk(event) {
	const mole = event.target;
	mole.parentNode.classList.remove('up');
	score = score + 1;
	scoreBoard.innerText = score;
	console.log('me diste', ev.target);
}

button.addEventListener('click', startGame);
moles.forEach((mole) => {
	mole.addEventListener('click', bonk);
});