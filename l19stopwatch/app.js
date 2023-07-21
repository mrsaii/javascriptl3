// Get UI
const getmodebtn = document.querySelector('.mode-btn');
const getdisplays = document.querySelectorAll('.display');
// const getdisplays = document.querySelector('.display');
const getstartbtn =  document.querySelector('.start'),
		getpausebtn = document.querySelector('.pause'),
		getresetbtn = document.querySelector('.reset');
const getdlpsec = document.getElementById('dlpsecond'),
		getdlpmlsec = document.getElementById('dlpmillisec');


// var hours = 0,
// 	minutes = 0,
// 	seconds = 0,
// 	milliseconds = 0;


var [hours,minutes,seconds,milliseconds] = [0,0,0,0];
// console.log(hours,minutes,seconds,milliseconds);

let setinvdisplay;

// getstartbtn.addEventListener('click',starttime);
// getpausebtn.addEventListener('click',pausetime);
// getresetbtn.addEventListener('click',resettime);


// function starttime(){
// 	// console.log('hay i am start time');

// 	// showdisplay();

// 	clearInterval(setinvdisplay); //(for not to setInterval anymore if we click on start btn over again & again)
// 	setinvdisplay = setInterval(showdisplay,10);
// }

// function pausetime(){
// 	// console.log('hay i am pause time');

// 	clearInterval(setinvdisplay);
// }


// function resettime(){
// 	// console.log('hay i am reset time');

// 	clearInterval(setinvdisplay);
// 	[hours,minutes,seconds,milliseconds] = [0,0,0,0];
// 	getdisplays.innerText = "00 : 00 : 00 : 000";

// }


// function showdisplay(){
// 	// console.log('hay hay hay');

// 	milliseconds += 10;

// 	if(milliseconds === 1000){
// 		milliseconds = 0;
// 		seconds++;

// 		if(seconds === 60){
// 			seconds = 0;
// 			minutes++;

// 			if(minutes === 60){
// 				minutes = 0;
// 				hours++;
// 			}
// 		}
// 	}

// 	// console.log(hours,minutes,seconds,milliseconds);


// 	let h = hours < 10 ? "0"+hours : hours;
// 	let m = minutes < 10 ? "0"+minutes : minutes;
// 	let s = seconds < 10 ? "0"+seconds : seconds;
// 	let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds : milliseconds;

// 	getdisplays.textContent = `${h} : ${m} : ${s} : ${ms}`;


// }



// console.log(getdisplays);
// console.log(getdisplays[0]);
// console.log(getdisplays[1]);


var idx = 0;
getdisplays[idx].style.display = 'block';

getmodebtn.onclick = function(){

	reloadagain();
	[hours,minutes,seconds,milliseconds] = [0,0,0,0];

	getdisplays[idx].style.display = 'none';

	idx++;

	if(idx > 1){
		idx = 0;
	}

	// console.log(idx);

	getdisplays[idx].style.display = 'block';

	getmodebtn.textContent = `Mode ${idx+1}`;





}


getstartbtn.onclick = function(){

	clearInterval(setinvdisplay);
	setinvdisplay = setInterval(showdisplay,10);

}


getpausebtn.onclick = function(){
	clearInterval(setinvdisplay);
	
}


getresetbtn.onclick = function(){
	reloadagain();
	
}


function reloadagain(){

	if(idx === 0){

		clearInterval(setinvdisplay);
		[hours,minutes,seconds,milliseconds] = [0,0,0,0];
		getdisplays[idx].textContent = "00 : 00 : 00 : 000";
	}else{
		clearInterval(setinvdisplay);
		seconds = "00";
		milliseconds = "00";

		getdlpsec.textContent = seconds;
		getdlpmlsec.innerText = milliseconds;


	}
}


function showdisplay(){


		if(idx === 0){

			milliseconds += 10;

			if(milliseconds === 1000){
				milliseconds = 0;
				seconds++;

				if(seconds === 60){
					seconds = 0;
					minutes++;

					if(minutes === 60){
						minutes = 0;
						hours++;
					}
				}
			}

			let h = hours < 10 ? "0"+hours : hours;
			let m = minutes < 10 ? "0"+minutes : minutes;
			let s = seconds < 10 ? "0"+seconds : seconds;
			let ms = milliseconds < 10 ? "00"+milliseconds : milliseconds < 100 ? "0"+milliseconds : milliseconds;

			getdisplays[idx].textContent = `${h} : ${m} : ${s} : ${ms}`;

		}else{

			milliseconds++;

			// console.log(milliseconds);

			if(milliseconds <= 9){
				getdlpmlsec.textContent = "0"+milliseconds;
			}

			if(milliseconds > 9){
				getdlpmlsec.innerText = milliseconds;
			}

			if(milliseconds > 99){
				milliseconds = 0;
				seconds++;
				getdlpsec.textContent = "0"+seconds;
			}

			if(seconds > 9){
				getdlpsec.innerText = seconds;
			}

		}

}


// 4MS
