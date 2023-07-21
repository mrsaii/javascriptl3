var getimgs = document.querySelectorAll('.img');
// console.log(getimgs);
 
 var getmodal = document.querySelector('.modal');
 var getbtnclose = document.querySelector('.btn-close');
 var getviews = document.getElementsByClassName('view');
 var getnoactives = document.getElementsByClassName('noactive');
 var getprevbtn = document.querySelector('.prev');
 var getnextbtn = document.querySelector('.next');
 var getcaption = document.querySelector('.caption');
 var getcounter = document.querySelector('.counter');

var curidx = 1;

for(var i=0; i < getimgs.length ; i++){
	getimgs[i].addEventListener('click',function(e){

		showmodal();

		// console.log(e.target.alt);
		// console.log(this.alt);

		// const getaltid = this.alt.split(' ');
		// console.log(getaltid[1]);
					//or
		// const getaltid = this.alt.split('');
		// console.log(getaltid[6]);
					//or
		// const getaltid = this.alt.split('');
		// console.log(getaltid[getaltid.length-1]);
					//or
		const getaltid = this.alt.split('').filter( rmspace => rmspace.trim() !== '');
		// console.log(getaltid);
		// console.log(getaltid[getaltid.length-1]);
		// console.log(typeof getaltid[getaltid.length-1]);

		curidx = Number(getaltid[getaltid.length-1]);
		console.log(curidx);
		// console.log(typeof curidx);

		slideshow(curidx);

	});
}


 function showmodal(){
 	getmodal.style.display = 'block';
 }

 // getbtnclose.addEventListener('click',function(){
 // 	getmodal.style.display = 'none';
 // });

 getbtnclose.onclick = function(){
 	getmodal.style.display = 'none';
 }


 document.addEventListener('click',function(e){
 	// console.log(e.target);

 	if(e.target === getmodal){
 		getmodal.style.display = 'none';
 	}

 });



function currentview(num){
	// curidx = num;

	slideshow(curidx = num);
}


getnextbtn.addEventListener('click',function(){
	slideshow(curidx += 1);

	// curidx += 1;
	// if(curidx > getviews.length){
	// 	curidx = 1;
	// }
	// console.log(curidx);
	
});


getprevbtn.addEventListener('click',function(){
	slideshow(curidx -= 1);

	// curidx -= 1;
	// if(curidx < 1{
	// 	curidx = getviews.length;
	// }
	// console.log(curidx);

});



function slideshow(num){

 	// console.log(num);

 	var x;

 	if(num > getviews.length){
 		num = 1;
 		curidx = 1;
 	}

 	if(num < 1){
 		num = getviews.length;
 		curidx = getviews.length;
 	}



 	for(x = 0; x < getviews.length; x++){
 		getviews[x].style.display = 'none';
 	}

 	for(x = 0; x < getnoactives.length; x++){
 		// getnoactives[x].classList.remove('active');
 					// or
 		getnoactives[x].className = getnoactives[x].className.replace(' active','');
 	}

 	

 	getviews[num-1].style.display = 'block';	
 	// getnoactives[num-1].className = 'noactive active';
 	// getnoactives[num-1].className += ' active';
	getnoactives[num-1].classList.add('active');
	getcaption.textContent = getnoactives[num-1].alt;
	getcounter.innerText = `${num} / ${getviews.length}`;

 }


// 19LB