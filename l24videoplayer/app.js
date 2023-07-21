// Get UI
const getcontainer = document.querySelector('.container');
const getvideoscreen = document.getElementById('videoscreen');

const prevbtn = document.getElementById('prev'),
	playbtn = document.getElementById('play'),
	nextbtn = document.getElementById('next'),
	stopbtn = document.getElementById('stop');


// FOR RANGE
// const progress = document.getElementById('progress');

// FOR PROGRESS
const getprogressctn = document.getElementById('progress-container');
const progress = document.getElementById('progress');


const getopenfullscreen = document.querySelector('.openfullscreen'),
	getclsfullscreen = document.querySelector('.closefullscreen');


const getdisplaytime = document.getElementById('displaytime');
const gettitle = document.getElementById('title');

const videos = ['samplevideo1','samplevideo2'];

// console.log(videos[1]);

let curridx = 0;

loadvideo(videos[curridx]);

function loadvideo(vdo){
	// console.log(vdo);
	getvideoscreen.src = `./source/${vdo}.mp4`;
	gettitle.textContent = vdo;

}


function playvdo(){
	playbtn.querySelector('i.fas').classList.remove('fa-play');
	playbtn.querySelector('i.fas').classList.add('fa-pause');

	// play() method came from video api
	getvideoscreen.play();
}

function pausevdo(){
	playbtn.querySelector('i.fas').classList.remove('fa-pause');
	playbtn.querySelector('i.fas').classList.add('fa-play');

	// pause() method came from video api
	getvideoscreen.pause();
}

function playpausevdo(){
	// paused keywork came from video api
	if(getvideoscreen.paused){
		playvdo();
	}else{
		pausevdo();
	}
}


function nextvdo(){
	curridx++;

	if(curridx > videos.length-1){
		curridx=0;
	}

	// console.log(curridx);

	loadvideo(videos[curridx]);
	playvdo();

}

function previousvdo(){
	curridx -= 1;

	if(curridx < 0){
		curridx = videos.length-1;
	}

	// console.log(curridx);

	loadvideo(videos[curridx]);
	playvdo();

}

function stopvideo(){
	getvideoscreen.currentTime = 0;
	pausevdo();
}


function updateprogress(e){
	// console.log('hay');

	// console.log(e.target);
	// console.log(e.srcElement);
	// console.log(this);


	// Method 1
	// currentTime came from video api
	// console.log(getvideoscreen.currentTime);

	// duration came from video api
	// console.log(getvideoscreen.duration);

	// console.log((getvideoscreen.currentTime/getvideoscreen.duration) * 100);


	// Method 2
	// const currentTime = e.target.currentTime;
	// const duration = e.target.duration;
	// console.log(currentTime,duration);


	// Method 3
	// const {currentTime} = e.target;
	// const {duration} = e.target;
	// console.log(currentTime,duration);


	// Method4
	// const {currentTime,duration} = e.target;
	// console.log(currentTime,duration);

	// Method 5
	const [currentTime,duration] = [e.target.currentTime,e.srcElement.duration];
	// console.log(currentTime,duration);



	// FOR RANGE
	// if(getvideoscreen.currentTime === 0){
	// 	progress.value = 0;
	// }else{
	// 	progress.value = (currentTime/duration) * 100;
	// }


	// FOR PROGRESS CONTAINER
	if(getvideoscreen.currentTime === 0){
		progress.style.width = '0%';
	}else{
		const progresspercent = (currentTime/duration) * 100;
		progress.style.width = `${progresspercent}%`;
	}




	let getmins = Math.floor(getvideoscreen.currentTime/60);

	// Method 1
	// if(getmins < 10){
	// 	// getmins = '0' + getmins;
	// 	getmins = '0' + String(getmins);
	// }

	// console.log(getmins);


	let getsecs = Math.floor(getvideoscreen.currentTime%60);

	// if(getsecs < 10){
	// 	// getsecs = '0' + getsecs;
	// 	getsecs = '0' + String(getsecs);
	// }

	// console.log(getsecs);


	// getdisplaytime.innerText = `${getmins}:${getsecs}`;


	// Method 2
	// Note : padStart(target length,pad string) must string data type;

	// console.log(typeof getmins,typeof getsecs);
	// console.log(getsecs.toString().padStart(2,'0'));

	const minutevalue = getmins.toString().padStart(2,'0');
	const secondvalue = getsecs.toString().padStart(2,'0');

	getdisplaytime.innerText = `${minutevalue}:${secondvalue}`;


}


function setprogress(e){
	// console.log('hay');
	// console.log((progress.value*getvideoscreen.duration)/100);

	// FOR RANGE
	// getvideoscreen.currentTime = (progress.value*getvideoscreen.duration)/100;


	// FOR PROGRESS CONTAINER

	// console.log(this);

	const getelewidth = e.target.clientWidth;
	// console.log(getelewidth);

	const getclientx = e.offsetX;
	// console.log(getclientx);

	const duration = getvideoscreen.duration;

	getvideoscreen.currentTime = (getclientx/getelewidth) * duration;

	// console.log(getvideoscreen.currentTime);

}


function openfullscreen(){

	if(getcontainer.requestFullscreen){
		getcontainer.requestFullscreen();
	}else if(getcontainer.mozRequestFullscreen){
		getcontainer.mozRequestFullscreen();
	}else if(getcontainer.webkitRequestFullscreen){
		getcontainer.webkitRequestFullscreen();
	}else if(getcontainer.msRequestFullscreen){
		getcontainer.msRequestFullscreen();
	}

	getopenfullscreen.style.display = 'none';
	getclsfullscreen.style.display = 'inline-block';

}

function closefullscreen(){

	if(document.exitFullscreen){
		document.exitFullscreen();
	}else if(document.mozCancelFullscreen){
		document.mozCancelFullscreen();
	}else if(document.webkitExitFullscreen){
		document.webkitExitFullscreen();
	}else if(document.msExitFullscreen){
		document.msExitFullscreen();
	}

	getopenfullscreen.style.display = 'inline-block';
	getclsfullscreen.style.display = 'none';

}



playbtn.addEventListener('click',playpausevdo);
nextbtn.addEventListener('click',nextvdo);
prevbtn.addEventListener('click',previousvdo);
stopbtn.addEventListener('click',stopvideo);

getvideoscreen.addEventListener('timeupdate',updateprogress);
getvideoscreen.addEventListener('click',playpausevdo);
getvideoscreen.addEventListener('ended',nextvdo);  //(we can use ended in both video & audio)



// FOR RANGE
// progress.addEventListener('click',setprogress);


// FOR PROGRESS CONTAINE
getprogressctn.addEventListener('click',setprogress);




getopenfullscreen.addEventListener('click',openfullscreen);
getclsfullscreen.addEventListener('click',closefullscreen);



// 24VD