// Get UI
const getbox = document.querySelector('.box');
const getbtns = document.querySelector('.btns');
const getboxtitle = document.getElementById('boxtitle');

getbox.addEventListener('click',function(e){
	// console.log('hay');

	// getbtns.classList.toggle('show');  //(didn't work with double click so we don't use this)
	getbtns.classList.add('show');

	// console.log(e.target);

	smallmenu(e.target);

});

getbox.addEventListener('dblclick',function(){
	getbtns.classList.remove('show');
});


dragme(getbox);

function dragme(getele){
	// console.log(getele);

	var getcx,getcy,setcx,setcy;

	// getele.onmousedown = mousedown;

	if(getboxtitle){
		getboxtitle.onmousedown = mousedown;
	}

	function mousedown(e){
		// console.log('i am working');
		// console.log(e.target);

		getcx = e.clientX;
		getcy = e.clientY;

		// console.log('step 1',getcx,getcy);

		document.onmousemove = dragnow;
		document.onmouseup = stopdrag;

		getbtns.classList.remove('show');
	}

	function dragnow(e){
		// console.log('i am working');
		// console.log(e.target);

		// console.log(e.clientX,e.clientY);

		setcx = getcx - e.clientX;
		setcy = getcy - e.clientY;

		// console.log('step 2',setcx,setcy);

		getcx = e.clientX;
		getcy = e.clientY;

		// console.log('step 3',getcx,getcy);

		const btnleft = getele.offsetLeft;
		const btntop = getele.offsetTop;

		// console.log(btnleft,btntop);

		getele.style.left = (btnleft-setcx) + "px";
		getele.style.top = (btntop-setcy) + "px";
	}

	function stopdrag(){
		// console.log('stopped');
		document.onmousemove = null;
		document.onmouseup = null;
	}
}


function smallmenu(iconbox){
	if(iconbox.classList.contains('btn-icon') || iconbox.classList.contains('icn')){
		console.log('yes');
	}else{
		console.log('no');
	}
}