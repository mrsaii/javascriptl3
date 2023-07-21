// Get UI
const minnum = document.querySelector('.minnumber'),
	maxnum = document.querySelector('.maxnumber');

const getinput = document.getElementById('guessnumber');
const getbtn = document.getElementById('btn');

const message1 = document.querySelector('.message1'),
	message2 = document.querySelector('.message2');

const getgamectn = document.getElementById('game-container');

const getmicbtn = document.getElementById('mic-btn');

const getvocctn = document.getElementById('voice-container');

let min = 10,
	max = 100,
	gameleft = 3,
	winningnum = randomnum(min,max);

minnum.innerText = min;
maxnum.textContent = max;

function randomnum(min,max){
	let getrdm = Math.floor(Math.random()*(max-min)+10);
	return getrdm;
}



console.log(winningnum);



//For Chrome Browser Support
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let getrec = new window.SpeechRecognition;

getmicbtn.addEventListener('click',function(){
	// console.log('i ma working');

	// console.log(getrec);

	//Start Recognition , start() come from Recognition api
	getrec.start();

	getrec.addEventListener('result',(e)=>talking(e));
});


function talking(ele){
	// console.log(ele);
	// console.log(ele.result[0][0],transcript);

	const micresult = ele.results[0][0].transcript;

	micmessage(micresult);
	getnumber(micresult);
}

function micmessage(msg){
	getvocctn.innerHTML = `<span>Did you say !!! ${msg}</span>`;
}

function getnumber(msg){

	const getnum = +msg;
	// console.log(typeof getnum,getnum);

	// console.log('abc');

	if(Number.isNaN(getnum)){
		getvocctn.innerHTML = `<div>This is not a valid number.</div>`;
		return false;
	}

	// console.log('efg');

	getinput.value = getnum;

	//Stop Recognition , stop() came from Recognition api
	getrec.stop();

}





function setmessage1(msg,color){
	message1.textContent = msg;
	message1.style.color = color;
}

function setmessage2(msg,color){
	message2.textContent = msg;
	message2.style.color = color;
}


function gameover(won,msg){
	let color;

	won === true ? color = 'green' : color = 'red';

	getinput.disable = true;

	getinput.style.borderColor = color;

	setmessage1(msg,color);

	getbtn.value = 'Play Again';

	getbtn.classList.add('playagain');
}



getbtn.addEventListener('click',function(){
	let guess = getinput.value;
	// console.log(guess);
	// console.log(typeof guess);
	guess = parseInt(guess);


	if(guess < min || guess > max || isNaN(guess)){
		setmessage2(`Please enter a number between ${min} to ${max}`,'red');
	}



	if(guess === winningnum){
		// Game Over Won

		// console.log('yes u r right');

		gameover(true,`${winningnum} is correct!!, You Won`);

	}else{
		gameleft--;

		if(gameleft === 0){
			// Game Over Lost

			gameover(false,`Game Over, You Lost, The correct number is ${winningnum}`);


		}else{
			// Continue Game

			getinput.style.borderColor = 'red';

			getinput.value = '';

			setmessage1(`${guess} is not correct, ${gameleft} guess left` , 'blue');

			if(guess > winningnum){
				getvocctn.innerHTML = `<div>You should go down a bit.</div>`;
			}else if(guess < winningnum){
				getvocctn.innerHTML = `<div>You should go up a bit.</div>`;
			}


		}
	}

});


getgamectn.addEventListener('mousedown',function(e){
	// console.log(e.target);

	if(e.target.classList.contains('playagain')){
		window.location.reload();
	}

});



// 6VT
